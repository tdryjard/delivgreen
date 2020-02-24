import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import './adhesion.css';
import apiUrl from '../api/api';
import apiOrigin from '../api/origin';
import { useRef } from 'react';

const Adhesion = () => {
  const [pro] = useState(true);

  const [infoMessage, setInfoMessage] = useState(null);
  const [userId] = useState(1)

	const inputsRef={
		lastname: useRef(null),
		firstname: useRef(null),
		email: useRef(null),
		phone: useRef(null),
    city: useRef(null),
    rib: useRef(null),
    perimeter: useRef(null),
    siret: useRef(null),
    tva: useRef(null),
    kbis: useRef(null)
	}

	async function sendAnnounce(event) {
    event.preventDefault();
    
		const myBody = {
      user_id: {userId},
			lastname: inputsRef.lastname.current.value || null,
			firstname: inputsRef.firstname.current.value || null,
			email: inputsRef.email.current.value || null,
			phone: inputsRef.phone.current.value || null,
      city: inputsRef.city.current.value || null,
      rib: inputsRef.rib.current.value || null,
      perimeter: inputsRef.perimeter.current.value || null,
      siret: inputsRef.siret.current.value || null,
      kbis: inputsRef.kbis.current.value || null,
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
    <div className="contentAdhesion">
      <NavBar />
      <div className="adhesion_logo">
        <img src={require('../adhesion/images/form.svg')} alt="contact logo" />
        <h1 className="titleAdhesion">Demande d'adhesion</h1>
      </div>

      <form className="sign-form" action="">
        <div className="content-form">
          <div className="locationAdd">
            <label>
              Nom :
              <input type="text" name="lastname" />
            </label>

            <label>
              Prénom :
              <input type="text" name="firstname" />
            </label>

            <label>
              Email :
              <input type="email" name="email" />
            </label>

            <label>
              Téléphone :
              <input type="tel" name="phone" />
            </label>

            <label>
              Ville :
              <input className="longInput" type="text" name="city" />
            </label>

            <label>
              RIB :
              <input className="longInput" type="text" name="rib" />
            </label>
          </div>

          <div className="parcel-information">
            <label>
              Périmetre :
              <input className="locationInput" type="text" name="perimeter" />
            </label>

            {pro ? (
              <div className="containerPro">
                <label>
                  N° Siret :
                  <input
                    className="contentFileInput"
                    type="text"
                    name="SIRET"
                  />
                </label>

                <label>
                  TVA :
                  <input className="contentFileInput" type="text" name="VAT" />
                </label>

                <div className="contentFileInput">
                  <label htmlFor="carteIdd" className="label-file">
                    Insérer Kbis de moins de 3 mois
                    <input
                      className="fileInput"
                      type="file"
                      id="carteIdd"
                      name="CarteIdd"
                      accept="image/png, image/jpeg"
                    />
                  </label>
                </div>
              </div>
            ) : null}
            <div className="contentFileInput">
              <label htmlFor="carteIdd" className="label-file">
                Insérer pièce d'identité
                <input
                  className="fileInput"
                  type="file"
                  id="carteIdd"
                  name="CarteIdd"
                  accept="image/png, image/jpeg"
                />
              </label>
            </div>
            <button type="submit" className="btn-send-adhesion">
              Envoyer
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Adhesion;
