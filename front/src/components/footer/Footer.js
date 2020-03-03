import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import useGlobalState from '../../hooks/useGlobalState';

const Footer = () => {
  const { user } = useGlobalState();

  return (
    <div className="footerContainer">
      <footer className="footerAccueil">
        <div className="column1Footer">
          <h1 style={{ color: '#17B994' }}>Deliv'Green</h1>
          {user ? (
            <Link to="/demande-livraison" className="urlFooter">
              Proposer une course
            </Link>
          ) : (
            <Link to="/signup" className="urlFooter">
              Proposer une course
            </Link>
          )}
          <Link to="/signin" className="urlFooter">
            Inscription
          </Link>
          <Link to="/signup" className="urlFooter">
            Connexion
          </Link>
          <Link to="/partner" className="urlFooter">
            Devenez partenaire
          </Link>
        </div>
        <div className="column2Footer">
          <h1 style={{ color: '#17B994' }}>A propos</h1>
          <Link to="/" className="urlFooter">
            Politique de confidentialité
          </Link>
          <Link to="/contact" className="urlFooter">
            Nous contacter
          </Link>
          <Link to="/" className="urlFooter">
            Mentions légales
          </Link>
        </div>
        <div className="column3Footer">
          <img
            src={require('../LandingPage/images/LOGO-DELIVGREEN.png')}
            alt="logo"
            className="logoFooter"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
