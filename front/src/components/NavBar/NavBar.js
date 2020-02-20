import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div className="navBarMainContainer">
      <div className="navigationBar">
        <Link to="/" className="logoAndTitleNavBar">
          <img
            className="logoNavBar"
            src={require('../LandingPage/images/logo-delivgreen-notext.png')}
            alt="logo"
          />
          <h1 className="titleNavBarDelivgreen">DELIV'GREEN</h1>
        </Link>
        <h3 className="submitAndSignIn connectButton">
          <Link to="/signup">Connexion</Link>
        </h3>
        <h3 className="submitAndSignIn">
          <Link to="/signin">Inscription</Link>
        </h3>
        <div className={`${toggle ? 'listNavBar' : 'closedMenuBurger'}`}>
          <div className="burgerMenuContainer">
            <div
              onClick={() => setToggle(!toggle)}
              className={`burgerMenu ${toggle ? 'change' : null}`}
            >
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
          </div>
          {toggle ? (
            <div className="itemListContainer">
              <NavLink
                style={{ textDecoration: 'none' }}
                activeStyle={{ fontWeight: 'bold', color: 'indianred' }}
                to="/"
              >
                <h3 className="itemListNavBar" onClick={closeMenu}>
                  <Link to="/">Accueil</Link>
                </h3>
              </NavLink>
              <hr className="separatorNavBar separator1" />
              <NavLink
                style={{ textDecoration: 'none' }}
                activeStyle={{ fontWeight: 'bold', color: 'indianred' }}
                to="/dashboard-pro"
              >
                <h3 className="itemListNavBar" onClick={closeMenu}>
                  <Link to="/dashboard-pro">Mon espace (livreur)</Link>
                </h3>
              </NavLink>
              <hr className="separatorNavBar" />
              <NavLink
                style={{ textDecoration: 'none' }}
                activeStyle={{ fontWeight: 'bold', color: 'indianred' }}
                to="/dashboard-pro"
              >
                <h3 className="itemListNavBar" onClick={closeMenu}>
                  <Link to="/dashboard-client">Mon espace (client)</Link>
                </h3>
              </NavLink>
              <hr className="separatorNavBar" />
              <NavLink
                style={{ textDecoration: 'none' }}
                activeStyle={{ fontWeight: 'bold', color: 'indianred' }}
                to="/dashboard-pro"
              >
                <h3 className="itemListNavBar" onClick={closeMenu}>
                  <Link to="/demande-livraison">Proposer une course</Link>
                </h3>
              </NavLink>
              <hr className="separatorNavBar" />
              <NavLink
                style={{ textDecoration: 'none' }}
                activeStyle={{ fontWeight: 'bold', color: 'indianred' }}
                to="/"
              >
                <h3 className="itemListNavBar" onClick={closeMenu}>
                  <Link to="/adhesion">Devenir partenaire</Link>
                </h3>
              </NavLink>
              <hr className="separatorNavBar" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
