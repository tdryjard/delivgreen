import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './mapping.css';
import apiUrl from '../../config';

const MappingDeliver = () => {
  const [pos, setPos] = useState([47.9027336, 1.9086066]);
  const [anoncement, setAnoncement] = useState(false);
  const [price, setPrice] = useState();
  const [adressStart, setAdressStart] = useState('');
  const [adressEnd, setAdressEnd] = useState('');
  const [positionMarkerStart, setPositionMarkerStart] = useState([]);
  const [positionMarkerEnd, setPositionMarkerEnd] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState(1);
  const [userId] = useState(2);

  const onMapClick = async function onMapClicked(e) {
    const position = [e.latlng.lat, e.latlng.lng];
    setPos(position);
    setAnoncement(false);
  };

  const engagementOrder = () => {
    fetch(`${apiUrl}/orders/${orderId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
      body: JSON.stringify({
        delivery_man_id: userId
      })
    }).then(response => response.json());
  };

  useEffect(() => {
    fetch(`${apiUrl}/orders`)
      .then(res => res.json())
      .then(res => {
        setOrders(res);
      });
  }, []);

  const markerClick = event => {
    const { id } = event.target;
    orders.map(order => {
      if (parseInt(order.id, 10) === parseInt(id, 10)) {
        setPrice(order.price);
        setAdressStart(order.start_address_name);
        setAdressEnd(order.end_address_name);
        setPositionMarkerStart([
          order.start_address_lat,
          order.start_address_lng
        ]);
        setPositionMarkerEnd([order.end_address_lat, order.end_address_lng]);
        setOrderId(order.id);
        setAnoncement(true);
      }
    });
  };

  return (
    <div className="contentMap">
      <LeafletMap
        className="contentMapping"
        onClick={onMapClick}
        center={pos}
        zoom={7}
        maxZoom={19}
        attributionControl
        zoomControl
        doubleClickZoom
        scrollWheelZoom
        dragging
        animate
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

        {orders.map(order => {
          return (
            <Marker
              className="dalu"
              position={[order.start_address_lat, order.start_address_lng]}
            >
              <Popup>
                <button
                  className="popupButton"
                  onClick={markerClick}
                  id={order.id}
                  type="button"
                >
                  Voir annonce
                </button>
              </Popup>
            </Marker>
          );
        })}
        {orders.map(order => {
          return (
            <Marker position={[order.end_address_lat, order.end_address_lng]}>
              <Popup>
                <button
                  className="popupButton"
                  onClick={markerClick}
                  id={order.id}
                  type="button"
                >
                  Voir annonce
                </button>
              </Popup>
            </Marker>
          );
        })}
      </LeafletMap>
      {anoncement === true && (
        <div className="advert">
          <h4 className="titleAdvert">offre de livraison !</h4>
          <div className="contentPrice">
            <p className="textAdvert">Rapport </p>
            <p className="priceAdvert">{price}€</p>
          </div>
          <div className="contentAdressWaze">
            <div className="contentAdress">
              <p className="textAdvert">address de départ : </p>
              <p className="adressAdvert">{adressStart}</p>
            </div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.waze.com/livemap/directions?latlng=${positionMarkerStart[0]}%2C${positionMarkerStart[1]}&navigate=yes&zoom=17`}
            >
              <img
                className="iconWaze"
                src={require('./image/iconWaze.png')}
                alt="icon_waze"
              />
            </a>
          </div>
          <p className="dash" />

          <div className="contentAdressWaze">
            <div className="contentAdress">
              <p className="textAdvert">addresse d'arrivé : </p>
              <p className="adressAdvert">{adressEnd}</p>
            </div>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.waze.com/livemap/directions?latlng=${positionMarkerEnd[0]}%2C${positionMarkerEnd[1]}&navigate=yes&zoom=17`}
            >
              <img
                className="iconWaze"
                src={require('./image/iconWaze.png')}
                alt="icon_waze"
              />
            </a>
          </div>
          <button onClick={engagementOrder} className="goAdvert" type="button">
            s'engager
          </button>
        </div>
      )}
    </div>
  );
};

export default MappingDeliver;
