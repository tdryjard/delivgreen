import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Partner.css';

const Partner = () => {
  return (
    <div className="partner-container">
      <NavBar />
      <div className="threeStepsMainContainer">
        <h1 className="threeStepsTitle">
          Devenir partenaire chez Deliv'green en 3 étapes
        </h1>
        <h3>Devenir partenaire chez Deliv'green n'a jamais été aussi simple</h3>
        <div className="threecards">
          <div className="stepsContainer">
            <div className="img1" />
            <div className="textTitle">
              <h1 className="textContextOfTiltle">Demande d'adhésion</h1>
              <h3 className="subtitleThreeSteps">
                Je renseigne mes informations (nom, prénom, email, kbis de moins
                de 3ans...)
              </h3>
            </div>
          </div>
          <div className="stepsContainer">
            <div className="img2" />
            <div className="textTitle">
              <h1 className="textContextOfTiltle">
                Je choisis les courses qui me conviennent
              </h1>
              <h3 className="subtitleThreeSteps">
                Selon mon trajet et mes possibilités de déplacement
              </h3>
            </div>
          </div>
          <div className="stepsContainer">
            <div className="img3" />
            <div className="textTitle">
              <h1 className="textContextOfTiltle">
                Je livre la commande et je reçois mon argent
              </h1>
              <h3 className="subtitleThreeSteps">
                Livrez de manière sécuriser avec signature apres reception du
                colis
              </h3>
            </div>
          </div>
        </div>
        <Link to="/adhesion" type="button" className="buttonPartner">
          Devenir partenaire
        </Link>
      </div>

      <div className="threecards2">
        <div className="stepsContainer2">
          <Link to="/adhesion" className="particularimg">
            Particular
          </Link>
          <h3 className="subtitleThreeSteps2">
            Je renseigne mes informations (nom, prénom, email, kbis de moins de
            3ans...)
          </h3>
        </div>

        <div className="stepsContainer2">
          <Link to="/adhesion" className="steedimg">
            Steed
          </Link>
          <h3 className="subtitleThreeSteps2">
            Selon mon trajet et mes possibilités de déplacement
          </h3>
        </div>

        <div className="stepsContainer2">
          <Link to="/adhesion" className="carrierimg">
            Carrier
          </Link>

          <h3 className="subtitleThreeSteps2">
            Livrez de manière sécuriser avec signature apres reception du colis
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partner;
