import React from 'react';
import Footer from '../../footer/Footer';
import Navbar from '../../NavBar/NavBar'
import './Signup.css';
import '../Sign.css';

function Signup() {
    return (
        <>
        <Navbar/>
        <div class='sign-ctn'>
            <h1>Connexion</h1>
            <form class='sign-form' action=''>
                <input type='email' name='email' placeholder='Email' />
                <input type='password' name='password' placeholder='Mot de passe' />
                <button type='submit' class='btn'>Se connecter</button>
            </form>
        </div>
        <Footer />
        </>
    )
}
    
export default Signup;
