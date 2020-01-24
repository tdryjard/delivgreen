import React, { useState, useEffect } from 'react';
import './accueil.css';
import Footer from '../footer/Footer';
import NavBar from '../NavBar/NavBar';

const Accueil = () => {
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
    <div className="contentAccueil">
      <NavBar />
      <head className="headAccueil">
        <div className="beClient">
          <button type="button" className="headText1">
            Je veux faire livrer un colis
          </button>
        </div>
        <div className="beDeliver">
          <button type="button" className="headText2">
            Devenir livreur DelivGreen
          </button>
        </div>
      </head>

      <div className="numberCo2Content">
        <div className="contentNumberType">
          <div className="contentNumber">
            <p className="numberCo2">{co2Counter}</p>
            <div>
              <img
                className="ecoLogo"
                src={require('./image/ecoLogo.png')}
                alt="ecologie logo"
              />
            </div>
          </div>
          <p className="typeCo2">Kg de Co2</p>
        </div>
        <p className="describeCo2">économisés avec Deliv'green</p>
      </div>

      <div className="delivryStep">
        <p className="titleDelivryStep">étapes de livraison</p>
        <div className="stepDelivry">
          <img
            className="iconDelivry"
            src={require('./image/iconDeliv1.png')}
            alt="iconDelivry"
          />
          <p className="describeDelivry">Je renseigne mon colis</p>
        </div>
        <div className="stepDelivry">
          <img
            className="iconDelivry"
            src={require('./image/iconDeliv2.png')}
            alt="iconDelivry"
          />
          <p className="describeDelivry">
            Je choisis un point de départ et d’arrivé
          </p>
        </div>
        <div className="stepDelivry">
          <img
            className="iconDelivry"
            src={require('./image/iconDeliv3.png')}
            alt="iconDelivry"
          />
          <p className="describeDelivry">Ma livraison est prise en charge</p>
        </div>
        <button type="button" className="clientButton">
          Je veux faire livrer un colis
        </button>
      </div>
      <div className="articleContent">
        <p className="articleContentTitle">Deliv'Greenak tu</p>
        <div className="article">
          <img
            className="imgArticle"
            src={require('./image/iconDeliv.png')}
            alt="article"
          />
          <button type="button" className="buttonArticle">
            voir plus
          </button>
        </div>
        <div className="article">
          <img
            className="imgArticle"
            src={require('./image/iconDeliv.png')}
            alt="article"
          />
          <button type="button" className="buttonArticle">
            voir plus
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
