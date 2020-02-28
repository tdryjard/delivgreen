import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCaretDown, faCaretUp, faPhone, faUserTie, faMoneyBillWaveAlt } from "@fortawesome/free-solid-svg-icons";
import TextInfo from '../../adminGlobalComponents/textInfo/TextInfo';
import ManageCard from '../../adminGlobalComponents/manageCard/ManageCard';
import ManageButton from '../../adminGlobalComponents/manageButton/ManageButton';
import InfoList from '../../adminGlobalComponents/manageCard/infoList/InfoList';
import ManageButtonContainer from '../../adminGlobalComponents/manageButton/manageButtonContainer/ManageButtonContainer';
import ManageCardHeader from '../../adminGlobalComponents/manageCard/cardHeader/ManageCardHeader';
import urlApi from '../../../api/api';
import './AnnouncementCard.css';

function AnnouncementCard({ lastname, firstname, id , phone, startingPoint, endingPoint, arrival_date, price, deliveryMan }) {

	const [showMoreInfo, setShowMoreInfo] = useState(false);

	const deleteAnnounce = async function deleteAnAnnounce () {
		console.log('id: ', id)
		const response = await fetch(`${urlApi}/api/admin/announces/${id}`, {
			method: 'DELETE'
		})
		// Récupération du message d'état (supprimé ou erreur)
		const { message } = await response.json();
	}

	return (
		<ManageCard>
			<ManageCardHeader 
				dropDownState={showMoreInfo} 
				title={`N° ${id}`}
				sticky
			>
				<ManageButtonContainer>
					<ManageButton icon={faTrash} className="delete-btn" onClick={deleteAnnounce} />
					<ManageButton icon={showMoreInfo ? faCaretUp : faCaretDown} onClick={() => setShowMoreInfo(!showMoreInfo)} />
				</ManageButtonContainer>
			</ManageCardHeader>
			<InfoList moreInfo={showMoreInfo ? 'more-info' : ''}>
				<TextInfo title="Départ : " text={startingPoint} />
				<TextInfo title="Arrivée : " text={endingPoint} />
				<TextInfo title={<FontAwesomeIcon icon={faMoneyBillWaveAlt} />} text={`${price} €`} />
				<TextInfo title="Date limite : " text={arrival_date} />
				<TextInfo title={<FontAwesomeIcon icon={faUserTie} />} text={`${lastname} ${firstname}`} />
				<TextInfo title="N°" text={id} />
				<TextInfo title={<FontAwesomeIcon icon={faPhone} />} text={phone} />
			</InfoList>
		</ManageCard>
	)
}

export default AnnouncementCard;
