import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCaretDown, faCaretUp, faPhone, faUserTie, faMoneyBillWaveAlt, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import TextInfo from '../../adminGlobalComponents/textInfo/TextInfo';
import ManageCard from '../../adminGlobalComponents/manageCard/ManageCard';
import ManageButton from '../../adminGlobalComponents/manageButton/ManageButton';
import InfoList from '../../adminGlobalComponents/manageCard/infoList/InfoList';
import ManageButtonContainer from '../../adminGlobalComponents/manageButton/manageButtonContainer/ManageButtonContainer';
import ManageCardHeader from '../../adminGlobalComponents/manageCard/cardHeader/ManageCardHeader';
import urlApi from '../../../api/api';
import './AnnouncementCard.css';

function AnnouncementCard({ lastname, firstname, id , phone, email, startingPoint, endingPoint, arrival_date, price, removeAnnounce }) {

	const [showMoreInfo, setShowMoreInfo] = useState(false);

	const deleteAnnounce = async function deleteAnAnnounce () {
		if (window.confirm(`Voulez-vous bien supprimez l'annonce #${id} ?`)) {
			const response = await fetch(`${urlApi}/api/admin/announces/${id}`, {
				method: 'DELETE'
			});
			const { status, message } = response.json();
			console.log(status)
			if (status === 200) alert(message);

			// Suppression (front) de l'annonce
			setShowMoreInfo(false);
			removeAnnounce(id);
		}
	}

	return (
		<ManageCard>
			<ManageCardHeader 
				dropDownState={showMoreInfo} 
				title={`N° ${id}`}
				sticky
			>
				<ManageButtonContainer>
					<ManageButton icon={faTrash} className="delete-btn" onClick={() => { deleteAnnounce(); }} />
					<ManageButton icon={showMoreInfo ? faCaretUp : faCaretDown} onClick={() => setShowMoreInfo(!showMoreInfo)} />
				</ManageButtonContainer>
			</ManageCardHeader>
			<InfoList moreInfo={showMoreInfo ? 'more-info' : ''}>
				<TextInfo title="Départ : " text={startingPoint} />
				<TextInfo title="Arrivée : " text={endingPoint} />
				<TextInfo title={<FontAwesomeIcon icon={faMoneyBillWaveAlt} />} text={`${price} €`} />
				<TextInfo title="Date limite : " text={arrival_date} />
				<TextInfo title={<FontAwesomeIcon icon={faUserTie} />} text={`${lastname} ${firstname}`} />
				<TextInfo title={<FontAwesomeIcon icon={faEnvelopeOpen} />} text={`${email}`} />
				<TextInfo title="N°" text={id} />
				<TextInfo title={<FontAwesomeIcon icon={faPhone} />} text={phone} />
			</InfoList>
		</ManageCard>
	)
}

export default AnnouncementCard;
