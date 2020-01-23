import React from 'react';
import './contactPage.css';

const Form = () => {
  return (
    <div className="FormContact">
      <div className="title">Contactez-nous !</div>
      {/* ton nom */}
      <div className="select-wrapper">
        <div className="label"> Nom </div>
        <input className="textfeildGroup" type="text" />
      </div>
      {/* ton prenom */}

      <div className="select-wrapper">
        <div className="label">Prénom</div>
        <input className="textfeildGroup" type="text" />
      </div>
      {/* Email */}
      <div className="select-wrapper">
        <div className="label">Email</div>
        <input className="textfeild" type="text" />
      </div>
      {/* téléphone */}
      <div className="select-wrapper">
        <div className="label">Téléphone</div>
        <input className="textfeild" type="text" />
      </div>
      {/* message */}
      <div className="select-wrapper">
        <div className="label">Ton message</div>
        <input className="textarea" type="text" />
      </div>
      <input
        className="submit"
        type="submit"
        value="Envoyer !"
        placeholder="Envoyer !"
      />
    </div>
  );
};

export default Form;
