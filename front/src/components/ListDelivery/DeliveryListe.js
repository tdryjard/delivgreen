import React from 'react';
import './DeliveryMan.css';
import DeliveryMan from './DeliveryMan';

const DeliveryListe = () => {
  const DeliveryMans = [
    {
      name: 'Kylian Mbappé',
      note: '4/5'
    },
    {
      name: 'Mauro Icardi',
      note: '3.3/5'
    },
    {
      name: 'Edinson Cavani',
      note: '2.5/5'
    },
    {
      name: 'Keylor Navas',
      note: '1/5'
    },
    {
      name: 'Angel Di Maria',
      note: '3/5'
    }
  ];

  return (
    <div className="content-delivery">
      <div className="title">Liste des livreurs</div>
      <div className="delivery-box">
        {DeliveryMans.map(deliveryMan => (
          <DeliveryMan name={deliveryMan.name} note={deliveryMan.note} />
        ))}
      </div>
    </div>
  );
};

export default DeliveryListe;
