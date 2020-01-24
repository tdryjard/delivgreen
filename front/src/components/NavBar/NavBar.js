import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div>
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
            <h1 className="itemListNavBar">Shop</h1>
            <h1 className="itemListNavBar">About</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
