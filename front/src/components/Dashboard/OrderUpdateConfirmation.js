import React from 'react';
import './OrderUpdateConfirmation.css';
import { Link } from 'react-router-dom';

const OrderUpdateConfirmation = () => {
  return (
    <div className="orderConfirmationContainer">
      <div className="smallContainerOrderConfirmation">
        <h3 className="orderConfirmationMessage">
          Le colis n°{window.location.search.split('?orderId=')[1]} a bien été
          réceptionné !
        </h3>
        <Link className="linkToDashboard" to="/dashboard-pro">
          Retour au tableau de bord
        </Link>
      </div>
    </div>
  );
};

export default OrderUpdateConfirmation;
