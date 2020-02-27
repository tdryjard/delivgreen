import React from 'react';
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import AdminHeader from '../adminHeader/AdminHeader';
import AdhesionCard from './adhesionCard/AdhesionCard';
import './Adhesion.css';

function Adhesion() {

	return (
		<div className="adhesion-ctn">
			<AdminHeader icon={faIdCard} title="Demandes d'adhésion" />
			<div className="adhesion-card-ctn">
			</div>
		</div>
	)
}

export default Adhesion;
