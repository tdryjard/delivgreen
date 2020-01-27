import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import './adhesion.css';

const Adhesion = () => {
  const [pro] = useState(true);

  return (
    <div className="contentAdhesion">
      <NavBar />
      <h1 className="titleAdhesion">Demande d'adhesion</h1>
      <form className="sign-form" action="">
        <input type="text" name="lastname" placeholder="Nom" />
        <input type="text" name="firstname" placeholder="Prénom" />
        <input type="email" name="email" placeholder="Email" />
        <input type="tel" placeholder="Téléphone" />
        <div className="locationAdd">
          <input
            className="locationInput"
            type="text"
            name="ville"
            placeholder="Ville"
          />
          <input
            className="locationInput"
            type="text"
            name="perimeter"
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
        {pro ? (
          <div className="containerPro">
            <div className="contentFileInput">
              <label htmlFor="carteIdd" className="label-file">
                Insérer Kbis de moins de 3 mois
                <input
                  className="fileInput"
                  type="file"
                  id="carteIdd"
                  name="CarteIdd"
                  accept="image/png, image/jpeg"
                />
              </label>
            </div>
            <input
              className="contentFileInput"
              type="text"
              name="SIRET"
              placeholder="n° de SIRET"
            />
            <input
              className="contentFileInput"
              type="text"
              name="TVA"
              placeholder="n° de TVA"
            />
          </div>
        ) : null}

        <button type="submit" className="btn">
          Envoyer
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Adhesion;
