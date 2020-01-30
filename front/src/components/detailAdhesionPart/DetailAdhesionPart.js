import React from 'react';

const DetailAdhesionPart = ({
  state,
  lastName,
  firstName,
  mail,
  phone,
  rib,
  id,
  adress,
  deliveryArea,
  typeDeliveryGuy,
  typeVehicle
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
        {firstName}
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
      <p className="id-style">
        <p className="the_id">Pièce d'identité: </p>
        {id}
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
      <div className="the-btn">
        <button type="submit" className="validation-cmd">
          Valider demande
        </button>
        <button type="submit" className="refuse-cmd">
          Refuser demande
        </button>
      </div>
    </div>
  );
};

export default DetailAdhesionPart;
