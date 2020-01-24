import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footerAccueil">
      <div className="containerUrlFooter">
        <a href="/" className="urlFooter">
          connexion
        </a>
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
