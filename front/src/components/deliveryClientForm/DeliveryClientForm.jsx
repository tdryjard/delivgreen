import React from 'react';
import apiUrl from '../api/api';
import apiOrigin from '../api/origin';
import '../signForms/Sign.css';
import './DeliveryClientForm.css';
import Input from '../formElements/Input';
import { useState } from 'react';
import { useRef } from 'react';

function DeliveryClientForm() {

	const [infoMessage, setInfoMessage] = useState(null);

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
		<div className='sign-ctn'>
			<div className="delivery_heading">
				<img src={require('../images/delivery_client_form.svg')} alt="delivery logo" />
				<h1>Faites-vous livrer un colis</h1>
			</div>
			<form className='sign-form' onSubmit={sendAnnounce}>
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
		</div>
	)
}

export default DeliveryClientForm;
