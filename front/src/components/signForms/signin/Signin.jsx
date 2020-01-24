import React from 'react';
import '../Sign.css';
import './Signin.css';

function Signin() {
    return (
        <div className='sign-ctn'>
            <h1>Inscription</h1>
            <form className='sign-form' action=''>
                <input type='text' name='lastname' placeholder='Nom' />
                <input type='text' name='firstname' placeholder='Prénom' />
                <input type='email' name='email' placeholder='Email' />
                <input type='text' name='tel' placeholder='Téléphone' />
                <input type='password' name='password' placeholder='Mot de passe' />
                <input type='password' name='password-verification' placeholder='Retapez votre mot de passe' />
                <button type='submit' className='btn'>S'inscrire</button>
            </form>
        </div>
    )
}

export default Signin;
