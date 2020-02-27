import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import './adhesion.css';
import apiUrl from '../api/api';
import apiOrigin from '../api/origin';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Adhesion = () => {
  const location = useLocation()
  const proBool = location.professionnal
  const [pro, setPro] = useState(false);
  const [infoMessage, setInfoMessage] = useState(null);
  const [userId] = useState(1)
  console.log(proBool)

	const inputsRef = {
		lastname: useRef(null),
		firstname: useRef(null),
		email: useRef(null),
		phone: useRef(null),
    rib: useRef(null),
    siret: useRef(null),
    tva: useRef(null),
    kbis: useRef(null)
  }

	async function sendAnnounce(event) {
    event.preventDefault();
    
    setPro(proBool)
    console.log(proBool)
    if(!proBool) {

      const DeliveryMan = {
        accepted: false,
        is_pro: proBool,
        rib: inputsRef.rib.current.value
      }

      console.log(DeliveryMan)

      if (Object.values(DeliveryMan).includes(null)){
        setInfoMessage({ text: 'Champ(s) vide(s)' })
      } 
  
      else {
  
        try{
          console.log('enter')
          const response = await fetch(apiUrl + '/api/adhesion/delivery-man', {
            method: 'POST',
            headers: {
              'Content-Type' :'application/json',
              'Acces-Control-Allow-Origin' : {apiOrigin}	
            },
            body: JSON.stringify(DeliveryMan)
          });
          const data = await response.json();
          inputsRef[data.inputs[0]].current.style.border = 'solid red 3px'
        } catch (error)  {
          console.log(error);
        }
        
        try{
          fetch(apiUrl + `/api/adhesion/${userId}`, {
            method: 'PUT'
          });
        } catch (error)  {
          console.log(error);
        }
      }
    } else if (proBool === true) {

    const DeliveryMan = {
      accepted: false,
      is_pro: proBool,
      rib: inputsRef.rib.current.value
    }
  
    const Professionnal = {
      siret: inputsRef.siret.current.value || null,
      kbis: inputsRef.kbis.current.value || null,
      tva: inputsRef.tva.current.value || null
    }

      if (Object.values(DeliveryMan).includes(null) || Object.values(Professionnal).includes(null)){
        setInfoMessage({ text: 'Champ(s) vide(s)' })
        console.log('dalu')
      } 
  
      else {
  
        try{
          const response = await fetch(apiUrl + '/api/adhesion/delivery-man', {
            method: 'POST',
            headers: {
              'Content-Type' :'application/json',
              'Acces-Control-Allow-Origin' : {apiOrigin}	
            },
            body: JSON.stringify(DeliveryMan)
          });
          const data = await response.json();
          inputsRef[data.inputs[0]].current.style.border = 'solid red 3px'
        } catch (error)  {
          console.log(error);
        }
    
        try{
          const response = await fetch(apiUrl + '/api/adhesion/professional', {
            method: 'POST',
            headers: {
              'Content-Type' :'application/json',
              'Acces-Control-Allow-Origin' : {apiOrigin}	
            },
            body: JSON.stringify(Professionnal)
          });
          const data = await response.json();
          inputsRef[data.inputs[0]].current.style.border = 'solid red 3px'
        } catch (error)  {
          console.log(error);
        }
        
        try{
          fetch(apiUrl + `/api/adhesion/${userId}`, {
            method: 'PUT'
          });
        } catch (error)  {
          console.log(error);
        }
      }
      }
    }
		


		

  return (
    <div className="contentAdhesion">
      <NavBar />
      <div className="adhesion_logo">
        <img src={require('../adhesion/images/form.svg')} alt="contact logo" />
        <h1 className="titleAdhesion">Demande d'adhesion</h1>
      </div>
      {
                infoMessage && (
                    <div className={`infoMessageAdhesion`}>
                        <FontAwesomeIcon icon={faInfoCircle} className="icon"/>
                        <span className="textInfoMessageAdhesion">{infoMessage.text}</span>
                        <FontAwesomeIcon icon={faTimes} className="close" onClick={() => setInfoMessage(null) } />
                    </div>
                )
      }
      <form onSubmit={sendAnnounce} className="sign-form" action="">
        <div className="content-form">
            <label>
              Nom :
              <input type="text" name="lastname" ref={inputsRef.lastname} />
            </label>

            <label>
              Prénom :
              <input type="text" name="firstname" ref={inputsRef.firstname} />
            </label>

            <label>
              Email :
              <input type="email" name="email" ref={inputsRef.email}/>
            </label>

            <label>
              Téléphone :
              <input type="tel" name="phone" ref={inputsRef.phone} />
            </label>

            <label>
              RIB :
              <input className="longInput" type="text" name="rib" ref={inputsRef.rib}/>
            </label>

            {proBool === true ? (
              <div>
                <label>
                  N° Siret :
                  <input
                    type="text"
                    name="SIRET"
                    ref={inputsRef.siret}
                  />
                </label>

                <label>
                  TVA :
                  <input className="contentFileInput" type="text" name="VAT" ref={inputsRef.tva} />
                </label>

                  <label>
                    Insérer Kbis de moins de 3 mois :
                    <input
                      className="contentFileInput"
                      type="text"
                      name="CarteIdd"
                      ref={inputsRef.kbis}
                    />
                  </label>
              </div>
            ) : null}


          <button type="submit" className="btn-send-adhesion">
              Envoyer
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Adhesion;