import React from 'react';
import '../Sign.css';
import './Signin.css';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../footer/Footer'

function Signin() {
    return (
        <div className='sign-ctn'>
            <NavBar />
            <h1>Inscription</h1>
            <form className='sign-form' action=''>
                <input type='text' name='lastname' placeholder='Nom' />
                <input type='text' name='firstname' placeholder='Prénom' />
                <input type='email' name='email' placeholder='Email' />
                <input type='tel' name='tel' placeholder='Téléphone' />
                <input type='password' name='password' placeholder='Mot de passe' />
                <input type='password' name='password-verification' placeholder='Retapez votre mot de passe' />
                <button type='submit' className='btn'>S'inscrire</button>
            </form>
            <Footer />
        </div>
    )
}

export default Signin;