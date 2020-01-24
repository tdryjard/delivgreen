import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import './adhesion.css';

const Adhesion = () => {
  return (
    <div className="contentAdhesion">
      <NavBar />
      <h1 className="titleAdhesion">Demande d'adhesion</h1>
      <form className="sign-form" action="">
        <input type="text" name="lastname" placeholder="Nom" />
        <input type="text" name="firstname" placeholder="Prénom" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" placeholder="Téléphone" />
        <div className="localisationAdd">
          <input
            className="localisationInput"
            type="text"
            name="ville"
            placeholder="Ville"
          />
          <input
            className="localisationInput"
            type="text"
            name="périmètre"
            placeholder="Périmètre"
          />
          <p className="km">km</p>
        </div>
        <input className="longInput" type="text" name="RIB" placeholder="RIB" />
        <div className="contentFileInput">
          <label htmlFor="carteIdd" className="label-file">
            Insérer pièce d'identité
            <input
              className="fileInput"
              type="file"
              id="carteIdd"
              name="CarteIdd"
              accept="image/png, image/jpeg"
            />
          </label>
        </div>
        <button type="submit" className="btn">
          Envoyer
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Adhesion;
