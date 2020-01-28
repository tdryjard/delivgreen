import React from 'react';
import Sidebar from './sidebar/Sidebar';
import { setFullMobileHeight } from '../../utils/setFullMobileHeightProperty';
import './Admin.css';

function Admin() {

	/*
	* Fonction créeant une propriété CSS (--vh)
	* ayant 1% de la hauteur exacte de la fenêtre
	*/
	setFullMobileHeight();

	return (
		<div className="admin-ctn">
				<Sidebar />
				<div className="haribo">azeaeazeazeazeazeaezaeaz</div>
		</div>
	)
}

export default Admin;
