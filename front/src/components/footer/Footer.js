import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="footerAccueil">
        <div className="column1Footer">
          <h1>Deliv'Green</h1>
          <Link to="/" className="urlFooter">
            Proposer une course
          </Link>
          <Link to="/signin" className="urlFooter">
            Inscription
          </Link>
          <Link to="/signup" className="urlFooter">
            Connexion
          </Link>
          <Link to="/" className="urlFooter">
            Devenez partenaire
          </Link>
        </div>
        <div className="column2Footer">
          <h1>A propos</h1>
          <Link to="/" className="urlFooter">
            Politique de confidentialité
          </Link>
          <Link to="/" className="urlFooter">
            Nous contacter
          </Link>
          <Link to="/" className="urlFooter">
            Mentions légales
          </Link>
        </div>
        <div className="column3Footer">
          <img
            src={require('./images/logo-transparent-blanc.png')}
            alt="logo"
            className="logoFooter"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
