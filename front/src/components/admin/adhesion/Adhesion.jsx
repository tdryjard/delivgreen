import React, { useState, useEffect } from 'react';
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import AdminHeader from '../adminHeader/AdminHeader';
import AdhesionCard from './adhesionCard/AdhesionCard';
import apiUrl from '../../api/api';
import './Adhesion.css';

function Adhesion() {

	const [adhesions, setAdhesions] = useState([]);
	const [noAdhesionError, setNoAdhesionError] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${apiUrl}/api/admin/adhesions`);
			const { data, message } = await response.json();
			
			if (data) {
				console.log(data);
				setAdhesions(data);
				return;
			}
			setNoAdhesionError(message);
		})();	
	}, [])

	return (
		<div className="adhesion-ctn">
			<AdminHeader icon={faIdCard} title="Demandes d'adhésion" />
			<div className="adhesion-card-ctn">
				{ adhesions.length ?
                    adhesions.map((adhesion, i) => <AdhesionCard 
                                                        key={i} 
                                                        {...adhesion}
					/>) 
					: 
                    <div className="admin-no-content-message">{noAdhesionError}</div>
				}
			</div>
		</div>
	)
}

export default Adhesion;
