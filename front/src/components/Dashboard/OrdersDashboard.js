import React, { useState } from 'react';
import './OrdersDashboard.css';

const OrdersDashboard = ({ status, order }) => {
  const [detailsNeeded, setDetailsNeeded] = useState(false);
  if (status === 0) {
    return (
      <div className="orderCardMainContainer">
        <p className="orderCardTitle">Départ :</p>
        <p>{order.departure}</p>
        <p className="orderCardTitle">Destination :</p>
        <p>{order.arrival}</p>
        <p className="orderCardTitle">Date limite :</p>
        <p>{order.limit_date}</p>
        {detailsNeeded ? (
          <div>
            <p>Longueur :</p>
            <p>{order.length}</p>
            <p>Largeur :</p>
            <p>{order.weight}</p>
          </div>
        ) : (
          <button
            className="showDetailsDashboard"
            type="button"
            onClick={() => setDetailsNeeded(true)}
          >
            Détails
          </button>
        )}
      </div>
    );
  }
  return (
    <div className="orderCardMainContainer">
      <p className="orderCardTitle">Destination :</p>
      <p>{order.arrival}</p>
      <p className="orderCardTitle">Date limite :</p>
      <p>{order.limit_date}</p>
      {detailsNeeded ? (
        <div>
          <p>Longueur :</p>
          <p>{order.length}</p>
          <p>Largeur :</p>
          <p>{order.weight}</p>
        </div>
      ) : (
        <button
          className="showDetailsDashboard"
          type="button"
          onClick={() => setDetailsNeeded(true)}
        >
          Détails
        </button>
      )}
    </div>
  );
};

export default OrdersDashboard;
