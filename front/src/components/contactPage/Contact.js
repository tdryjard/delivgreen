import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="pageContact">
      <div className="FormContact">
        <h1>Contactez-nous !</h1>
        <form className="sign-form" action="">
          <input type="text" name="lastname" placeholder="Nom" />
          <input type="text" name="firstname" placeholder="Prénom" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="tel" placeholder="Téléphone" />
          <textarea
            className="messageContact"
            type="text"
            name="message"
            placeholder="Message"
          />
          <button type="submit" className="btn-send">
            Envoyer !
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
