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

      <div className="sliderContainerLandingPage">
        <div className="titleContainerLandingPage">
          <div className="textSliderLandingPage">
            <h1 className="titleLandingPage">
              La livraison de colis éco-responsable
            </h1>
            <button type="button" className="buttonHeaderHomePage">
              Proposer une course
            </button>
          </div>
        </div>
        <img
          className="headerImageLandingPage"
          src={require('./images/sliderDelivGreen.jpg')}
          alt="header"
        />
      </div>

      {/*     3 steps attempt     */}

      <div className="threeStepsMainContainer">
        <h1 className="threeStepsTitle">3 étapes pour livrer un colis</h1>
        <div className="steps3MainContainer">
          <div className="steps3Container">
            <div className="svgLandingPage1" />
            <div className="textThreeStepContainer">
              <h1 className="numberThreeStepsAttempt">1</h1>
              <h1 className="textThreeStepsAttempt">Je renseigne mon colis</h1>
            </div>
          </div>
          <div className="steps3Container">
            <div className="svgLandingPage2" />
            <div className="textThreeStepContainer">
              <h1 className="numberThreeStepsAttempt">2</h1>
              <h1 className="textThreeStepsAttempt">
                Je choisis un point de départ et d'arrivée
              </h1>
            </div>
          </div>
          <div className="steps3Container">
            <div className="svgLandingPage3" />
            <div className="textThreeStepContainer">
              <h1 className="numberThreeStepsAttempt">3</h1>
              <h1 className="textThreeStepsAttempt">
                Mon colis est pris en charge
              </h1>
            </div>
          </div>
        </div>
        <button type="button" className="buttonThreeSteps">
          Proposer une course
        </button>
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
          <button type="button" className="buttonCustomerServices">
            Contactez-nous
          </button>
        </div>
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

      {/*     Become partner      */}

      <div className="becomePartnaireSection">
        <div className="cardBecomePartner">
          <img
            src={require('./images/truckDelivgreen.jpg')}
            alt="van become partner"
            className="vanImagePartner"
          />
          <div className="becomePartnerTextAndButton">
            <h1 style={{ margin: '15px', color: '#17B994' }}>
              Devenir partenaire
            </h1>
            <p className="textBecomePartner">
              Particuliers, coursiers ou transporteur rejoignez le réseau
              Deliv'Green et profitez d'une rémunération attractive
            </p>
            <button type="button" className="buttonBecomePartner">
              Devenir partenaire
            </button>
          </div>
        </div>
      </div>

      {/*     Footer      */}

      <Footer />
    </div>
  );
};

export default LandingPage;
