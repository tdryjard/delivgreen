import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div className="navBarMainContainer">
      <div className="navigationBar">
        <img
          className="logoNavBar"
          src={require('./images/delivgreen.png')}
          alt="logo"
        />
        <h3 className="submitAndSignIn">Inscription</h3>
        <h3 className="submitAndSignIn">Connexion</h3>
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
                  Home
                </h3>
              </NavLink>
              <h1 className="itemListNavBar" onClick={closeMenu}>
                Accueil
              </h1>
              <h1 className="itemListNavBar" onClick={closeMenu}>
                Blog
              </h1>
              <h1 className="itemListNavBar" onClick={closeMenu}>
                Proposer une course
              </h1>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
