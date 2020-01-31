import React from 'react';

const DetailDeliveryMan = ({
  state,
  lastName,
  fistName,
  mail,
  phone,
  rib,
  adress,
  deliveryArea,
  typeDeliveryGuy,
  typeVehicle,
  tva,
  siret,
  kib
}) => {
  return (
    <div className="delivery-container">
      <p className="state-style">
        <p className="the_state">Etat civile: </p>
        {state}
      </p>
      <p className="last_name-style">
        <p className="the_last_name">Nom: </p>
        {lastName}
      </p>
      <p className="first_name-style">
        <p className="the_first_name">Prénom: </p>
        {fistName}
      </p>
      <p className="mail-style">
        <p className="the_mail">Email: </p>
        {mail}
      </p>
      <p className="phone-style">
        <p className="the_phone">Téléphone: </p>
        {phone}
      </p>
      <p className="rib-style">
        <p className="the_rib">RIB: </p>
        {rib}
      </p>
      <p className="adress-style">
        <p className="the_adress">Adresse: </p>
        {adress}
      </p>
      <p className="delivery_area-style">
        <p className="the_delivery_area">Zone de livraison: </p>
        {deliveryArea}
      </p>
      <p className="type_delivery_guy-style">
        <p className="the_type_delivery_guy">Type de livreur: </p>
        {typeDeliveryGuy}
      </p>
      <p className="type_vehicle-style">
        <p className="the_type_vehicle">Type de véhicule: </p>
        {typeVehicle}
      </p>
      <p className="tva-style">
        <p className="the_tva">TVA: </p>
        {tva}
      </p>
      <p className="siret-style">
        <p className="the_siret">Siret: </p>
        {siret}
      </p>
      <p className="kib-style">
        <p className="the_kib">KIB: </p>
        {kib}
      </p>
    </div>
  );
};

export default DetailDeliveryMan;
