import React, { useState, useEffect } from 'react';
import './order.css';

const Order = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/orders`)
      .then(res => res.json())
      .then(res => {
        setOrder(res);
      });
  }, []);

  return (
    <div className="orderContent">
      {order.map(order => {
        return (
          <div>
            <h4 className="textOrder">
              adresse de départ : {order.start_address_name}
            </h4>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.waze.com/livemap/directions?latlng=${order.start_address_lat.toString()}%${order.start_address_lng.toString()}$&navigate=yes&zoom=17`}
            >
              <img
                src={require('../../mapping/image/iconWaze.png')}
                alt="wazeIcon"
              />
            </a>
            <h4 className="textOrder">
              adresse d'arrivé : {order.end_address_name}
            </h4>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.waze.com/livemap/directions?latlng=${order.end_address_lat.toString()}%${order.end_address_lng.toString()}&navigate=yes&zoom=17`}
            >
              <img
                src={require('../../mapping/image/iconWaze.png')}
                alt="wazeIcon"
              />
            </a>
            <h4 className="textOrder">prix {order.price}</h4>
            <h4 className="textOrder">date publication {order.publish_date}</h4>
            <h4 className="textOrder">poid {order.weight}</h4>
            <h4 className="textOrder">hauteur {order.height}</h4>
            <h4 className="textOrder">largeur {order.leight}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
