import React, { useState, useEffect } from 'react';
import './order.css';
import apiUrl from '../../api/api';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [buttonView, setButtonView] = useState(true);
  const [view, setView] = useState(false);
  const [userId] = useState(1);

  useEffect(() => {
    fetch(`${apiUrl}/api/orders`)
      .then(res => res.json())
      .then(res => {
        setOrders(res);
      });
  }, []);

  const viewMore = () => {
    setButtonView(!buttonView);
    setView(!view);
  };

  const engagementAnnounce = event => {
    const orderId = event.target.id;
    fetch(`${apiUrl}/api/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${origin}`
      },
      body: JSON.stringify({
        delivery_man_id: userId,
        status_id: 2
      })
    });
  };

  return (
    <div className="ordersContent">
      {orders &&
        orders.map(order => {
          return (
            <div className="contentOrder">
              <div className="contentPrincipalInfoOrder">
                <div className="contentAddressOrder">
                  <h4 className="textOrderAddress">
                    {order.start_address_name}
                  </h4>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://www.waze.com/livemap/directions?latlng=${order.start_address_lat.toString()}%${order.start_address_lng.toString()}$&navigate=yes&zoom=17`}
                  >
                    <img
                      src={require('./image/iconWaze.png')}
                      alt="wazeIcon"
                      className="iconWazeOrder"
                    />
                  </a>
                </div>
                <div className="contentAddressOrderEnd">
                  <h4 className="textOrderAddressEnd">
                    {order.end_address_name}
                  </h4>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://www.waze.com/livemap/directions?latlng=${order.end_address_lat.toString()}%${order.end_address_lng.toString()}&navigate=yes&zoom=17`}
                  >
                    <img
                      src={require('./image/iconWaze.png')}
                      alt="wazeIcon"
                      className="iconWazeOrder"
                    />
                  </a>
                </div>
                <div className="contentSeeMore">
                  <h4 className="textOrderAddress">
                    date limite {order.limit_date}
                  </h4>
                  <h4 className="textOrderAddressRapport">
                    rapport {order.price}€
                  </h4>
                  {buttonView === true ? (
                    <button
                      type="button"
                      onClick={viewMore}
                      className="buttonViewMore"
                    >
                      Voir plus
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={viewMore}
                      className="buttonViewMore"
                    >
                      Voir moins
                    </button>
                  )}
                </div>
              </div>
              {view === true && (
                <div className="contentSecondInfoOrder">
                  <h4 className="textOrder">
                    date publication {order.publish_date}
                  </h4>
                  <h4 className="textOrder">poid {order.weight}Kg</h4>
                  <h4 className="textOrder">largeur {order.lngt}m</h4>
                  <button
                    type="button"
                    id={order.id}
                    onClick={engagementAnnounce}
                    className="engagmentAnnoucement"
                  >
                    s'engager
                  </button>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Order;
