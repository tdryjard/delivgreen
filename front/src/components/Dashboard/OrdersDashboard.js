import React, { useState } from 'react';

const OrdersDashboard = ({ status, order }) => {
  const [detailsNeeded, setDetailsNeeded] = useState(false);
  if (status === 0) {
    return (
      <div>
        <p>Départ :</p>
        <p>{order.departure}</p>
        <p>Destination :</p>
        <p>{order.arrival}</p>
        <p>Date limite :</p>
        <p>{order.limit_date}</p>
        {detailsNeeded ? (
          <div>
            <p>Longueur :</p>
            <p>{order.length}</p>
            <p>Largeur :</p>
            <p>{order.weight}</p>
          </div>
        ) : (
          <button type="button" onClick={() => setDetailsNeeded(true)}>
            Détails
          </button>
        )}
      </div>
    );
  }
  return (
    <div>
      <h1>Banane</h1>
      <p>Départ :</p>
      <p>{order.departure}</p>
      <p>Destination :</p>
      <p>{order.arrival}</p>
      <p>Date limite :</p>
      <p>{order.limit_date}</p>
      {detailsNeeded ? (
        <div>
          <p>Longueur :</p>
          <p>{order.length}</p>
          <p>Largeur :</p>
          <p>{order.weight}</p>
        </div>
      ) : (
        <button type="button" onClick={() => setDetailsNeeded(true)}>
          Détails
        </button>
      )}
    </div>
  );
};

export default OrdersDashboard;
