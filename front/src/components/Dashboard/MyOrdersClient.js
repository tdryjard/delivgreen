import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavBarDashboardMobile from './NavBarDashboardMobile';
import useWindowDimensions from './useWindowDimensions';
import HeaderDashboard from './HeaderDashboard';
import './MyOrdersClient.css';
import NavBarDashboardClient from './NavBarDashboardClient';

const MyOrdersClient = () => {
  const { width } = useWindowDimensions();
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(false);

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
        <div className="ordersClientContainer">coucou</div>
      </div>
    </div>
  );
};

export default MyOrdersClient;
