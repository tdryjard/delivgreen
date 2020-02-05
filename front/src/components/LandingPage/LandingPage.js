import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCheckCircle,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';
import Footer from '../footer/Footer';
import NavBar from '../NavBar/NavBar';

const LandingPage = () => {
  const [co2Counter, setCo2Counter] = useState(0);

  useEffect(() => {
    let counterAdd = 0;
    const counter = setInterval(() => {
      counterAdd += co2Counter + 50;
      setCo2Counter(counterAdd);
      if (counterAdd > 4506) {
        clearInterval(counter);
      }
    }, 20);
  }, []);

  return (
    <div className="landingPageMainContainer">
      <NavBar />

      {/*     Slider      */}

      <div>
        <div className="titleContainerLandingPage">
          <div>
            <h1 className="titleLandingPage">La livraison de colis</h1>
            <h1 className="titleLandingPage">éco-responsable</h1>
          </div>
          <button type="button" className="buttonHeaderHomePage">
            Proposer une course
          </button>
        </div>
        <img
          className="headerImageLandingPage"
          src="https://zupimages.net/up/20/06/5v8z.jpg"
          // src="https://zupimages.net/up/20/06/5z44.jpg"
          alt="header"
        />
      </div>

      {/*     Stats     */}

      <div className="numberCo2Content">
        <div className="contentNumberType">
          <div className="contentNumberCo2">
            <p className="numberCo2">{co2Counter}</p>
            <div>
              <img
                className="ecoLogo"
                src={require('./images/ecoLogo.png')}
                alt="ecologie logo"
              />
            </div>
          </div>
          <p className="typeCo2">Kg de Co2</p>
        </div>
        <p className="describeCo2">économisés avec Deliv'green</p>
      </div>

      {/*     3 steps     */}
      <div className="threeStepsContainerLandingPage">
        <h1>3 étapes pour faire livrer votre colis</h1>
        <div className="tripleStepsContainer">
          <div className="iconAndTextThreeSteps">
            <h1 style={{ color: '#17B994', fontSize: '64px' }}>1</h1>
            <h3>Je renseigne mon colis</h3>
          </div>
          <div className="iconAndTextThreeSteps">
            <h1 style={{ color: '#17B994', fontSize: '64px' }}>2</h1>
            <h3>Je choisis un point de départ et d'arrivée</h3>
          </div>
          <div className="iconAndTextThreeSteps">
            <h1 style={{ color: '#17B994', fontSize: '64px' }}>3</h1>
            <h3>Mon colis est pris en charge</h3>
          </div>
        </div>
      </div>

      {/*     Customer service     */}

      <div className="customerServiceContainer">
        <div className="cardCustomerServiceContainer">
          <h1 className="customerServicesTitle">Deliv'Green à votre écoute</h1>
          <div className="customerServicesContainer">
            <div className="itemCustomer">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="far fa-5x iconThreeSteps"
              />
              <p className="textCustomerLandingPage">Livraison satisfait</p>
              <p className="textCustomerLandingPage">ou remboursé</p>
            </div>
            <div className="itemCustomer">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="far fa-5x iconThreeSteps"
              />
              <p className="textCustomerLandingPage">Service client</p>
              <p className="textCustomerLandingPage">24/7</p>
            </div>
            <div className="itemCustomer">
              <FontAwesomeIcon
                icon={faClock}
                className="far fa-5x iconThreeSteps"
              />
              <p className="textCustomerLandingPage">Réactivité garantie</p>
              <p className="textCustomerLandingPage">2h maxi</p>
            </div>
          </div>
          <button type="button" className="buttonHeaderHomePage">
            Contactez-nous
          </button>
        </div>
      </div>

      {/*     Become partnaire      */}

      <div className="becomePartnaireSection">
        <h1>Devenir partenaire</h1>
        <div className="becomePartnaireBoxContainer">
          <div className="becomePartnaireBox box1">
            <div className="textPartnaireBox">
              <h3>Coursier</h3>
              <p>
                Rentabilisez vos déplacements en regardant si des colis sont sur
                votre route
              </p>
              <button type="button">Devenir coursier</button>
            </div>
          </div>
          <div className="becomePartnaireBox box2">
            <div className="textPartnaireBox">
              <h3>Livreur</h3>
              <p>
                Rentabilisez vos déplacements en regardant si des colis sont sur
                votre route
              </p>
              <button type="button">Devenir coursier</button>
            </div>
          </div>
          <div className="becomePartnaireBox box3">
            <div className="textPartnaireBox">
              <h3>Transporteur</h3>
              <p>
                Rentabilisez vos déplacements en regardant si des colis sont sur
                votre route
              </p>
              <button type="button">Devenir coursier</button>
            </div>
          </div>
        </div>
      </div>

      {/*     Footer      */}

      <Footer />
    </div>
  );
};

export default LandingPage;
