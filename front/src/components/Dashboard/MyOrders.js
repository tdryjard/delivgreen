import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import './MyOrders.css';
import axios from 'axios';
import NavBarDashboard from './NavBarDashboard';
import HeaderDashboard from './HeaderDashboard';
import useWindowDimensions from './useWindowDimensions';
import NavBarDashboardMobile from './NavBarDashboardMobile';

const MyOrders = () => {
  const { width } = useWindowDimensions();
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(false);
  const [clientOrders, setClientOrders] = useState(null);
  const [moreDetails, setMoreDetails] = useState(false);
  const [detailsIndex, setDetailsIndex] = useState(null);

  const getProducts = () => {
    const userId = 1;
    const getUrl = `http://localhost:8000/api/orders?userId=${userId}`;
    axios
      .get(getUrl)
      .then(result => result.data)
      .then(data => {
        const stockOrders = data;
        setClientOrders(stockOrders);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mySpaceMainContainer">
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
      <div className="dashboardBody">
        <div className="headerDashboardOrders">
          <HeaderDashboard />
        </div>
        <div className="legendAndContentContainer">
          <div className="legendContainer">
            <div className="legendIconAndText">
              <p>Acceptée</p>
              <FontAwesomeIcon
                style={{ marginLeft: '2px', color: 'orange' }}
                icon={faCircle}
              />
            </div>
            <div className="legendIconAndText">
              <p>Prise en charge</p>
              <FontAwesomeIcon
                style={{ marginLeft: '2px', color: '#3c9d9b' }}
                icon={faCircle}
              />
            </div>
          </div>
          <div className="ordersCardContainer">
            <div className="myOrdersContainerList">
              <h1 className="titleMyOrders">Mes commandes en cours</h1>
              <table className="tableMainContainerOrder">
                <thead>
                  <tr>
                    <th className="tableHeaderOrders" colSpan="1">
                      Numéro
                    </th>
                    <th className="tableHeaderOrders" colSpan="1">
                      Statut
                    </th>
                    <th className="tableHeaderOrders" colSpan="1">
                      Date limite
                    </th>
                    <th className="tableHeaderOrders" colSpan="1">
                      Détails
                    </th>
                  </tr>
                </thead>
                {clientOrders
                  ? clientOrders.map((order, index) => {
                      return (
                        <tbody className="itemsContainerOrder">
                          <td className="itemTableOrders">
                            <p className="itemListOrders">{order.id}</p>
                          </td>
                          <td className="itemTableOrders">
                            <p className="itemListOrders">
                              {order.status_name === 'Pris en charge' ? (
                                <FontAwesomeIcon
                                  style={{ color: 'orange' }}
                                  icon={faCircle}
                                />
                              ) : (
                                <FontAwesomeIcon
                                  style={{ color: '#3c9d9b' }}
                                  icon={faCircle}
                                />
                              )}
                            </p>
                          </td>
                          <td className="itemTableOrders">
                            <p className="itemListOrders">{order.limit_date}</p>
                          </td>
                          <td className="itemTableOrders">
                            <p
                              onClick={() => {
                                setMoreDetails(true);
                                setDetailsIndex(index);
                              }}
                              className="buttonActionOrder"
                            >
                              Détails
                            </p>
                          </td>
                        </tbody>
                      );
                    })
                  : null}
              </table>
              {moreDetails ? (
                <div className="moreDetailsContainer">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="fa-3x closeDetailsIcon"
                    onClick={() => {
                      setMoreDetails(false);
                      setDetailsIndex(null);
                    }}
                  />
                  <h1>Numéro commande : {clientOrders[detailsIndex].id}</h1>
                  <div className="containerStatusBar">
                    <div className="titleStatusBarContainer">
                      <h4 className="titleStatusBar">En attente</h4>
                      <h4 className="titleStatusBar">Accepté</h4>
                      <h4 className="titleStatusBar">Pris en charge</h4>
                      <h4 className="titleStatusBar">Livré</h4>
                    </div>
                    <div className="barStatusAndCircleContainer">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className={`circleStatusBar fa-3x ${
                          clientOrders[detailsIndex].status_name ===
                            'Acceptée' ||
                          clientOrders[detailsIndex].status_name ===
                            'Pris en charge'
                            ? 'reachedStatus'
                            : null
                        }`}
                      />
                      <div
                        className={`barStatusBar ${
                          clientOrders[detailsIndex].status_name ===
                            'Acceptée' ||
                          clientOrders[detailsIndex].status_name ===
                            'Pris en charge'
                            ? 'reachedBar'
                            : null
                        }`}
                      />
                      <FontAwesomeIcon
                        icon={faCircle}
                        className={`circleStatusBar fa-3x ${
                          clientOrders[detailsIndex].status_name ===
                          'Pris en charge'
                            ? 'reachedStatus'
                            : null
                        }`}
                      />
                      <div
                        className={`barStatusBar ${
                          clientOrders[detailsIndex].status_name ===
                          'Pris en charge'
                            ? 'reachedBar'
                            : null
                        }`}
                      />
                      <FontAwesomeIcon
                        icon={faCircle}
                        className={`circleStatusBar fa-3x ${
                          clientOrders[detailsIndex].status_name ===
                          'Pris en charge'
                            ? 'reachedStatus'
                            : null
                        }`}
                      />
                      <div className="barStatusBar" />
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="circleStatusBar fa-3x"
                      />
                    </div>
                  </div>
                  <div className="addressContainerMyOrders">
                    <div className="adressContainerSmall addressDepartureOrder">
                      <h4 className="titleAdressOrders">Adresse de départ :</h4>
                      <p>{clientOrders[detailsIndex].start_address_name}</p>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://www.waze.com/livemap/directions?latlng=${clientOrders[
                          detailsIndex
                        ].start_address_lat.toString()}%${clientOrders[
                          detailsIndex
                        ].start_address_lng.toString()}$&navigate=yes&zoom=17`}
                        className="wazeContainerOrders"
                      >
                        Itinéraire
                        <img
                          src={require('./Announcement/image/iconWaze.png')}
                          alt="wazeIcon"
                          className="wazeButtonOrder"
                        />
                      </a>
                    </div>
                    <div className="adressContainerSmall addressArrivalOrder">
                      <h4 className="titleAdressOrders">Adresse d'arrivée :</h4>
                      <p>{clientOrders[detailsIndex].end_address_name}</p>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://www.waze.com/livemap/directions?latlng=${clientOrders[
                          detailsIndex
                        ].start_address_lat.toString()}%${clientOrders[
                          detailsIndex
                        ].start_address_lng.toString()}$&navigate=yes&zoom=17`}
                        className="wazeContainerOrders"
                      >
                        Itinéraire
                        <img
                          src={require('./Announcement/image/iconWaze.png')}
                          alt="wazeIcon"
                          className="wazeButtonOrder"
                        />
                      </a>
                    </div>
                  </div>
                  <p>Date limite : {clientOrders[detailsIndex].limit_date}</p>
                  <button className="buttonMoreDetailsMyOrders" type="button">
                    {clientOrders[detailsIndex].status_name === 'Pris en charge'
                      ? 'Livrer le colis'
                      : 'Réceptionner le colis'}
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
