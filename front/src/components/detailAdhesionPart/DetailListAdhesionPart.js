import React from 'react';
import './AdhesionPart.css';
import DetailAdhesionPart from './DetailAdhesionPart';

const DetailListAdhesionPart = () => {
  const detailAdhesionPart = [
    {
      state: 'Monsieur',
      lastName: 'Jarre',
      firstName: 'Lionel',
      mail: 'lionel.jarre@gmail.com',
      phone: '06.51.58.47.32',
      rib: '758 157 588 232 21',
      id: 'Afficher',
      adress: 'Orléans',
      deliveryArea: 'Orléans 20KM',
      typeDeliveryGuy: 'Particulier',
      typeVehicle: 'Véhicule thermique'
    }
  ];

  return (
    <div className="content-delivery">
      <div className="title">Détail de l'adhésion du partiulier</div>
      <div className="delivery-box">
        {detailAdhesionPart.map(detailAdhesionPart => (
          <DetailAdhesionPart
            state={detailAdhesionPart.state}
            lastName={detailAdhesionPart.lastName}
            firstName={detailAdhesionPart.firstName}
            mail={detailAdhesionPart.mail}
            phone={detailAdhesionPart.phone}
            rib={detailAdhesionPart.rib}
            id={detailAdhesionPart.id}
            adress={detailAdhesionPart.adress}
            deliveryArea={detailAdhesionPart.deliveryArea}
            typeDeliveryGuy={detailAdhesionPart.typeDeliveryGuy}
            typeVehicle={detailAdhesionPart.typeVehicle}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailListAdhesionPart;
