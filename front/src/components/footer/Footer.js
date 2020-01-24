import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footerAccueil">
      <div className="containerUrlFooter">
        <Link to="signup" className="urlFooter">
          connexion
        </Link>
        <Link to="/signin" className="urlFooter">
          inscription
        </Link>
        <a href="/" className="urlFooter">
          Blog
        </a>
        <Link to="/signin" className="urlFooter">
          contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
