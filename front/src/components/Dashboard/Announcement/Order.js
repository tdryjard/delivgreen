import React, { useState, useEffect } from 'react';
import './order.css';

const Order = () => {
  const [order, setOrder] = useState([]);
  const [buttonView, setButtonView] = useState(true);
  const [view, setView] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/api/orders`)
      .then(res => res.json())
      .then(res => {
        setOrder(res);
      });
  }, []);

  const viewMore = () => {
    if (buttonView === true) {
      setButtonView(false);
      setView(true);
    } else if (buttonView === false) {
      setButtonView(true);
      setView(false);
    }
  };

  return (
    <div className="ordersContent">
      {order.map(order => {
        return (
          <div className="contentOrder">
            <div className="contentPrincipalInfoOrder">
              <div className="contentAddressOrder">
                <h4 className="textOrderAddress">{order.start_address_name}</h4>
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
              <div className="contentAddressOrder">
                <h4 className="textOrderAddress">{order.end_address_name}</h4>
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
                <h4 className="textOrderAddress">rapport {order.price}€</h4>
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
                <h4 className="textOrder">hauteur {order.height}m</h4>
                <h4 className="textOrder">largeur {order.length}m</h4>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Order;
