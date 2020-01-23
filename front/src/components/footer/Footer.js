import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footerAccueil">
      <div className="containerUrlFooter">
        <a href="/" className="urlFooter">
          connexion
        </a>
        <a href="/" className="urlFooter">
          inscription
        </a>
        <a href="/" className="urlFooter">
          Blog
        </a>
        <a href="/" className="urlFooter">
          contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
