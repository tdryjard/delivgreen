import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCheckCircle,
  faClock,
  faChevronRight,
  faBox
} from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../NavBar/NavBar';
import useGlobalState from '../../hooks/useGlobalState';

const LandingPage = () => {
  const [co2Counter, setCo2Counter] = useState(0);
  const { user } = useGlobalState();
  const [purchaseCounter, setPurchaseCounter] = useState(0);
  const [roundTripCounter, setRoundTripCounter] = useState(0);
  const [jobCreateCounter, setJobCreateCounter] = useState(0);
  const [scrolling, setScrolling] = useState(0);
  const [scrollAtCounter, setScrollAtCounter] = useState(false);

  useEffect(() => {
    if (scrollAtCounter === false) {
      window.addEventListener('scroll', () => {
        setScrolling(window.scrollY);
      });
      if (scrolling >= 2300) {
        setScrollAtCounter(true);
      }
    }
  }, [scrolling]);

  useEffect(() => {
    if (scrollAtCounter === true) {
      let counterAdd = 0;
      const counterCo2 = setInterval(() => {
        counterAdd += co2Counter + 100;
        setCo2Counter(counterAdd);
        if (counterAdd > 14000) {
          clearInterval(counterCo2);
        }
      }, 20);

      counterAdd = 0;

      const counterPurchase = setInterval(() => {
        counterAdd += purchaseCounter + 5;
        setPurchaseCounter(counterAdd);
        if (counterAdd > 4100) {
          clearInterval(counterPurchase);
        }
      }, 40);

      counterAdd = 0;

      const counterTrip = setInterval(() => {
        counterAdd += roundTripCounter + 2;
        setRoundTripCounter(counterAdd);
        if (counterAdd > 1200) {
          clearInterval(counterTrip);
        }
      }, 40);

      counterAdd = 0;

      const counterJob = setInterval(() => {
        counterAdd += jobCreateCounter + 2;
        setJobCreateCounter(counterAdd);
        if (counterAdd > 565) {
          clearInterval(counterJob);
        }
      }, 40);
    }
  }, [scrollAtCounter]);

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
            <h4 className="subtitleSliderLandingPage">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vitae varius turpis.
            </h4>
            {user ? (
              <Link
                to="/demande-livraison"
                type="button"
                className="buttonHeaderHomePage"
              >
                Proposer une course
                <FontAwesomeIcon
                  icon={faBox}
                  className="arrowIconButton boxIcon"
                />
              </Link>
            ) : (
              <Link to="/signup" type="button" className="buttonHeaderHomePage">
                Proposer une course
                <FontAwesomeIcon
                  icon={faBox}
                  className="arrowIconButton boxIcon"
                />
              </Link>
            )}
          </div>
        </div>
        <img
          className="headerImageLandingPage"
          src={require('./images/sliderDelivGreen.jpg')}
          alt="header"
        />
      </div>

      {/*     3 steps attempt     */}

      <div className="threeStepsBigContainer">
        <h1 className="threeStepsTitle">3 étapes pour livrer un colis</h1>
        <h3>Faire livrer n'a jamais été aussi simple</h3>
        <div className="cardsContainerThreeSteps">
          <div className="steps3Container">
            <div className="svgLandingPage1" />
            <div className="textThreeStepContainer">
              <h1 className="textThreeStepsAttempt">Informations du colis</h1>
              <h3 className="subtitleThreeSteps">
                Je renseigne les détails de mon colis
              </h3>
            </div>
          </div>
          <div className="steps3Container">
            <div className="svgLandingPage2" />
            <div className="textThreeStepContainer">
              <h1 className="textThreeStepsAttempt">Départ et arrivée</h1>
              <h3 className="subtitleThreeSteps">
                Je renseigne les coordonnées de départ et d'arrivée
              </h3>
            </div>
          </div>
          <div className="steps3Container">
            <div className="svgLandingPage3" />
            <div className="textThreeStepContainer">
              <h1 className="textThreeStepsAttempt">
                Mon colis est pris en charge
              </h1>
              <h3 className="subtitleThreeSteps">
                Un partenaire Deliv'Green accepte et réalise la livraison
              </h3>
            </div>
          </div>
        </div>
        {user ? (
          <Link
            to="/demande-livraison"
            type="button"
            className="buttonHeaderHomePage"
          >
            Proposer une course
            <FontAwesomeIcon icon={faBox} className="arrowIconButton boxIcon" />
          </Link>
        ) : (
          <Link to="/signup" type="button" className="buttonHeaderHomePage">
            Proposer une course
            <FontAwesomeIcon icon={faBox} className="arrowIconButton boxIcon" />
          </Link>
        )}
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
            <Link to="/partner" type="button" className="buttonBecomePartner">
              Plus d'infos
              <FontAwesomeIcon
                icon={faChevronRight}
                className="arrowIconButton"
              />
            </Link>
          </div>
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
          <p className="typeCo2">Co2 économisé</p>
        </div>
        <div className="contentNumberType">
          <div className="contentNumberCo2">
            <p className="numberCo2">{purchaseCounter}</p>
            <div>
              <img
                className="ecoLogo"
                src={require('./images/ecoLogo.png')}
                alt="ecologie logo"
              />
            </div>
          </div>
          <p className="typeCo2">Courses réalisés</p>
        </div>
        <div className="contentNumberType">
          <div className="contentNumberCo2">
            <p className="numberCo2">{roundTripCounter}</p>
            <div>
              <img
                className="ecoLogo"
                src={require('./images/ecoLogo.png')}
                alt="ecologie logo"
              />
            </div>
          </div>
          <p className="typeCo2">Aller-retour epargnés</p>
        </div>
        <div className="contentNumberType">
          <div className="contentNumberCo2">
            <p className="numberCo2">{jobCreateCounter}</p>
            <div>
              <img
                className="ecoLogo"
                src={require('./images/ecoLogo.png')}
                alt="ecologie logo"
              />
            </div>
          </div>
          <p className="typeCo2">Emplois créés</p>
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
                className="far fa-5x iconCustomerSection"
              />
              <p className="textCustomerLandingPage">Livraison garantie</p>
              <p className="textCustomerLandingPage">satisfait ou remboursé</p>
            </div>
            <div className="itemCustomer">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="far fa-5x iconCustomerSection"
              />
              <p className="textCustomerLandingPage">Service client</p>
              <p className="textCustomerLandingPage"> disponible 24/7</p>
            </div>
            <div className="itemCustomer">
              <FontAwesomeIcon
                icon={faClock}
                className="far fa-5x iconCustomerSection"
              />
              <p className="textCustomerLandingPage">Réactivité garantie</p>
              <p className="textCustomerLandingPage">en 2h maxi</p>
            </div>
          </div>
          <Link to="/contact" type="button" className="buttonCustomerServices">
            Contactez-nous
            <FontAwesomeIcon icon={faEnvelope} className="envelopeIconButton" />
          </Link>
        </div>
      </div>

      {/*     Footer      */}

      <Footer />
    </div>
  );
};

export default LandingPage;
