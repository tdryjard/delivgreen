import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavBarDashboardMobile from './NavBarDashboardMobile';
import useWindowDimensions from './useWindowDimensions';
import HeaderDashboard from './HeaderDashboard';
import './MyOrdersClient.css';
import NavBarDashboardClient from './NavBarDashboardClient';
import url from '../api/api';
import useGlobalState from '../../hooks/useGlobalState';

const MyOrdersClient = () => {
  const { width } = useWindowDimensions();
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(false);
  const [orders, setOrders] = useState(null);
  const { user } = useGlobalState();

  useEffect(() => {
    if (user) {
      fetch(`${url}/api/orders?userId=${user.id}`)
        .then(res => res.json())
        .then(res => {
          setOrders(res);
        });
    }
  }, []);

  return (
    <div className="ordersClientMainContainer">
      {width > 1060 ? <NavBarDashboardClient /> : null}
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
      <div className="dashboardBody">
        <div className="headerDashboardOrders">
          <HeaderDashboard />
        </div>
        <div className="historicalSmallContainer">
          <h4 className="titleHistorical">Historique de commande</h4>
          <div className="numberHistorical">
            <img
              className="iconNumberHisto"
              src={require('../historique/image/backInfoHisto.svg')}
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
            {orders && orders.length > 0 ? (
              orders.map((order, i) => {
                return (
                  <div className="contentHisto" key={i}>
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
              })
            ) : (
              <div className="noOrdersClient">
                <h3 className="noOrdersClientText">
                  Vous n'avez pas encore fait de commandes !
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersClient;
