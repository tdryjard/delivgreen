import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';
import './MyOrders.css';
import NavBarDashboard from './NavBarDashboard';
import HeaderDashboard from './HeaderDashboard';
import useWindowDimensions from './useWindowDimensions';
import NavBarDashboardMobile from './NavBarDashboardMobile';

const MyOrders = () => {
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
    </div>
  );
};

export default MyOrders;
