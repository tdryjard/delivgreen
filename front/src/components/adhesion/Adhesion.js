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
        <div className="content-form">
          <div className="locationAdd">
            <input type="text" name="lastname" placeholder="Nom" />
            <input type="text" name="firstname" placeholder="Prénom" />
            <input type="email" name="email" placeholder="Email" />
            <input type="tel" placeholder="Téléphone" />
            <input
              className="longInput"
              type="text"
              name="ville"
              placeholder="Ville"
            />
            <input
              className="longInput"
              type="text"
              name="RIB"
              placeholder="RIB"
            />
          </div>

          <div className="parcel-information">
            <input
              className="locationInput"
              type="text"
              name="perimeter"
              placeholder="Périmètre"
            />
            {pro ? (
              <div className="containerPro">
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
              </div>
            ) : null}
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
            <button type="submit" className="btn-send-adhesion">
              Envoyer
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Adhesion;
