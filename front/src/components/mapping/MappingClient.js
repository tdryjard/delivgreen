import React, { useState } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import './mapping.css';

const MappingClient = () => {
  const [results, setResults] = useState({});
  const [pos, setPos] = useState([47.9027336, 1.9086066]);
  const [posStart, setPosStart] = useState([47.9027336, 1.9086066]);
  const [posEnd, setPosEnd] = useState([47.9027336, 1.9086066]);
  const provider = new OpenStreetMapProvider();
  const [zooming, setZooming] = useState(6);
  const [inputValue, setInputValue] = useState('');
  const [validStartPosition, setValidStartPosition] = useState(false);
  const [adressStartEnter, setAdressStartEnter] = useState(false);
  const [adressEndEnter, setAdressEndEnter] = useState(false);

  const validPosStart = async function valiPos() {
    await setValidStartPosition(true);
  };

  const validStartAdress = () => {
    setAdressStartEnter(true);
    setValidStartPosition(null);
    setZooming(6);
  };

  const validEndAdress = () => {
    setAdressEndEnter(true);
    setAdressStartEnter(null);
    setZooming(6);
  };

  const giveMeCoords = adress => {
    return provider.search({ query: adress });
  };

  const takeAdress = async function forTakeAdress(event) {
    event.preventDefault();
    setInputValue(event.currentTarget.value);
    const result = await giveMeCoords(inputValue);
    const resultFr = result.filter(
      res => ++res.y > 42.5 && ++res.y < 51 && ++res.x < 8 && ++res.x > -5
    );

    setResults(resultFr.splice(5));
  };

  const onMapClick = async function onMapClicked(e) {
    const position = [e.latlng.lat, e.latlng.lng];
    setPos(position);
    if (validStartPosition === false) {
      setPosStart(position);
    } else if (adressEndEnter === true) {
      setPosEnd(position);
    }
    await setTimeout(function timeout() {
      setZooming(12);
    }, 2000);
  };

  const putMarker = async function placeMarker(event) {
    event.preventDefault();
    const adress = event.target.innerHTML;
    const result = await giveMeCoords(adress);
    const coords = [+result[0].y, +result[0].x];
    setPos([...coords]);
    setResults({});
    await setTimeout(function timeout() {
      if (result[0].raw.type === 'city') {
        setZooming(14);
      } else if (result[0].raw.type) {
        setZooming(15);
      }
    }, 1500);
  };

  const goFirstPos = async function goAtFirstPos() {
    setPos(posStart);
    await setTimeout(function timeout() {
      setZooming(12);
    }, 1500);
  };

  const goSecondPos = async function goAtSecondPos() {
    if (adressStartEnter === true) {
      setPos(posEnd);
    }
  };

  return (
    <div className="contentMap">
      <input
        placeholder="entrer adresse"
        className="takeAdress searchAdress"
        onChange={takeAdress}
      />

      <div className="contentResult">
        {results.length &&
          results.map(result => (
            <div className="contentAdress">
              <p className="resultAdress" onClick={putMarker}>
                {result.label}
              </p>
            </div>
          ))}
      </div>

      {validStartPosition === true ? (
        <div className="posButton">
          <button className="posStart" onClick={goFirstPos} type="button">
            <p className="textPosButton">départ</p>
          </button>
        </div>
      ) : adressStartEnter === true || adressStartEnter === null ? (
        <div className="posButton">
          <button className="posStart" onClick={goFirstPos} type="button">
            <p className="textPosButton">départ</p>
          </button>
          <button className="posEnd" onClick={goSecondPos} type="button">
            <p className="textPosButton">arrivé</p>
          </button>
        </div>
      ) : null}

      <LeafletMap
        className="contentMapping"
        onClick={onMapClick}
        center={pos}
        zoom={zooming}
        maxZoom={19}
        attributionControl
        zoomControl
        doubleClickZoom
        scrollWheelZoom
        dragging
        animate
        easeLinearity={0.35}
      >
        <TileLayer />
        {validStartPosition === false || validStartPosition === true ? (
          <Marker className="marker" position={posStart}>
            <Popup>Demande de livraison</Popup>
          </Marker>
        ) : adressStartEnter === true || adressStartEnter === null ? (
          <div>
            <Marker className="marker" position={posStart}>
              <Popup>point de départ</Popup>
            </Marker>
            <Marker
              src={require('./image/markerEnd.png')}
              className="markerEnd"
              position={pos}
            >
              <Popup>Point de destination</Popup>
            </Marker>
          </div>
        ) : null}
      </LeafletMap>

      {validStartPosition === false ? (
        <div className="divEnterPosMapClient">
          <p
            className="messageMap"
            onAnimationEnd={event => {
              event.currentTarget.remove();
            }}
          >
            Placez votre point de départ
          </p>
          <button className="validPos" onClick={validPosStart} type="button">
            Valider point de départ
          </button>
        </div>
      ) : validStartPosition === true ? (
        <div className="divEnterAdressMapClient">
          <form onSubmit={validStartAdress}>
            <input
              className="enterAdressMapClient"
              placeholder="entrer addresse de départ"
            />
          </form>
        </div>
      ) : adressStartEnter === true ? (
        <div className="divEnterPosMapClient">
          <p
            className="messageMap"
            onAnimationEnd={event => {
              event.currentTarget.remove();
            }}
          >
            Placez votre point d'arrivé
          </p>
          <button
            className="validPosEnd"
            onClick={validEndAdress}
            type="button"
          >
            Valider point d'arrivé
          </button>
        </div>
      ) : adressEndEnter === true ? (
        <div className="divEnterAdressMapClientEnd">
          <form onSubmit={validEndAdress}>
            <input
              className="enterAdressMapClient"
              placeholder="entrer addresse d'arrivé"
            />
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default MappingClient;
