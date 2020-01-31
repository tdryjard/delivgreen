import React, { useState } from 'react';
import TextInfo from '../adhesionInfoComponents/textInfo/TextInfo';
import './AdhesionCard.css';

function AdhesionCard({ type, civilState, lastname, firstname, email, telephone, rib, IDCard, adress, deliveryZone, vehicleType, tva, siret }) {

	const [showMoreInfo, setShowMoreInfo] = useState(false);

	return (
		<div className="adhesion-card">
			<div className="minimum-info-ctn">
				<div className="name">
					{lastname} {firstname}
				</div>
				<div className="manage-btn-ctn">
					<button className="manage-btn" onClick={() => { setShowMoreInfo(!showMoreInfo) }}>Plus de détails</button>
				</div>
			</div>
			<div className={`adhesion-infos ${showMoreInfo ? 'more-info' : ''}`}>
				<TextInfo title="Type :" text={type} />
				<TextInfo title="Etat civil :" text={civilState} />
				<TextInfo title="Nom :" text={lastname} />
				<TextInfo title="Prénom :" text={firstname} />
				<TextInfo title="Email :" text={email} />
				<TextInfo title="Télephone :" text={telephone} />
				<TextInfo title="Adresse :" text={adress} />
				<TextInfo title="RIB :" text={rib} />
				<TextInfo title="Zone de livraison :" text={deliveryZone} />
				<div className="info">
					<span className="info-title">Carte d'identité : </span>
					<span>METTRE LE FICHIER A TELECHARGER ICI</span>
				</div>
				<TextInfo title="Type du véhicule :" text={vehicleType} />
				{
					type === "PRO" && (
						<>
							<TextInfo title="TVA :" text={tva} />
							<TextInfo title="SIRET :" text={siret} />
							<div className="info">
								<span className="info-title">KIB : </span>
								<span>METTRE LE FICHIER A TELECHARGER ICI</span>
							</div>
						</>
					)
				}
				<button className="manage-btn accept-btn">Accepter</button>
				<button className="manage-btn refuse-btn">Refuser</button>
			</div>
		</div>
	)
}

export default AdhesionCard;
