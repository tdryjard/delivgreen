import React from 'react';
import Footer from '../footer/Footer';
import './historical.css';

const Historical = () => {
  return (
    <div className="contentHistorical">
      <h4 className="titleHistorical">Historique de commande</h4>
      <div className="numberHistorical">
        <img
          className="iconNumberHisto"
          src={require('./image/iconNumber.svg')}
          alt="iconNumber"
        />
        <div className="contentNumber">
          <p className="titleNumberHisto">Déja</p>
          <div className="numberHisto">
            <p>35</p>
          </div>
          <p className="titleNumberHisto">commandes réalisés !</p>
        </div>
      </div>
      <div className="containerHisto">
        <div className="contentHisto">
          <div className="contentInfoHisto">
            <div className="textHisto">
              <p>Commandé le : </p>
              <p className="dateHisto">25/10/2019</p>
            </div>
            <div className="textHisto">
              <p>Reçu le : </p>
              <p className="dateHisto">27/10/2019</p>
            </div>
            <div className="textHisto">
              <p>Commande : </p>
              <p className="dateHisto">n°2457</p>
            </div>
          </div>
          <div className="detailHisto">
            <button type="button" className="detailHistoButton">
              voir facture
            </button>
          </div>
        </div>
        <div className="contentHisto">
          <div className="contentInfoHisto">
            <div className="textHisto">
              <p>Commandé le : </p>
              <p className="dateHisto">25/10/2019</p>
            </div>
            <div className="textHisto">
              <p>Reçu le : </p>
              <p className="dateHisto">27/10/2019</p>
            </div>
            <div className="textHisto">
              <p>Commande : </p>
              <p className="dateHisto">n°2457</p>
            </div>
          </div>
          <div className="detailHisto">
            <button type="button" className="detailHistoButton">
              voir facture
            </button>
          </div>
        </div>
        <div className="contentHisto">
          <div className="contentInfoHisto">
            <div className="textHisto">
              <p>Commandé le : </p>
              <p className="dateHisto">25/10/2019</p>
            </div>
            <div className="textHisto">
              <p>Reçu le : </p>
              <p className="dateHisto">27/10/2019</p>
            </div>
            <div className="textHisto">
              <p>Commande : </p>
              <p className="dateHisto">n°2457</p>
            </div>
          </div>
          <div className="detailHisto">
            <button type="button" className="detailHistoButton">
              voir facture
            </button>
          </div>
        </div>
        <div className="contentHisto">
          <div className="contentInfoHisto">
            <div className="textHisto">
              <p>Commandé le : </p>
              <p className="dateHisto">25/10/2019</p>
            </div>
            <div className="textHisto">
              <p>Reçu le : </p>
              <p className="dateHisto">27/10/2019</p>
            </div>
            <div className="textHisto">
              <p>Commande : </p>
              <p className="dateHisto">n°2457</p>
            </div>
          </div>
          <div className="detailHisto">
            <button type="button" className="detailHistoButton">
              voir facture
            </button>
          </div>
        </div>
        <div className="contentHisto">
          <div className="contentInfoHisto">
            <div className="textHisto">
              <p>Commandé le : </p>
              <p className="dateHisto">25/10/2019</p>
            </div>
            <div className="textHisto">
              <p>Reçu le : </p>
              <p className="dateHisto">27/10/2019</p>
            </div>
            <div className="textHisto">
              <p>Commande : </p>
              <p className="dateHisto">n°2457</p>
            </div>
          </div>
          <div className="detailHisto">
            <button type="button" className="detailHistoButton">
              voir facture
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Historical;
