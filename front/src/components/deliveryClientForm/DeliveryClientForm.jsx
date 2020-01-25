import React from 'react';
import '../signForms/Sign.css';
import './DeliveryClientForm.css';
import Input from '../formElements/Input';

function DeliveryClientForm() {
	return (
		<div className='sign-ctn'>
			<div className="delivery_heading">
				<img src={require('../images/delivery_client_form.svg')} alt="delivery logo" />
				<h1>Faites-vous livrer un colis</h1>
			</div>
			<form className='sign-form' action=''>
				<Input label={{for: "delivery-start", text: "Adresse de départ"}} attributes={{type: 'text', id: "delivery-start", name: 'delivery-start'}} />
				<Input label={{for: 'delivery-arrival', text: 'Point d\'arrivée'}} attributes={{type: 'text', id: 'delivery-arrival', name: 'delivery-arrival'}} />
				<Input label={{for: 'delivery-pack-length', text: 'Longueur (cm)'}} attributes={{type: 'number', id: 'delivery-pack-length', name: 'delivery-pack-length'}} />
				<Input label={{for: 'delivery-weight', text: 'Poids (kg)'}} attributes={{type: 'number', id: 'delivery-weight', max: '150', min: '0', name: 'delivery-weight'}} />
				<Input label={{for: 'delivery-date', text: 'Date'}} attributes={{type: 'date', id: 'delivery-date', name: 'delivery-date'}} />
				<div className="delivery-client-price">
					<div className="price-tip">Prix de la livraison : </div>
					<div>50€</div>
				</div>
				<button type='submit' className='btn'>Valider</button>
			</form>
		</div>
	)
}

export default DeliveryClientForm;
