import React from 'react';
import './BecomeDelivery.css';

const BecomeDelivery = () => {
  return (
    <div className="becomeContainer">
      <div className="becomePartnairContainer">
        <h2 style={{ margin: 0 }}>Devenir partenaire DelivGreen ?</h2>
        <h2>Les étapes</h2>
        <div className="containerAdhesion">
          <img
            className="logoPartenaire"
            src="https://zupimages.net/up/20/04/77dv.png"
            alt="logo by Eucalyp"
          />
          <h1>Demande d'adhésion</h1>
        </div>
        <div className="containerChoice">
          <img
            className="logoChoice"
            src="https://zupimages.net/up/20/04/x3o3.png"
            alt="logo by Freepik"
          />
          <h1>Je choisis les courses qui me conviennent</h1>
        </div>
        <div className="containerSalary">
          <img
            className="logoSalary"
            src="https://zupimages.net/up/20/04/21dg.png"
            alt="logo by Pixel Peeker"
          />
          <h1>Je livre la commande et je reçois mon salaire</h1>
        </div>
      </div>
      <h1>Devenir livreur DelivGreen</h1>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default BecomeDelivery;
