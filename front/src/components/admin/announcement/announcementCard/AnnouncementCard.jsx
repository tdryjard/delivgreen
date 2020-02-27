import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCaretDown, faCaretUp, faPhone, faUserTie, faMoneyBillWaveAlt } from "@fortawesome/free-solid-svg-icons";
import TextInfo from '../../adminGlobalComponents/textInfo/TextInfo';
import ManageCard from '../../adminGlobalComponents/manageCard/ManageCard';
import ManageButton from '../../adminGlobalComponents/manageButton/ManageButton';
import InfoList from '../../adminGlobalComponents/manageCard/infoList/InfoList';
import ManageButtonContainer from '../../adminGlobalComponents/manageButton/manageButtonContainer/ManageButtonContainer';
import ManageCardHeader from '../../adminGlobalComponents/manageCard/cardHeader/ManageCardHeader';
import './AnnouncementCard.css';

function AnnouncementCard({ lastname, firstname, deliveryID , telephone, startingPoint, endingPoint, limitDate, price, deliveryMan }) {

	const [showMoreInfo, setShowMoreInfo] = useState(false);

	return (
		<ManageCard>
			<ManageCardHeader 
				dropDownState={showMoreInfo} 
				title={`N° ${deliveryID}`}
				sticky
			>
				<ManageButtonContainer>
					<ManageButton icon={faTrash} className="delete-btn" />
					<ManageButton icon={showMoreInfo ? faCaretUp : faCaretDown} onClick={() => setShowMoreInfo(!showMoreInfo)} />
				</ManageButtonContainer>
			</ManageCardHeader>
			<InfoList moreInfo={showMoreInfo ? 'more-info' : ''}>
				<TextInfo title="Départ : " text={startingPoint} />
				<TextInfo title="Arrivée : " text={endingPoint} />
				<TextInfo title={<FontAwesomeIcon icon={faMoneyBillWaveAlt} />} text={`${price} €`} />
				<TextInfo title="Date limite : " text={limitDate} />
				<TextInfo title={<FontAwesomeIcon icon={faUserTie} />} text={`${lastname} ${firstname}`} />
				<TextInfo title="N°" text={deliveryID} />
				<TextInfo title={<FontAwesomeIcon icon={faPhone} />} text={telephone} />
			</InfoList>
		</ManageCard>
	)
}

export default AnnouncementCard;
