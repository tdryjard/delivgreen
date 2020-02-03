import React from 'react';

const SignatureZone = () => {
  return (
    <div>
      <h1>Canvas pour signature</h1>
      <div className="mise-en-page">
        <div className="bloc-mise-en-page">
          <h2>Signer</h2>
          <canvas id="canvas" />
        </div>
        <div className="bloc-mise-en-page">
          <h2>Capture de la signature</h2>
          <div id="capture" />
        </div>
      </div>
    </div>
  );
};

export default SignatureZone;
