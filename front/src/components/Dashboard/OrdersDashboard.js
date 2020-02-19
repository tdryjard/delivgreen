import React, { useState } from 'react';
import './OrdersDashboard.css';

const OrdersDashboard = ({ status, order }) => {
  const [detailsNeeded, setDetailsNeeded] = useState(false);
  if (status === 0) {
    return (
      <div className="orderCardMainContainer">
        <p>{order.departure}</p>
        <p>{order.arrival}</p>
        <p>{order.limit_date}</p>
        {detailsNeeded ? (
          <div>
            <p>Longueur :</p>
            <p>{order.length}</p>
            <p>Largeur :</p>
            <p>{order.weight}</p>
          </div>
        ) : null}
        <div className="buttonContainerOrders">
          <button
            className="showDetailsDashboard"
            type="button"
            onClick={() => setDetailsNeeded(!detailsNeeded)}
          >
            {detailsNeeded ? 'Moins' : 'Détails'}
          </button>
          <button type="button" className="getTheDelivery">
            Colis récupéré
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="orderCardMainContainer">
      <p className="itemArrayMyOrders">{order.number}</p>
      <p className="itemArrayMyOrders">{order.pick_up_date}</p>
      <p className="itemArrayMyOrders">{order.status}</p>
      <p className="itemArrayMyOrders">{order.limit_date}</p>
      {detailsNeeded ? (
        <div>
          <p>{order.length}</p>
          <p>{order.weight}</p>
          <p className="itemArrayMyOrders">{order.departure}</p>
          <p className="itemArrayMyOrders">{order.arrival}</p>
        </div>
      ) : null}
      <div className="buttonContainerOrders">
        <button
          className="showDetailsDashboard"
          type="button"
          onClick={() => setDetailsNeeded(!detailsNeeded)}
        >
          {detailsNeeded ? 'Moins' : 'Détails'}
        </button>
        <button type="button" className="getTheDelivery">
          Livrer le colis
        </button>
      </div>
    </div>
  );
};

export default OrdersDashboard;
