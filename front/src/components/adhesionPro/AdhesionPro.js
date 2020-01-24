import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import './adhesionPro.css';

const AdhesionPro = () => {
  return (
    <div className="contentAdhesion">
      <NavBar />
      <h1 className="titleAdhesion">Demande d'adhesion Pro</h1>
      <form className="sign-form" action="">
        <input type="text" name="lastname" placeholder="Nom" />
        <input type="text" name="firstname" placeholder="Prénom" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="tel" placeholder="Téléphone" />
        <input type="text" name="RIB" placeholder="RIB" />
        <input type="text" name="ville" placeholder="Ville" />
        <input type="text" name="périmètre" placeholder="Périmètre" />
        <input type="text" name="TVA" placeholder="n° de TVA" />
        <input type="text" name="SIRET" placeholder="n° de SIRET" />
        <input type="text" name="Kbis" placeholder="Kibs de moins de 3 mois" />
        <button type="submit" className="btn">
          Envoyer
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default AdhesionPro;
