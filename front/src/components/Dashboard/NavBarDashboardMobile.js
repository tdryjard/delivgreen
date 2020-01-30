import React from 'react';
import './NavBarDashboard.css';
import { NavLink } from 'react-router-dom';
import './NavBarDashboardMobile.css';

const NavBarDashboardMobile = ({ toggleNavbar }) => {
  if (toggleNavbar) {
    return (
      <div
        className={
          toggleNavbar ? 'mySpaceNavBarMobile' : 'mySpaceNavBarMobileOut'
        }
      >
        <div className="navBarListContainer">
          <h1 className="titleDashboardNavBar">Mon espace livreur</h1>
          <NavLink
            className="navLinkDashboard"
            activeClassName="itemListNavBarDashboard"
            to="dashboard-pro"
          >
            <div className="containerItemNavBarDashboard">
              <div className="logoContainerDashboardNavBar">
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
                <i className="fas fa-2x fa-truck-loading" />
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
                <i className="far fa-2x fa-file-alt" />
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
                <i className="far fa-2x fa-address-card" />
              </div>

              <p className="itemDashboardNavBar">Informations</p>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
  return null;
};

export default NavBarDashboardMobile;
