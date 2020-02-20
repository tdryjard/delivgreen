import React from 'react';
import './ConfirmationAdhesion.css';
import Navbar from '../NavBar/NavBar';
import Footer from '../footer/Footer';

function ConfirmationAdhesion() {

	return (
		<div className='Confirmation-page'>
			<Navbar/>
			
				<div className="text-confirmation-page">
				<div className="confirm_logo">
				<img
					src={require('../confirmationAdhesion/images/ok.svg')}
					alt="confirm logo"
          		/></div>
					<h2>Nous avons bien pris en compte votre demande d'adhésion</h2>
					<h2>Nous vous en remercions et nous reviendrons vers vous très rapidement! </h2>
					<h2>Merci.</h2>
					<button type='submit' className='btn-confirmation-page-adhesion'>Retour accueil</button>
				</div>
            
			<Footer/>
		</div>
	)
}

export default ConfirmationAdhesion;
