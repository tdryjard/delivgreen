import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import NavBarDashboardMobile from './NavBarDashboardMobile';
import useWindowDimensions from './useWindowDimensions';
import NavBarDashboardClient from './NavBarDashboardClient';
import './DashboardClient.css';
import url from '../api/api';
import OrderDetails from './OrderDetails';
import useGlobalState from '../../hooks/useGlobalState';

const DashboardClient = () => {
  const { width } = useWindowDimensions();
  const { user } = useGlobalState();
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(false);
  const [clientOrders, setClientOrders] = useState(null);
  const [moreDetails, setMoreDetails] = useState(false);
  const [detailsIndex, setDetailsIndex] = useState(null);
  const [currentOrders, setCurrentOrders] = useState(null);

  const getProducts = () => {
    const userId = user.id;
    axios
      .get(`${url}/api/orders?userId=${userId}`)
      .then(result => result.data)
      .then(data => {
        const stockOrders = data;
        let count = 0;
        for (let i = 0; i < stockOrders.length; i++) {
          if (stockOrders[i].status_id < 4) {
            count++;
          }
        }
        setCurrentOrders(count);
        setClientOrders(stockOrders);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mySpaceMainContainer">
      {/*                   Pro Nav Bar                   */}
      {width > 1060 ? <NavBarDashboardClient /> : null}
      {width < 1060 ? (
        <NavBarDashboardMobile
          setToggleNavbar={setToggleNavBarMobile}
          toggleNavbar={toggleNavBarMobile}
        />
      ) : null}
      {/*                 Else Client Nav bar              */}
      <div className="dashboardBody">
        <div className="headerDashboard">
          {/*         Icons in the top of the dashboard       */}

          <div className="topHeaderBarMySpace">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="backToHome">
                <p className="backToHomeText">Accueil</p>
                <FontAwesomeIcon
                  style={{ color: '#17B994' }}
                  className="fas fa-2x"
                  icon={faHome}
                />
              </div>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <div className="getHelpDashboardContainer">
                <p className="needHelpText">Besoin d'aide </p>
                <p className="getHelpDashboard">?</p>
              </div>
            </Link>
          </div>

          {/*           Stats of the dashboard            */}

          <div className="doubleCardHeaderDashboard">
            <div className="cardHeaderDashboard">
              <div className="containerInCardDashboard">
                <p className="titleStatsCardDashboard">Commandes en cours</p>
                <p className="nbCommandesReal">
                  {currentOrders ? currentOrders.length : 0}
                </p>
              </div>
            </div>
            <div className="cardHeaderDashboard">
              <div className="containerInCardDashboard">
                <p className="titleStatsCardDashboard">Nombre de commandes</p>
                <p className="generatedCash">
                  {clientOrders ? clientOrders.length : 0}
                </p>
              </div>
            </div>
            <div className="cardHeaderDashboard">
              <div className="containerInCardDashboard">
                <p className="titleStatsCardDashboard">Proposer une course</p>
                <button type="button" className="buttonNewOrderDashboard">
                  Nouvelle commande
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bodyMySpaceContainerClient">
          <div className="myOrdersContainerDashboardClient">
            <h1 className="titleMyOrdersDashboardClient">Commandes en cours</h1>

            {/*     Légende      */}

            <div className="legendContainerClient">
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

            {/*     Commandes     */}

            <table className="tableContainerDashboardClient">
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
                            {order.status === 'Pris en charge' ? (
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
                            className="buttonActionOrder"
                            onClick={() => {
                              setMoreDetails(true);
                              setDetailsIndex(index);
                            }}
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
              <OrderDetails
                status={1}
                order={clientOrders[detailsIndex]}
                hideDetails={setMoreDetails}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
