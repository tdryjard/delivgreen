import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import './OrderDetails.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const OrderDetails = ({ order, hideDetails }) => {
  const setAsTaken = () => {
    const url = `http://localhost:8000/api/orders/${order.id}`;
    Axios({
      method: 'put',
      url,
      data: { status_id: 3 }
    })
      .then(response => console.log(response.data))
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="moreDetailsContainer">
      <FontAwesomeIcon
        icon={faTimes}
        className="fa-3x closeDetailsIcon"
        onClick={() => {
          hideDetails(false);
        }}
      />
      <h1>Numéro commande : {order.id}</h1>
      <div className="containerStatusBar">
        <div className="titleStatusBarContainer">
          <h4 className="titleStatusBar">En attente</h4>
          <h4 className="titleStatusBar">Acceptée</h4>
          <h4 className="titleStatusBar">Prise en charge</h4>
          <h4 className="titleStatusBar">Livrée</h4>
        </div>
        <div className="barStatusAndCircleContainer">
          <FontAwesomeIcon
            icon={faCircle}
            className={`circleStatusBar fa-3x ${
              order.status_name === 'Acceptée' ||
              order.status_name === 'Pris en charge'
                ? 'reachedStatus'
                : null
            }`}
          />
          <div
            className={`barStatusBar ${
              order.status_name === 'Acceptée' ||
              order.status_name === 'Pris en charge'
                ? 'reachedBar'
                : null
            }`}
          />
          <FontAwesomeIcon
            icon={faCircle}
            className="circleStatusBar fa-3x reachedStatus"
          />
          <div
            className={`barStatusBar ${
              order.status_name === 'Pris en charge' ? 'reachedBar' : null
            }`}
          />
          <FontAwesomeIcon
            icon={faCircle}
            className={`circleStatusBar fa-3x ${
              order.status_name === 'Pris en charge' ? 'reachedStatus' : null
            }`}
          />
          <div className="barStatusBar" />
          <FontAwesomeIcon icon={faCircle} className="circleStatusBar fa-3x" />
        </div>
      </div>
      <div className="addressContainerMyOrders">
        <div className="adressContainerSmall addressDepartureOrder">
          <h4 className="titleAdressOrders">Adresse de départ :</h4>
          <p>{order.start_address_name}</p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.waze.com/livemap/directions?latlng=${order.start_address_lat.toString()}%${order.start_address_lng.toString()}$&navigate=yes&zoom=17`}
            className="wazeContainerOrders"
          >
            Itinéraire
            <img
              src={require('./Announcement/image/iconWaze.png')}
              alt="wazeIcon"
              className="wazeButtonOrder"
            />
          </a>
        </div>
        <div className="adressContainerSmall addressArrivalOrder">
          <h4 className="titleAdressOrders">Adresse d'arrivée :</h4>
          <p>{order.end_address_name}</p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.waze.com/livemap/directions?latlng=${order.start_address_lat.toString()}%${order.start_address_lng.toString()}$&navigate=yes&zoom=17`}
            className="wazeContainerOrders"
          >
            Itinéraire
            <img
              src={require('./Announcement/image/iconWaze.png')}
              alt="wazeIcon"
              className="wazeButtonOrder"
            />
          </a>
        </div>
      </div>
      <p>Date limite : {order.limit_date}</p>
      {/*     TODO envoyer l'id en signature pour stocker en bdd l'image      */}
      {order.status_name === 'Pris en charge' ? (
        // The parcel is already took by the delivery man so we need the signature
        <Link
          className="buttonMoreDetailsMyOrders"
          to={`/signature?orderId=${order.id}`}
        >
          Livrer le colis
        </Link>
      ) : (
        // The delivery man is picking the parcel

        <Link
          className="buttonMoreDetailsMyOrders"
          to={`/confirmation?orderId=${order.id}`}
          onClick={setAsTaken}
        >
          Réceptionner le colis
        </Link>
      )}
    </div>
  );
};

export default OrderDetails;
