import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHome } from '@fortawesome/free-solid-svg-icons';
import NavBarDashboardMobile from './NavBarDashboardMobile';
import useWindowDimensions from './useWindowDimensions';
import NavBarDashboardClient from './NavBarDashboardClient';
import './DashboardClient.css';

const DashboardClient = () => {
  const { width } = useWindowDimensions();
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(false);

  const orderExample = [
    {
      number: '253',
      pick_up_date: '13/01/2020',
      departure: '18 rue de la Choppe 45000 Orléans',
      departure_date: '18/01/2020',
      arrival: '12 rue de la Gare 45000 Orléans',
      limit_date: '24/01/2020',
      weight: 170,
      length: 190,
      height: 155,
      status: 'Pris en charge'
    },
    {
      number: '898',
      pick_up_date: '',
      departure: '18 rue de la Choppe 45000 Orléans',
      departure_date: '18/01/2020',
      arrival: '12 rue de la Gare 45000 Orléans',
      limit_date: '12/02/2020',
      weight: 170,
      length: 190,
      height: 155,
      status: 'Acceptée'
    },
    {
      number: '853',
      pick_up_date: '13/01/2020',
      departure: '18 rue de la Choppe 45000 Orléans',
      departure_date: '18/01/2020',
      arrival: '12 rue de la Gare 45000 Orléans',
      limit_date: '24/01/2020',
      weight: 170,
      length: 190,
      height: 155,
      status: 'Pris en charge'
    },
    {
      number: '253',
      pick_up_date: '13/01/2020',
      departure: '18 rue de la Choppe 45000 Orléans',
      departure_date: '18/01/2020',
      arrival: '12 rue de la Gare 45000 Orléans',
      limit_date: '24/01/2020',
      weight: 170,
      length: 190,
      height: 155,
      status: 'Acceptée'
    },
    {
      number: '256',
      pick_up_date: '13/01/2020',
      departure: '18 rue de la Choppe 45000 Orléans',
      departure_date: '18/01/2020',
      arrival: '12 rue de la Gare 45000 Orléans',
      limit_date: '24/01/2020',
      weight: 56,
      length: 80,
      height: 125,
      status: 'Pris en charge'
    }
  ];

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
                <p className="nbCommandesReal">4</p>
              </div>
            </div>
            <div className="cardHeaderDashboard">
              <div className="containerInCardDashboard">
                <p className="titleStatsCardDashboard">Nombre de commandes</p>
                <p className="generatedCash">23</p>
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
              {orderExample.map(order => {
                return (
                  <tbody className="itemsContainerOrder">
                    <td className="itemTableOrders">
                      <p className="itemListOrders">{order.number}</p>
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
                      <p className="buttonActionOrder">Détails</p>
                    </td>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
