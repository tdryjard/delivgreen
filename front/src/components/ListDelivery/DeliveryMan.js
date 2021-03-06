import React from 'react';

const DeliveryMan = ({ name, note }) => {
  return (
    <div className="delivery-container">
      <div className="delivery-header">
        <p className="name-style">{name}</p>
        <p className="note-style">{note}</p>
      </div>
      <div className="all-btn">
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
