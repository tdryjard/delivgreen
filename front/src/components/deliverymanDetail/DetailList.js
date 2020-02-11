import React from 'react';
import './DetailDeliveryMan.css';
import DetailDeliveryMan from './DetailDeliveryMan';

const DetailList = () => {
  const detailDeliveryMan = [
    {
      state: 'Monsieur',
      lastName: 'Jarre',
      firstName: 'Lionel',
      mail: 'lionel.jarre@gmail.com',
      phone: '06.51.58.47.32',
      rib: '758 157 588 232 21',
      adress: 'Orléans',
      deliveryArea: 'Orléans 20KM',
      typeDeliveryGuy: 'Particulier',
      typeVehicle: 'Véhicule thermique',
      tva: 'F548 4584',
      siret: 'F548 4584',
      kib: 'afficher'
    }
  ];

  return (
    <div className="content-delivery">
      <div className="title">Détail du livreur</div>
      <div className="delivery-box">
        {detailDeliveryMan.map(detailDeliveryMan => (
          <DetailDeliveryMan
            state={detailDeliveryMan.state}
            lastName={detailDeliveryMan.lastName}
            firstName={detailDeliveryMan.firstName}
            mail={detailDeliveryMan.mail}
            phone={detailDeliveryMan.phone}
            rib={detailDeliveryMan.rib}
            adress={detailDeliveryMan.adress}
            deliveryArea={detailDeliveryMan.deliveryArea}
            typeDeliveryguy={detailDeliveryMan.typeDeliveryGuy}
            typeVehicle={detailDeliveryMan.typeVehicle}
            tva={detailDeliveryMan.tva}
            siret={detailDeliveryMan.siret}
            kib={detailDeliveryMan.kib}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailList;
