import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';
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

  const getProducts = () => {
    // let getUrl = `http://localhost:8000/api/orders/${clientId}`;
    const userId = 1;
    const getUrl = `http://localhost:8000/api/orders?userId=${userId}`;
    axios
      .get(getUrl)
      .then(result => result.data)
      .then(data => {
        const stockOrders = data;
        console.log(stockOrders);
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
            <button type="button" onClick={getProducts}>
              Click
            </button>
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
                  ? clientOrders.map(order => {
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
                            <p className="buttonActionOrder">Détails</p>
                          </td>
                        </tbody>
                      );
                    })
                  : null}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
