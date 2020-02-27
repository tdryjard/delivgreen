import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faMoneyCheckAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import TextInfo from '../../adminGlobalComponents/textInfo/TextInfo';
import ManageCard from '../../adminGlobalComponents/manageCard/ManageCard';
import InfoList from '../../adminGlobalComponents/manageCard/infoList/InfoList';
import ManageButtonContainer from '../../adminGlobalComponents/manageButton/manageButtonContainer/ManageButtonContainer';
import ManageCardHeader from '../../adminGlobalComponents/manageCard/cardHeader/ManageCardHeader';

function DeliveryManListCard({ id, type, lastname, firstname, email, rib, siret, tva, kbis, isPro }) {

    const [showMoreInfo, setShowMoreInfo] = useState(false);

    return (
        <ManageCard>
			<ManageCardHeader 
				dropDownState={showMoreInfo} 
				title={`${lastname} ${firstname}`}
				sticky
			>
				<ManageButtonContainer erase more={{ setShowMoreInfo, showMoreInfo }} />
			</ManageCardHeader>
			<InfoList moreInfo={showMoreInfo ? 'more-info' : ''}>
                <TextInfo 
                    title="N°" text={id} 
                />
                <TextInfo 
                    title="Statut : " text={type} 
                />
                <TextInfo 
                    title={<FontAwesomeIcon icon={faUserTie} />} text={`${lastname} ${firstname}`}
                />
				<TextInfo 
                    title={<FontAwesomeIcon icon={faMoneyCheckAlt} />} text={rib}
                />
				<TextInfo
					title={<FontAwesomeIcon icon={faPaperPlane} />} text={email}
				/>
                { isPro && 
					<>
						<TextInfo title="Kbis : " text={kbis} />
						<TextInfo title="Siret : " text={siret} />
						<TextInfo title="TVA : " text={tva} />
					</>	
				}
			</InfoList>
		</ManageCard>
    )
}

export default DeliveryManListCard;
