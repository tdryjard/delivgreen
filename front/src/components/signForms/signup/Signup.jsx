import React from 'react';
import Footer from '../../footer/Footer';
import './Signup.css';
import '../Sign.css';

function Signup() {
    return (
        <div class='sign-ctn'>
            <h1>Connexion</h1>
            <form class='sign-form' action=''>
                <input type='email' name='email' placeholder='Email' />
                <input type='password' name='password' placeholder='Mot de passe' />
                <button type='submit' class='btn'>Se connecter</button>
            </form>
            <Footer />
        </div>
    )
}
    
export default Signup;
