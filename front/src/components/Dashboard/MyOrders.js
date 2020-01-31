import React, { useState } from 'react';
import './MyOrders.css';
import NavBarDashboard from './NavBarDashboard';
import HeaderDashboard from './HeaderDashboard';
import OrdersDashboard from './OrdersDashboard';
import useWindowDimensions from './useWindowDimensions';
import NavBarDashboardMobile from './NavBarDashboardMobile';

const MyOrders = () => {
  const { width } = useWindowDimensions();
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(true);

  const orderExample = {
    departure: '18 rue de la Choppe 45000 Orléans',
    departure_date: '18/01/2020',
    arrival: '12 rue de la Gare 45000 Orléans',
    limit_date: '24/01/2020',
    weight: 1700,
    length: 190
  };
  return (
    <div className="mySpaceMainContainer">
      {width > 1060 ? <NavBarDashboard /> : null}
      {toggleNavBarMobile ? (
        <NavBarDashboardMobile
          toggle={toggleNavBarMobile}
          setToggle={setToggleNavBarMobile}
        />
      ) : null}
      <div className="dashboardBody">
        <div className="headerDashboardOrders">
          <p
            className={
              toggleNavBarMobile
                ? 'closeButtonNavBarMobile'
                : 'openButtonNavBarMobile'
            }
            onClick={() => setToggleNavBarMobile(!toggleNavBarMobile)}
          >
            {toggleNavBarMobile ? 'Close' : 'Open'}
          </p>
          <HeaderDashboard />
        </div>
        {/*           Order Cards         */}

        <div className="ordersCardContainer">
          {/*            Acceptées             */}
          <div className="ordersContainerTitle">
            <div className="titleContainer title1">
              <h1 className="titleCardOrders">Acceptées</h1>
            </div>
            <div className="ordersContainer">
              <OrdersDashboard status={0} order={orderExample} />
            </div>
            <div className="ordersContainer">
              <OrdersDashboard status={0} order={orderExample} />
            </div>
            <div className="ordersContainer">
              <OrdersDashboard status={0} order={orderExample} />
            </div>
            <div className="ordersContainer">
              <OrdersDashboard status={0} order={orderExample} />
            </div>
          </div>
          {/*            Prises en charge             */}
          <div className="ordersContainerTitle box">
            <div className="titleContainer title2">
              <h1 className="titleCardOrders">Prises en charge</h1>
            </div>
            <div className="ordersContainer">
              <OrdersDashboard status={1} order={orderExample} />
            </div>
            <div className="ordersContainer">
              <OrdersDashboard status={1} order={orderExample} />
            </div>
          </div>
        </div>
        {/*       End of the Order Cards          */}
      </div>
    </div>
  );
};

export default MyOrders;
