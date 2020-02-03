import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './mapping.css';

const MappingDeliver = () => {
  const [pos, setPos] = useState([47.9027336, 1.9086066]);
  const [orderingStart, setOrderingStart] = useState([]);
  const [orderingEnd, setOrderingEnd] = useState([]);
  const [anoncement, setAnoncement] = useState(false);
  const [price, setPrice] = useState();
  const [adressStart, setAdressStart] = useState('');
  const [adressEnd, setAdressEnd] = useState('');
  const [positionMarkerStart, setPositionMarkerStart] = useState([]);
  const [positionMarkerEnd, setPositionMarkerEnd] = useState([]);

  const onMapClick = async function onMapClicked(e) {
    const position = [e.latlng.lat, e.latlng.lng];
    setPos(position);
    setAnoncement(false);
  };

  const orders = [
    {
      number: 145,
      marker_id: 5,
      latStart: 48,
      lngStart: 1.5,
      latEnd: 45,
      lngEnd: 1.3,
      adressStart: '9 rue de la croix rouge',
      adressEnd: '15 champs de mars',
      price: 15
    },
    {
      number: 146,
      marker_id: 5,
      latStart: 46,
      lngStart: 1.4,
      latEnd: 44,
      lngEnd: 1.2,
      adressStart: '90 rue des lubin',
      adressEnd: '1 avenue deguin',
      price: 10
    },
    {
      number: 147,
      marker_id: 5,
      latStart: 49,
      lngStart: 1.1,
      latEnd: 46,
      lngEnd: 1.5,
      adressStart: '47 rue de rouge gorge',
      adressEnd: '15 rue des carmes',
      price: 12
    }
  ];

  useEffect(() => {
    const posTravelTotalStart = [];
    const posTravelTotalEnd = [];
    for (let i = 0; i < orders.length; i++) {
      const { latStart } = orders[i];
      const { lngStart } = orders[i];
      const { latEnd } = orders[i];
      const { lngEnd } = orders[i];
      const { number } = orders[i];
      const posTravelStart = [latStart, lngStart, number];
      const posTravelEnd = [latEnd, lngEnd, number];
      posTravelTotalStart.push(posTravelStart);
      posTravelTotalEnd.push(posTravelEnd);
    }
    setOrderingStart([...orderingStart, ...posTravelTotalStart]);
    setOrderingEnd([...orderingEnd, ...posTravelTotalEnd]);
  }, [1]);

  const markerClick = event => {
    const marker = event.target.id;
    for (let i = 0; i < orders.length; i++)
      if (orders[i].number === parseInt(marker, 10)) {
        setPrice(orders[i].price);
        setAdressStart(orders[i].adressStart);
        setAdressEnd(orders[i].adressEnd);
        setPositionMarkerStart([orders[i].latStart, orders[i].lngStart]);
        setPositionMarkerEnd([orders[i].latEnd, orders[i].lngEnd]);
        setAnoncement(true);
      }
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

        {orderingStart.map(order => {
          return (
            <Marker className="dalu" position={[order[0], order[1]]}>
              <Popup>
                <button
                  className="popupButton"
                  onClick={markerClick}
                  id={order[2]}
                  type="button"
                >
                  Voir annonce
                </button>
              </Popup>
            </Marker>
          );
        })}
        {orderingEnd.map(order => {
          return (
            <Marker position={[order[0], order[1]]}>
              <Popup>
                <button
                  className="popupButton"
                  onClick={markerClick}
                  id={order[2]}
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
            <img
              className="iconWaze"
              src={require('./image/iconWaze.png')}
              alt="icon_waze"
              href={`https://www.waze.com/livemap/directions?latlng=${positionMarkerStart[0]}%2C${positionMarkerStart[1]}&navigate=yes&zoom=17`}
            />
          </div>
          <p className="dash" />

          <div className="contentAdressWaze">
            <div className="contentAdress">
              <p className="textAdvert">addresse d'arrivé : </p>
              <p className="adressAdvert">{adressEnd}</p>
            </div>
            <img
              className="iconWaze"
              src={require('./image/iconWaze.png')}
              alt="icon_waze"
              href={`https://www.waze.com/livemap/directions?latlng=${positionMarkerEnd[0]}%2C${positionMarkerEnd[1]}&navigate=yes&zoom=17`}
            />
          </div>
          <button className="goAdvert" type="button">
            s'engager
          </button>
        </div>
      )}
      )}
    </div>
  );
};

export default MappingDeliver;
