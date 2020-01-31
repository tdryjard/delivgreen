import React from 'react';
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdhesionCard from './adhesionCard/AdhesionCard';
import './Adhesion.css';

function Adhesion() {

	// Objets crées pour les tests (à enlever)
	const adhesionInfoPro = {
		type: "PRO",
		civilState: "Homme",
		lastname: "DRYJARDS DES GARNIERS",
		firstname: "Thomas",
		email: "thomas@gmail.com",
		telephone: "06 78 95 48 21",
		rib: "154 256 485 458 54",
		adress: "15 rue des Pipapo",
		deliveryZone: "Orleans 15km",
		vehicleType: "Vélo",
		tva: "F6E8 2546",
		siret: "CE84 2546"
	}

	const adhesionInfoPart = {
		type: "PART",
		civilState: "Homme",
		lastname: "PROVOT",
		firstname: "Alexis",
		email: "thomas@gmail.com",
		telephone: "06 78 95 48 21",
		rib: "154 256 485 458 54",
		adress: "15 rue des Pipapo",
		deliveryZone: "Orléans 15km",
		vehicleType: "Vélo",
	}

	return (
		<div className="adhesion-ctn">
			<header>
				<FontAwesomeIcon icon={faIdCard} />
				<div className="title">
						Demande d'adhésion
				</div>
			</header>
			<div className="adhesion-card-ctn">
				<AdhesionCard {...adhesionInfoPro} />
				<AdhesionCard {...adhesionInfoPart} />
				<AdhesionCard {...adhesionInfoPart} />
				<AdhesionCard {...adhesionInfoPart} />
			</div>
		</div>
	)
}

export default Adhesion;
