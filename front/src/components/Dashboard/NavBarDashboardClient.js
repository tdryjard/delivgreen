import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faTachometerAlt,
  faTruckLoading
} from '@fortawesome/free-solid-svg-icons';

const NavBarDashboardClient = () => {
  return (
    <div className="mySpaceNavBar">
      <div className="navBarListContainer">
        <h1 className="titleDashboardNavBar">Mon espace perso</h1>
        <NavLink
          className="navLinkDashboard"
          activeClassName="itemListNavBarDashboard"
          to="/dashboard-client"
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
          to="/mes-commandes-client"
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
          to="/mes-infos"
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

export default NavBarDashboardClient;
