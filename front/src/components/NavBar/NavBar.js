import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import useGlobalState from '../../hooks/useGlobalState';

const NavBar = () => {
  const { user } = useGlobalState();
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
            src={require('./images/logoDeliv.png')}
            alt="logo"
          />
          <h1 className="titleNavBarDelivgreen">DELIV'GREEN</h1>
        </Link>

        {/*       Display sign in and login if not connected      */}

        {user ? (
          <p className="userWelcomeMessage">Bonjour {user.firstname}</p>
        ) : (
          <div className="containerSignupSignin">
            <Link to="/signup" className="submitAndSignIn connectButton">
              <h3>Connexion</h3>
            </Link>
            <Link to="/signin" className="submitAndSignIn">
              <h3>Inscription</h3>
            </Link>
          </div>
        )}

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
                  Accueil
                </h3>
              </NavLink>
              <hr className="separatorNavBar separator1" />
              {user && user.role !== 'part' ? (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  activeStyle={{ fontWeight: 'bold', color: 'indianred' }}
                  to="/dashboard-pro"
                >
                  <h3 className="itemListNavBar" onClick={closeMenu}>
                    Mon espace livreur
                  </h3>
                </NavLink>
              ) : null}
              {user ? (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  activeStyle={{ fontWeight: 'bold', color: 'indianred' }}
                  to="/dashboard-client"
                >
                  <h3 className="itemListNavBar" onClick={closeMenu}>
                    Mon espace client
                  </h3>
                </NavLink>
              ) : null}
              {user ? <hr className="separatorNavBar" /> : null}
              {user ? (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  activeStyle={{ fontWeight: 'bold', color: 'indianred' }}
                  to="/demande-livraison"
                >
                  <h3 className="itemListNavBar" onClick={closeMenu}>
                    Proposer une course
                  </h3>
                </NavLink>
              ) : (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  activeStyle={{ fontWeight: 'bold', color: 'indianred' }}
                  to="/signup"
                >
                  <h3 className="itemListNavBar" onClick={closeMenu}>
                    Proposer une course
                  </h3>
                </NavLink>
              )}
              <hr className="separatorNavBar" />
              <NavLink
                style={{ textDecoration: 'none' }}
                activeStyle={{ fontWeight: 'bold', color: 'indianred' }}
                to="/partner"
              >
                <h3 className="itemListNavBar" onClick={closeMenu}>
                  Devenir partenaire
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
