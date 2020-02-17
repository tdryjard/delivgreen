import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import url from '../api/api';
import './historical.css';
import NavBarDashboard from '../Dashboard/NavBarDashboard';
import HeaderDashboard from '../Dashboard/HeaderDashboard';
import useWindowDimensions from '../Dashboard/useWindowDimensions';
import NavBarDashboardMobile from '../Dashboard/NavBarDashboardMobile';

const Historical = () => {
  const { width } = useWindowDimensions();
  const [orders, setOrders] = useState([]);
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(false);

  const userId = 1;

  useEffect(() => {
    fetch(`${url}/api/orders/${userId}/historique`)
      .then(res => res.json())
      .then(res => setOrders(res));
  });

  return (
    <div className="historicalMainContainer">
      {width > 1060 ? <NavBarDashboard /> : null}
      {toggleNavBarMobile ? (
        <NavBarDashboardMobile
          setToggleNavbar={setToggleNavBarMobile}
          toggleNavbar={toggleNavBarMobile}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="fa-2x burgerMenuIconDashboard"
          onClick={() => setToggleNavBarMobile(true)}
        />
      )}
      <div className="contentHistorical">
        <HeaderDashboard />
        <div className="historicalSmallContainer">
          <h4 className="titleHistorical">Historique de commande</h4>
          <div className="numberHistorical">
            <img
              className="iconNumberHisto"
              src={require('./image/iconNumber.svg')}
              alt="iconNumber"
            />
            <div className="contentNumber">
              <p className="titleNumberHisto">Déjà</p>
              <div className="numberHisto">
                <p>35</p>
              </div>
              <p className="titleNumberHisto">commandes réalisées !</p>
            </div>
          </div>
          <div className="containerHisto">
            {orders.map(order => {
              return (
                <div className="contentHisto">
                  <div className="contentInfoHisto">
                    <div className="textHisto">
                      <p>Commandé le : </p>
                      <p className="dateHisto">{order.publish_date}</p>
                    </div>
                    <div className="textHisto">
                      <p>Reçu le : </p>
                      <p className="dateHisto">{order.arrival_date}</p>
                    </div>
                    <div className="textHisto">
                      <p>Commande : </p>
                      <p className="dateHisto">n°{order.id}</p>
                    </div>
                  </div>
                  <div className="detailHisto">
                    <button type="button" className="detailHistoButton">
                      Voir facture
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historical;
