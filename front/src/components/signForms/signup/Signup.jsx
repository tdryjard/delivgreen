import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from '../../footer/Footer';
import Navbar from '../../NavBar/NavBar';
import Input from '../../formElements/Input';
import signUp from '../signUpFetch';
import './Signup.css';
import '../Sign.css';

function Signup() {

    const [infoMessage, setInfoMessage] = useState(null);
    const [redirection, setRedirection] = useState(null);

    const inputsRef = {
        email: useRef(null),
        password: useRef(null)
    }

    const userConnect = function connectUser (event) {
        event.preventDefault(); 

        Object.values(inputsRef).forEach(input => input.current.classList.remove('error'))

        const myBody = {
            "email": inputsRef.email.current.value,
            "password": inputsRef.password.current.value
        }

        signUp(myBody)
        .then(result => {
            const { alert, status, inputs, data } = result;

            console.log(data)

            setInfoMessage(alert);

            if (status === 'ERROR') {
                if (inputs) {
                    inputs.forEach((input) => {
                        inputsRef[input].current.classList.add('error');
                    });
                }
            } else if (status === 'SUCCESS') {
                setTimeout(() => setRedirection(<Redirect to="/" />), 2500)
            }
        });
    }

    return (
        <>
            <Navbar/>
            <div className='sign-ctn'>
                <h1>Connexion</h1>
                { redirection }
                {
                    infoMessage && (
                        <div className={`info--message ${infoMessage.type}`}>
                            <FontAwesomeIcon icon={faInfoCircle} className="icon"/>
                            <span>{infoMessage.text}</span>
                            <FontAwesomeIcon icon={faTimes} className="close" onClick={() => setInfoMessage(null) } />
                        </div>
                    )
                }
                <form className='sign-form' onSubmit={userConnect}>
                    <Input 
                        label={{ for: 'signup-email', text: 'Email' }} 
                        attributes={{ type:'email', name: 'email', id: 'signup-email' }} 
                        reference={inputsRef.email}
                    />
                    <Input 
                        label={{ for: 'signup-password', text: 'Mot de passe' }} 
                        attributes={{ type:'password', name: 'password', id: 'signup-password' }} 
                        reference={inputsRef.password}
                    />
                    <button type='submit' className='btn'>Se connecter</button>
                </form>
            </div>
            <Footer />
        </>
    )
}
    
export default Signup;
