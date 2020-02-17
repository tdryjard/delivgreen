import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
      number: '256157853',
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
      number: '256157853',
      pick_up_date: '13/01/2020',
      departure: '18 rue de la Choppe 45000 Orléans',
      departure_date: '18/01/2020',
      arrival: '12 rue de la Gare 45000 Orléans',
      limit_date: '24/01/2020',
      weight: 170,
      length: 190,
      height: 155,
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
        <div className="ordersCardContainer">
          <div className="myOrdersContainerList">
            <h1 className="titleMyOrders">Mes commandes en cours</h1>
            {/* <div className="ordersArrayHeader"> */}
            {/*  <h3 className="headerArray column1">N° commande</h3> */}
            {/*  <h3 className="headerArray column2">Date réception</h3> */}
            {/*  <h3 className="headerArray column3">Statut</h3> */}
            {/*  <h3 className="headerArray column4">Date limite</h3> */}
            {/*  <h3 className="headerArray column5">Details</h3> */}
            {/*  <h3 className="headerArray column6">Action</h3> */}
            {/* </div> */}
            {/* <OrdersDashboard admin={1} order={orderExample[0]} /> */}
            <table>
              <thead>
                <tr>
                  <th colSpan="1">N° commande</th>
                  <th>Date reception</th>
                  <th colSpan="2">Statut</th>
                  <th colSpan="2">Date limite</th>
                  <th colSpan="2">Détails</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                <td>Coucou</td>
                <td>C'est moi</td>
                {orderExample.map(order => {
                  return (
                    <tr className="containerOrderInTable">
                      <td className="itemTableOrders">{order.number}</td>
                      <td className="itemTableOrders">{order.pick_up_date}</td>
                      <td className="itemTableOrders">{order.status}</td>
                      <td className="itemTableOrders">{order.limit_date}</td>
                      {/* <div className="buttonContainerInOrders"> */}
                      {/*  <p className="buttonDetailsOrder">Détails</p> */}
                      {/* </div> */}
                      {/* <div className="buttonContainerInOrders"> */}
                      {/*  <p className="buttonActionOrder">Livrer le colis</p> */}
                      {/* </div> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
