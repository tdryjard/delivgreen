import React from 'react';

const DeliveryMan = ({ name, note }) => {
  return (
    <div className="delivery-container">
      <div className="delivery-header">
        <p className="nameStyle">{name}</p>
        <p className="noteStyle">{note}</p>
      </div>
      <div className="Allbtn">
        <button type="button" className="btn">
          Supprimer compte
        </button>
        <button type="button" className="btn">
          Détails
        </button>
      </div>
    </div>
  );
};

export default DeliveryMan;
