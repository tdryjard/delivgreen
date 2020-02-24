import React, { useState } from 'react';
import './SignatureZone.css';
import SignatureCanvas from 'react-signature-canvas';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../Dashboard/useWindowDimensions';

const SignatureZone = () => {
  const [signatureImage, setSignatureImage] = useState(null);
  const { width } = useWindowDimensions();
  const [sigPad, setSigPad] = useState({});
  const orderId = window.location.search.split('orderId=')[1];

  const clear = () => {
    setSigPad(sigPad.clear);
  };

  const trim = () => {
    setSignatureImage(sigPad.getTrimmedCanvas().toDataURL('image/png'));
  };

  const saveImage = () => {
    const url = `http://localhost:8000/api/orders/${orderId}`;
    Axios({
      method: 'put',
      url,
      headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
      data: {
        signature: sigPad.getTrimmedCanvas().toDataURL('image/png'),
        // orderId,
        status_id: 4
      }
    })
      .then(response => console.log(response.data))
      .catch(error => {
        console.log(error);
      });
  };

  // const setAsDone = () => {
  //   const url = `http://localhost:8000/api/orders/${orderId}`;
  //   Axios({
  //     method: 'put',
  //     url,
  //     data: { status_id: 4 }
  //   })
  //     .then(response => console.log(response.data))
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="signatureZoneContainer">
      <h1>Signez ci-dessous</h1>
      <div className="canvasContainer">
        {width > 1060 ? (
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 700, height: 600, className: 'sigCanvas' }}
            ref={ref => {
              setSigPad(ref);
            }}
          />
        ) : (
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 400, height: 300, className: 'sigCanvas' }}
            ref={ref => {
              setSigPad(ref);
            }}
          />
        )}
      </div>
      <div className="buttonsContainer">
        <button className="deleteButtonSignature" onClick={clear} type="button">
          Effacer
        </button>
        <Link
          to="/dashboard-pro"
          className="saveButtonSignature"
          onClick={async () => {
            trim();
            saveImage();
            // await setAsDone();
          }}
        >
          Sauvegarder
        </Link>
      </div>
      {signatureImage ? (
        <img
          className="signatureSave"
          src={signatureImage}
          alt="signature png"
        />
      ) : null}
    </div>
  );
};

export default SignatureZone;
