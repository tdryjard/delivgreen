import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavBarDashboard from '../NavBarDashboard';
import NavBarDashboardMobile from '../NavBarDashboardMobile';
import useWindowDimensions from '../useWindowDimensions';
import HeaderDashboard from '../HeaderDashboard';

const Announcement = () => {
  const { width } = useWindowDimensions();
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(false);
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
      </div>
    </div>
  );
};

export default Announcement;
