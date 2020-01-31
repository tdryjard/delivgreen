import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faTruckLoading,
  faAddressCard,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './NavBarDashboard.css';
import { NavLink } from 'react-router-dom';

const NavBarDashboard = () => {
  return (
    <div className="mySpaceNavBar">
      <div className="navBarListContainer">
        <h1 className="titleDashboardNavBar">Mon espace livreur</h1>
        <NavLink
          className="navLinkDashboard"
          activeClassName="itemListNavBarDashboard"
          to="dashboard-pro"
        >
          <div className="containerItemNavBarDashboard">
            <div className="logoContainerDashboardNavBar">
              <FontAwesomeIcon className="fas fa-2x" icon={faTachometerAlt} />
              <i className="fas fa-2x fa-tachometer-alt" />
            </div>
            <p className="itemDashboardNavBar">Tableau de bord</p>
          </div>
        </NavLink>
        <NavLink
          className="navLinkDashboard"
          activeClassName="itemListNavBarDashboard"
          to="my-orders"
        >
          <div className="containerItemNavBarDashboard">
            <div className="logoContainerDashboardNavBar">
              <FontAwesomeIcon className="fas fa-2x" icon={faTruckLoading} />
            </div>
            <p className="itemDashboardNavBar">Commandes</p>
          </div>
        </NavLink>
        <NavLink
          className="navLinkDashboard"
          activeClassName="itemListNavBarDashboard"
          to="my-deliveries"
        >
          <div className="containerItemNavBarDashboard">
            <div className="logoContainerDashboardNavBar">
              <FontAwesomeIcon className="far fa-2x" icon={faFileAlt} />
            </div>
            <p className="itemDashboardNavBar">Livraisons effectuées</p>
          </div>
        </NavLink>
        <NavLink
          className="navLinkDashboard"
          activeClassName="itemListNavBarDashboard"
          to="my-infos"
        >
          <div className="containerItemNavBarDashboard">
            <div className="logoContainerDashboardNavBar">
              <FontAwesomeIcon className="far fa-2x" icon={faAddressCard} />
            </div>
            <p className="itemDashboardNavBar">Informations</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBarDashboard;