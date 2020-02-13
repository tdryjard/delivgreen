import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import './SignatureZone.css';
import SignatureCanvas from 'react-signature-canvas';
import Axios from 'axios';
import useWindowDimensions from '../Dashboard/useWindowDimensions';

const SignatureZone = () => {
  const { width } = useWindowDimensions();
  const [sigPad, setSigPad] = useState({});

  const clear = () => {
    setSigPad(sigPad.clear);
  };

  const testToSaveImage = () => {
    const url = 'http://localhost:8000/api/signature';
    Axios({
      method: 'post',
      url,
      data: { image: sigPad.getTrimmedCanvas().toDataURL('image/png') }
    })
      .then(response => console.log(response))
      .catch(error => {
        console.log(error);
      });
  };

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
      <div className="buttonContainerSignature">
        <button
          className="buttonSignature clearButtonSignature"
          onClick={clear}
          type="button"
        >
          <FontAwesomeIcon icon={faTrash} />
          Effacer
        </button>
        <button
          className="buttonSignature saveButtonSignature"
          onClick={testToSaveImage}
          type="button"
        >
          <FontAwesomeIcon icon={faCheckCircle} />
          Sauvegarder
        </button>
      </div>
    </div>
  );
};

export default SignatureZone;
