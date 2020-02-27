import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import './adhesion.css';

const Adhesion = () => {
  const [pro] = useState(true);

  return (
    <div className="contentAdhesion">
      <NavBar />
      <div className="adhesion_logo">
        <img src={require('../adhesion/images/form.svg')} alt="contact logo" />
        <h1 className="titleAdhesion">Demande d'adhesion</h1>
      </div>

      <form className="sign-form" action="">
        <div className="content-form">
          <div className="locationAdd">
            <label>
              Nom:
              <input type="text" name="lastname" />
            </label>

            <label>
              Prénom:
              <input type="text" name="firstname" />
            </label>

            <label>
              Email:
              <input type="email" name="email" />
            </label>

            <label>
              Téléphone:
              <input type="tel" name="Télephone" />
            </label>

            <label>
              Ville:
              <input className="longInput" type="text" name="ville" />
            </label>

            <label>
              RIB:
              <input className="longInput" type="text" name="RIB" />
            </label>
          </div>

          <div className="parcel-information">
            <label>
              Périmetre:
              <input className="locationInput" type="text" name="perimeter" />
            </label>

            {pro ? (
              <div className="containerPro">
                <label>
                  N° Siret:
                  <input
                    className="contentFileInput"
                    type="text"
                    name="SIRET"
                  />
                </label>

                <label>
                  TVA :
                  <input className="contentFileInput" type="text" name="TVA" />
                </label>

                  <label>
                    Kbis de moins de 3 mois:
                    <input
                      className="contentFileInput"
                      type="text"
                      name="CarteIdd"
                    />
                  </label>
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
