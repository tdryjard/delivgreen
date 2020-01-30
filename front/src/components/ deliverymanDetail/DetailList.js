import React from 'react';
import './DetailDeliveryMan.css';
import DetailDeliveryMan from './DetailDeliveryMan';

const DetailList = () => {
  const detailDeliveryMan = [
    {
      state: 'Monsieur',
      last_name: 'Jarre',
      first_name: 'Lionel',
      mail: 'lionel.jarre@gmail.com',
      phone: '06.51.58.47.32',
      rib: '758 157 588 232 21',
      adress: 'Orléans',
      delivery_area: 'Orléans 20KM',
      type_delivery_guy: 'Particulier',
      type_vehicle: 'Véhicule thermique',
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
            last_name={detailDeliveryMan.last_name}
            first_name={detailDeliveryMan.first_name}
            mail={detailDeliveryMan.mail}
            phone={detailDeliveryMan.phone}
            rib={detailDeliveryMan.rib}
            adress={detailDeliveryMan.adress}
            delivery_area={detailDeliveryMan.delivery_area}
            type_delivery_guy={detailDeliveryMan.type_delivery_guy}
            type_vehicle={detailDeliveryMan.type_vehicle}
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
