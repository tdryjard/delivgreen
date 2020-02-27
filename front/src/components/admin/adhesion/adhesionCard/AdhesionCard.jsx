import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserTie } from "@fortawesome/free-solid-svg-icons";
import ManageButton from '../../adminGlobalComponents/manageButton/ManageButton';
import TextInfo from '../../adminGlobalComponents/textInfo/TextInfo';
import ManageCard from '../../adminGlobalComponents/manageCard/ManageCard';
import InfoList from '../../adminGlobalComponents/manageCard/infoList/InfoList';
import ManageButtonContainer from '../../adminGlobalComponents/manageButton/manageButtonContainer/ManageButtonContainer';
import ManageCardHeader from '../../adminGlobalComponents/manageCard/cardHeader/ManageCardHeader';
import './AdhesionCard.css';

function AdhesionCard({ type, civilState, lastname, firstname, email, telephone, rib, Kbis, tva, siret, isPro }) {

	const [showMoreInfo, setShowMoreInfo] = useState(false);

	return (
		<ManageCard>
			<ManageCardHeader 
				dropDownState={showMoreInfo} 
				title={`${lastname} ${firstname}`}
				sticky
			>
				<ManageButtonContainer more={{ setShowMoreInfo, showMoreInfo }}>
					<ManageButton icon={faTrash} className="delete-btn" />
				</ManageButtonContainer>
			</ManageCardHeader>
			<InfoList moreInfo={showMoreInfo ? 'more-info' : ''}>
				<TextInfo title="Statut : " text={type} />
				<TextInfo title="Etat civil : " text={civilState} />
				<TextInfo title={<FontAwesomeIcon icon={faUserTie} />} text={`${lastname} ${firstname}`} />
				<TextInfo title="Email : " text={email} />
				<TextInfo title="Télephone : " text={telephone} />
				<TextInfo title="RIB : " text={rib} />
				{ isPro && 
					<>
						<TextInfo title="Kbis : " text={Kbis} />
						<TextInfo title="Siret : " text={siret} />
						<TextInfo title="TVA : " text={tva} />
					</>	
				}
			</InfoList>
		</ManageCard>
	)
}

export default AdhesionCard;
