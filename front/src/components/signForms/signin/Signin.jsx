import React, { useState, useRef } from 'react';
import '../Sign.css';
import './Signin.css';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../footer/Footer'
import Input from '../../formElements/Input';
import AlertPopup from '../../alertPopup/AlertPopup';
import verifyForm from '../../../utils/signFormVerification/verifyForm'; 

function Signin() {

    const [alertPopup, setAlertPopup] = useState([]);
    const inputsRef = {
        lastname: useRef(null),
        firstname: useRef(null),
        email: useRef(null),
        phone: useRef(null),
        password: useRef(null),
        password_verification: useRef(null)
    }

    const formSubmit = function sendElementsInfoToVerifying (event) {
        event.preventDefault();
        console.log(event.target.children)
        // Initilisation du verificateur de formulaire
        if (!verifyForm.checkInputsRef(inputsRef)) {
            setAlertPopup([...alertPopup, {
                    type: 'error',
                    text: 'Veuillez réactualiser la page',
                }
            ])
            return;
        }

        const myBody = {
            "lastname": inputsRef.lastname.current.value,
            "firstname": inputsRef.firstname.current.value,
            "email": inputsRef.email.current.value,
            "password": inputsRef.password.current.value,
            "phone": inputsRef.phone.current.value
        }

        const urlApi = 'http://localhost:8000/api';

        // const response = await fetch(`${urlApi}/users`, {
        //     method: 'POST',
        //     body: JSON.stringify(myBody),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const { status } = response;
        // const result = await response.json();
        // switch (status) {
        //     case 500: {
        //         if (result.inputs) return result.inputs
        //     }
        //     default: 
        //         return result;
        // }

        fetch(`${urlApi}/users`, {
            method: 'POST',
            body: JSON.stringify(myBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(res => console.log(res))
        
        setAlertPopup([...alertPopup, {
                type: 'success',
                text: 'Vous êtes inscrit.',
            }
        ])
    }

    return (
        <div className='sign-ctn'>
            <NavBar />
            { alertPopup.map((popup, i) => <AlertPopup 
                                        {...popup}
                                        key={i}
                                    />) 
            }
            <h1>Inscription</h1>
            <form className='sign-form' onSubmit={formSubmit}>
                <Input 
                    label={{ for: 'signin-lastname', text: 'Nom :' }} 
                    attributes={{ type:'text', id:'signin-lastname', name:'lastname', placeholder:'Nom' }} 
                    reference={inputsRef.lastname}
                />
                <Input 
                    label={{ for: 'signin-firstname', text: 'Prénom :' }} 
                    attributes={{ type:'text', id:'signin-firstname', name:'firstname', placeholder:'Prénom' }} 
                    reference={inputsRef.firstname}
                />
                <Input 
                    label={{ for: 'signin-email', text: 'Email :' }} 
                    attributes={{ type:'email', id:'signin-email', name:'email', placeholder:'Email' }} 
                    reference={inputsRef.email}
                />
                <Input 
                    label={{ for: 'signin-telephone', text: 'Téléphone :' }} 
                    attributes={{ type:'text', id:'signin-telephone', name:'telephone', placeholder:'Téléphone' }} 
                    reference={inputsRef.phone}
                />
                <Input 
                    label={{ for: 'signin-password', text: 'Mot de passe :' }} 
                    attributes={{ type:'password', id:'signin-password', name:'password', placeholder:'Mot de passe' }} 
                    reference={inputsRef.password}
                />
                <Input 
                    label={{ for: 'signin-password-verification', text: 'Repetez le mot de passe :' }} 
                    attributes={{ type:'password', id:'signin-password-verification', name:'password-verification', placeholder:'Retapez votre mot de passe' }} 
                    reference={inputsRef.password_verification} 
                />
                <button type='submit' className='btn'>S'inscrire</button>
            </form>
            <Footer />
        </div>
    )
}

export default Signin;