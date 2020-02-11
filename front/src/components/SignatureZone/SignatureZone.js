import React, { useState } from 'react';
import './SignatureZone.css';
import SignatureCanvas from 'react-signature-canvas';
import useWindowDimensions from '../Dashboard/useWindowDimensions';

const SignatureZone = () => {
  const [signatureImage, setSignatureImage] = useState(null);
  const { width } = useWindowDimensions();
  const [sigPad, setSigPad] = useState({});

  const clear = () => {
    setSigPad(sigPad.clear);
  };

  const trim = () => {
    setSignatureImage(sigPad.getTrimmedCanvas().toDataURL('image/png'));
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
      <button onClick={clear} type="button">
        Effacer
      </button>
      <button onClick={trim} type="button">
        Sauvegarder
      </button>
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
