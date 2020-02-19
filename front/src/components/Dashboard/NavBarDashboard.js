import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faTruckLoading,
  faAddressCard,
  faFileAlt,
  faBullhorn
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
              <FontAwesomeIcon
                className="fas fa-2x iconNavBarDashboard"
                icon={faTachometerAlt}
              />
            </div>
            <p className="itemDashboardNavBar">Tableau de bord</p>
          </div>
        </NavLink>
        <NavLink
          className="navLinkDashboard"
          activeClassName="itemListNavBarDashboard"
          to="/annonces"
        >
          <div className="containerItemNavBarDashboard">
            <div className="logoContainerDashboardNavBar">
              <FontAwesomeIcon
                className="fas fa-2x fa-bullhorn iconNavBarDashboard"
                icon={faBullhorn}
              />
            </div>
            <p className="itemDashboardNavBar">Annonces disponibles</p>
          </div>
        </NavLink>
        <NavLink
          className="navLinkDashboard"
          activeClassName="itemListNavBarDashboard"
          to="my-orders"
        >
          <div className="containerItemNavBarDashboard">
            <div className="logoContainerDashboardNavBar">
              <FontAwesomeIcon
                className="fas fa-2x iconNavBarDashboard"
                icon={faTruckLoading}
              />
            </div>
            <p className="itemDashboardNavBar">Commandes en cours</p>
          </div>
        </NavLink>
        <NavLink
          className="navLinkDashboard"
          activeClassName="itemListNavBarDashboard"
          to="/livraisons-effectuees"
        >
          <div className="containerItemNavBarDashboard">
            <div className="logoContainerDashboardNavBar">
              <FontAwesomeIcon
                className="far fa-2x iconNavBarDashboard"
                icon={faFileAlt}
              />
            </div>
            <p className="itemDashboardNavBar">Livraisons effectuées</p>
          </div>
        </NavLink>
        <NavLink
          className="navLinkDashboard"
          activeClassName="itemListNavBarDashboard"
          to="/informations-pro"
        >
          <div className="containerItemNavBarDashboard">
            <div className="logoContainerDashboardNavBar">
              <FontAwesomeIcon
                className="far fa-2x iconNavBarDashboard"
                icon={faAddressCard}
              />
            </div>
            <p className="itemDashboardNavBar">Informations</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBarDashboard;
