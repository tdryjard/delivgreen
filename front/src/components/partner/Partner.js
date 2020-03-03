import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../NavBar/NavBar';
import useGlobalState from '../../hooks/useGlobalState';
import './Partner.css';

const Partner = () => {
  const { user } = useGlobalState();

  return (
    <div className="partnerContainer">
      <NavBar />

      <div className="titlePartner">
        <h1 className="threeStepsTitle">
          Devenir partenaire chez Deliv'green en choisissant votre catégorie !
        </h1>
      </div>

      <div className="threeCards2">
        <div className="stepsContainer2">
          {user ? (
            <Link to={{ pathname: '/adhesion', professionnal: false }}>
              <div className="titleStepsContainer2">Devenir particulier</div>
            </Link>
          ) : (
            <Link to={{ pathname: '/signup' }}>
              <div className="titleStepsContainer2">Devenir particulier</div>
            </Link>
          )}

          {user ? (
            <Link
              to={{ pathname: '/adhesion', professionnal: false }}
              className="particularImg"
            />
          ) : (
            <Link to={{ pathname: '/signup' }} className="particularImg" />
          )}

          {user ? (
            <Link to={{ pathname: '/adhesion', professionnal: false }}>
              <h3 className="subtitleThreeSteps2">
                Je renseigne mes informations
                <br />
                (nom, prénom, email, téléphone et RIB)
              </h3>
            </Link>
          ) : (
            <Link to={{ pathname: '/signup' }}>
              <h3 className="subtitleThreeSteps2">
                Je renseigne mes informations
                <br />
                (nom, prénom, email, téléphone et RIB)
              </h3>
            </Link>
          )}
        </div>

        <div className="stepsContainer2">
          {user ? (
            <Link to={{ pathname: '/adhesion', professionnal: false }}>
              <div className="titleStepsContainer2">Devenir coursier</div>
            </Link>
          ) : (
            <Link to={{ pathname: '/signup' }}>
              <div className="titleStepsContainer2">Devenir coursier</div>
            </Link>
          )}

          {user ? (
            <Link
              to={{ pathname: '/adhesion', professionnal: false }}
              className="steedImg"
            />
          ) : (
            <Link to={{ pathname: '/signup' }} className="steedImg" />
          )}

          {user ? (
            <Link to={{ pathname: '/adhesion', professionnal: false }}>
              <h3 className="subtitleThreeSteps2">
                Selon mon trajet et mes possibilités de déplacement
              </h3>
            </Link>
          ) : (
            <Link to={{ pathname: '/signup' }}>
              <h3 className="subtitleThreeSteps2">
                Selon mon trajet et mes possibilités de déplacement
              </h3>
            </Link>
          )}
        </div>

        <div className="stepsContainer2">
          {user ? (
            <Link to={{ pathname: '/adhesion', professionnal: true }}>
              <div className="titleStepsContainer2">
                Devenir transporteur professionnel
              </div>
            </Link>
          ) : (
            <Link to={{ pathname: '/signup' }}>
              <div className="titleStepsContainer2">
                Devenir transporteur professionnel
              </div>
            </Link>
          )}

          {user ? (
            <Link
              to={{ pathname: '/adhesion', professionnal: true }}
              className="carrierImg"
            />
          ) : (
            <Link to={{ pathname: '/signup' }} className="carrierImg" />
          )}

          {user ? (
            <Link to={{ pathname: '/adhesion', professionnal: true }}>
              <h3 className="subtitleThreeSteps2">
                Livrez de manière sécurisée avec signature après réception du
                colis
              </h3>
            </Link>
          ) : (
            <Link to={{ pathname: '/signup' }}>
              <h3 className="subtitleThreeSteps2">
                Livrez de manière sécurisée avec signature après réception du
                colis
              </h3>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partner;
