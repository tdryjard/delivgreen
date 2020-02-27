import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Adhesion from './adhesion/Adhesion';
import Announcement from './announcement/Announcement';
import DeliveryManList from './deliveryManList/DeliveryManList';
import setFullMobileHeight from '../../utils/setFullMobileHeightProperty';
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
				<div className="admin-element-ctn">
					<Route path="/admin/adhesion" component={Adhesion}/>
					<Route path="/admin/annonces" component={Announcement} />
					<Route path="/admin/liste-livreurs" component={DeliveryManList} />
				</div>
		</div>
	)
}

export default Admin;
