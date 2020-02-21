import React, {useEffect, useState, useRef} from 'react';
import apiUrl from '../api/api';
import apiOrigin from '../api/origin';
import '../signForms/Sign.css';
import './DeliveryClientForm.css';
import Input from '../formElements/Input';
import Navbar from '../NavBar/NavBar';
import Footer from '../footer/Footer';

function DeliveryClientForm() {

	const [infoMessage, setInfoMessage] = useState(null);
	const [addressEnterStart, setAddressEnterStart] = useState('')
	const [addressEnterEnd, setAddressEnterEnd] = useState('')
	const [resultAddressStart, setResultAddressStart] = useState({})
	const [resultAddressEnd, setResultAddressEnd] = useState({})
	const [addressSelectStart, setAdressSelectStart] = useState([])
	const [addressSelectEnd, setAdressSelectEnd] = useState([])
	const [posStart, setPosStart] = useState([])
	const [posEnd, setPosEnd] = useState([])
	const [distKm, setDistKm] = useState()

	useEffect(() => {
		fetch(`https://api-adresse.data.gouv.fr/search/?q=${addressEnterStart.replace(' ', '%20')}&type=housenumber&autocomplete=1`)
		.then(res => res.json())
		.then(res => {
			if(Array.isArray([res.features])){
				setResultAddressStart(res.features)
			}
			else{
				setResultAddressStart([])
			}
		})
		
	}, [addressEnterStart])

	useEffect(() => {
		fetch(`https://api-adresse.data.gouv.fr/search/?q=${addressEnterEnd.replace(' ', '%20')}&type=housenumber&autocomplete=1`)
			.then(res => res.json())
			.then(res => {
			if(Array.isArray([res.features])){
				setResultAddressEnd(res.features)
			}
			else{
				setResultAddressEnd([])
			}
		})

		distance(posStart[0], posStart[1], posEnd[0], posEnd[1])

		
	}, [addressEnterEnd])

	const distance = (lat1, lon1, lat2, lon2) => {
		let radlat1 = Math.PI * lat1 / 180
        let radlat2 = Math.PI * lat2 / 180
        let theta = lon1-lon2
        let radtheta = Math.PI * theta / 180
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
		dist = dist * 1.609344
		setDistKm(dist)
	}
	

	const enterAddressStart = (event) => {
		const address = event.target.value
		setAddressEnterStart(address)
	}

	const enterAddressEnd = (event) => {
		const address = event.target.value
		setAddressEnterEnd(address)
	}

	const inputsRef={
		lngt: useRef(null),
		weight: useRef(null),
		height: useRef(null),
		date: useRef(null),
		price_delivery: useRef(null)
	}

	async function sendAnnounce(event) {
		event.preventDefault();
		const date = new Date();
		const dateString = date.toLocaleDateString();
		const dateTime = date.toLocaleTimeString();

		const myBody = {
			lngt: inputsRef.lngt.current.value || null,
			height: inputsRef.height.current.value || null,
			weight: inputsRef.weight.current.value || null,
			limit_date: inputsRef.date.current.value || null,
			publish_date: `${dateString} ${dateTime}`,
			price: 50
		}

		// Si un input n'a pas été rempli
		if (Object.values(myBody).includes(null)) setInfoMessage({ text: 'Champ(s) vide(s)' })


		try{
			const response = await fetch(apiUrl + '/api/orders', {
				method: 'POST',
				headers: {
					'Content-Type' :'application/json',
					'Acces-Control-Allow-Origin' : {apiOrigin}	
				},
				body: JSON.stringify(myBody)
			});
			const data = await response.json();
			inputsRef[data.inputs[0]].current.style.border = 'solid red 3px'
		} catch (error)  {
			console.log(error);
		}
	}

	
	return (
		<div className='sign-ctn' onClick={() => {setResultAddressEnd([]); setResultAddressStart([])}}>
			<Navbar/>
			<div className="delivery_heading">
				<img src={require('../images/delivery_client_form.svg')} alt="delivery logo" />
				<h1>Faites-vous livrer un colis</h1>
			</div>
			<form className='sign-form' onSubmit={sendAnnounce}>
				<div className="containerInputAddress">
					<div className="containerAddressStart">
						<div className="contentAddressInput">
							<h4 className="titleInput">adresse de départ</h4>
							<input onChange={enterAddressStart} className="inputInfoPackageStart" placeholder="entrer adresse de départ" role="combobox" aria-autoComplete="list" value={addressEnterStart}/>
						</div>
						<div className="contentResultAddress">
							{(Array.isArray(resultAddressStart) && addressSelectStart !== addressEnterStart) &&
							resultAddressStart.map(address => {
								return(
								<div className="labelAddress">
									<p onClick={() => {setAddressEnterStart(address.properties.label); setPosStart(address.geometry.coordinates); setAdressSelectStart(address.properties.label)}}>{address.properties.label}</p> 
								</div>
								)
								})}
						</div>
					</div>
					<div className="containerAddressEnd">
						<div className="contentAddressInputEnd">
							<h4 className="titleInput">adresse d'arrivé</h4>
							<input onChange={enterAddressEnd} className="inputInfoPackageEnd" placeholder="entrer adresse d'arrivé" role="combobox" aria-autoComplete="list" value={addressEnterEnd}/>
						</div>
						<div className="contentResultAddress">
							{(Array.isArray(resultAddressEnd) && addressSelectEnd !== addressEnterEnd) &&
							resultAddressEnd.map(address => {
								return(
								<div className="labelAddress">
									<p onClick={() => {setAddressEnterEnd(address.properties.label); setPosEnd(address.geometry.coordinates); setAdressSelectEnd(address.properties.label)}}>{address.properties.label}</p> 
								</div>
								)
								})}
						</div>
					</div>
				</div>
				<Input 
					required
					label={{for: 'delivery-pack-length', text: 'Longueur (cm)'}} 
					attributes={{type: 'number', id: 'delivery-pack-length', name: 'delivery-pack-length', min:'0', max:'100', }} 
					reference={inputsRef.lngt} 
				/>
				<Input 
					required
					label={{for: 'delivery-height', text: 'Hauteur (cm)'}} 
					attributes={{type: 'number', id: 'delivery-height', name: 'delivery-height', min:'0' }}
					reference={inputsRef.height} 
				/>
				<Input 
					required
					label={{for: 'delivery-weight', text: 'Poids (kg)'}} 
					attributes={{type: 'number', id: 'delivery-weight', max: '30', name: 'delivery-weight', min:'0' }}
					reference={inputsRef.weight} 
				/>
				<Input 
					required
					label={{for: 'delivery-date', text: 'Date'}} 
					attributes={{type: 'date', id: 'delivery-date', name: 'delivery-date'}} 
					reference={inputsRef.date}
				/>
				<div className="delivery-client-price">
					<div className="price-tip">Prix de la livraison : </div>
					<div>50€</div>
				</div>

				{
					infoMessage && (
						<div className="popup-info">
							{infoMessage.text}
						</div>
					)
				}

				<button type='submit' className='btn'>Valider</button>
			</form>
			<Footer/>
		</div>
	)
}

export default DeliveryClientForm;
