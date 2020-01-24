import React from 'react';
import './BecomeDelivery.css';
import NavBar from '../NavBar/NavBar';

const BecomeDelivery = () => {
  return (
    <div className="becomeContainer">
      <NavBar />
      <h1 style={{ margin: '15px' }}>Devenir partenaire DelivGreen ?</h1>
      <h1>3 étapes :</h1>
      <div className="containerAdhesion">
        <img
          className="logoPartenaire"
          src="https://zupimages.net/up/20/04/77dv.png"
          alt="logo by Eucalyp"
        />
        <h3 className="titleSteps">Demande d'adhésion</h3>
      </div>
      <div className="containerChoice">
        <img
          className="logoChoice"
          src="https://zupimages.net/up/20/04/x3o3.png"
          alt="logo by Freepik"
        />
        <h3 className="titleSteps">
          Je choisis les courses qui me conviennent
        </h3>
      </div>
      <div className="containerSalary">
        <img
          className="logoSalary"
          src="https://zupimages.net/up/20/04/21dg.png"
          alt="logo by Pixel Peeker"
        />
        <h3 className="titleSteps">
          Je livre la commande et je reçois mon salaire
        </h3>
      </div>
      <h1>Devenir livreur DelivGreen</h1>
      <div className="liensImagesDelivery">
        <div className="particulierVelo">
          <h1 style={{ margin: 0 }}>Particulier</h1>
        </div>
        <div className="coursierScooter">
          <h1>Coursier</h1>
        </div>
        <div className="transporteurCamion">
          <h1>Transporteur</h1>
        </div>
      </div>
    </div>
  );
};

export default BecomeDelivery;
