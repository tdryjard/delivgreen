import React, { useState } from 'react';
import TextInfo from '../announceInfoComponents/textInfo/TextInfo';
import './AnnouncementCard.css';

function AnnouncementCard({ lastname, firstname, deliveryID , telephone, startingPoint, endingPoint, limitDate }) {

	const [showMoreInfo, setShowMoreInfo] = useState(false);

	return (
		<div className="announcement-card">
			<div className="minimum-info-ctn">
				<div className="name">
					Commande n° {deliveryID}
				</div>
				<div className="manage-btn-ctn">
					<button className="manage-btn" onClick={() => { setShowMoreInfo(!showMoreInfo) }}>Plus de détails</button>
				</div>
			</div>
			<div className={`announcement-infos ${showMoreInfo ? 'more-info' : ''}`}>
				<TextInfo title="Adresse de départ : " text={startingPoint} />
				<TextInfo title="Adresse d'arrivée : " text={endingPoint} />
				<TextInfo title="Date limite de livraison : " text={limitDate} />
				<TextInfo title="Nom : " text={lastname} />
				<TextInfo title="Prénom : " text={firstname} />
				<TextInfo title="N° commande : " text={deliveryID} />
				<TextInfo title="Télephone : " text={telephone} />
			</div>
			<button className="manage-btn refuse-btn">Supprimer</button>
		</div>
	)
}

export default AnnouncementCard;
