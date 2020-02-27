import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faTruckLoading,
  faAddressCard,
  faFileAlt,
  faTimesCircle,
  faBars,
  faMapMarkedAlt,
  faBullhorn
} from '@fortawesome/free-solid-svg-icons';
import './NavBarDashboard.css';
import { NavLink } from 'react-router-dom';
import './NavBarDashboardMobile.css';

const NavBarDashboardMobile = ({ toggleNavbar, setToggleNavbar }) => {
  if (toggleNavbar) {
    return (
      <div
        className={
          toggleNavbar
            ? 'navBarMobileContainer showedNav'
            : 'navBarMobileContainer'
        }
      >
        <div className="navBarListContainer">
          <h1 className="titleDashboardNavBar">Mon espace livreur</h1>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="fa-2x crossIconNavBarDashboard"
            onClick={() => setToggleNavbar(false)}
          />

          {/*     Dashboard pro     */}

          <NavLink
            className="navLinkDashboard"
            activeClassName="itemListNavBarDashboard"
            to="/dashboard-pro"
          >
            <div className="containerItemNavBarDashboard">
              <div className="logoContainerDashboardNavBar">
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  className="fas fa-2x fa-tachometer-alt"
                />
              </div>
              <p className="itemDashboardNavBar">Tableau de bord</p>
            </div>
          </NavLink>

          {/*      Orders map      */}

          <NavLink
            className="navLinkDashboard"
            activeClassName="itemListNavBarDashboard"
            to="/map-deliver"
          >
            <div className="containerItemNavBarDashboard">
              <div className="logoContainerDashboardNavBar">
                <FontAwesomeIcon
                  className="fas fa-2x iconNavBarDashboard"
                  icon={faMapMarkedAlt}
                />
              </div>
              <p className="itemDashboardNavBar">Carte des commandes</p>
            </div>
          </NavLink>

          {/*     Available orders      */}

          <NavLink
            className="navLinkDashboard"
            activeClassName="itemListNavBarDashboard"
            to="/annonces"
          >
            <div className="containerItemNavBarDashboard">
              <div className="logoContainerDashboardNavBar">
                <FontAwesomeIcon
                  className="fas fa-2x iconNavBarDashboard"
                  icon={faBullhorn}
                />
              </div>
              <p className="itemDashboardNavBar">Annonces disponibles</p>
            </div>
          </NavLink>

          {/*      My orders      */}

          <NavLink
            className="navLinkDashboard"
            activeClassName="itemListNavBarDashboard"
            to="/my-orders"
          >
            <div className="containerItemNavBarDashboard">
              <div className="logoContainerDashboardNavBar">
                <FontAwesomeIcon
                  icon={faTruckLoading}
                  className="fas fa-2x fa-truck-loading"
                />
              </div>
              <p className="itemDashboardNavBar">Commandes</p>
            </div>
          </NavLink>

          {/*     Old orders      */}

          <NavLink
            className="navLinkDashboard"
            activeClassName="itemListNavBarDashboard"
            to="/my-deliveries"
          >
            <div className="containerItemNavBarDashboard">
              <div className="logoContainerDashboardNavBar">
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="far fa-2x fa-file-alt"
                />
              </div>
              <p className="itemDashboardNavBar">Livraisons effectuées</p>
            </div>
          </NavLink>

          {/*       Infos     */}

          <NavLink
            className="navLinkDashboard"
            activeClassName="itemListNavBarDashboard"
            to="/my-infos"
          >
            <div className="containerItemNavBarDashboard">
              <div className="logoContainerDashboardNavBar">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className="far fa-2x fa-address-card"
                />
              </div>
              <p className="itemDashboardNavBar">Informations</p>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <FontAwesomeIcon
      icon={faBars}
      className="fa-2x burgerMenuIconDashboard"
      onClick={() => setToggleNavbar(true)}
    />
  );
};

export default NavBarDashboardMobile;
