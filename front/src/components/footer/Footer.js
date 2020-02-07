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
        <Link to="/" className="urlFooter">
          contact
        </Link>
        <Link to="/adhesion" className="urlFooter">
          adhésion
        </Link>
        <Link to="/facture" className="urlFooter">
          facture
        </Link>
        <Link to="/facture-download" className="urlFooter">
          facture-download
        </Link>
        <Link to="/historical" className="urlFooter">
          historique
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
