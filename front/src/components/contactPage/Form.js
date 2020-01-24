import React from 'react';
import './contactPage.css';

const Form = () => {
  return (
    <div id="all">
      <div className="FormContact">
        <div className="title">Contactez-nous !</div>
        {/* ton nom */}
        <div className="select-wrapper">
          <div className="field"> Nom </div>
          <input className="textfeildGroup" type="text" />
        </div>
        {/* ton prenom */}

        <div className="select-wrapper">
          <div className="field">Prénom</div>
          <input className="textfeildGroup" type="text" />
        </div>
        {/* Email */}
        <div className="select-wrapper">
          <div className="field">Email</div>
          <input className="textfeild" type="text" />
        </div>
        {/* téléphone */}
        <div className="select-wrapper">
          <div className="field">Téléphone</div>
          <input className="textfeild" type="text" />
        </div>
        {/* message */}
        <div className="select-wrapper">
          <div className="field">Ton message</div>
          <input className="textarea" type="text" />
        </div>
        <input
          className="submit"
          type="submit"
          value="Envoyer !"
          placeholder="Envoyer !"
        />
      </div>
    </div>
  );
};

export default Form;
