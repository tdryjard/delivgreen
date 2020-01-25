import React from 'react';
import './contactPage.css';

const Form = () => {
  return (
    <div className="FormContact">
      <h1>Contactez-nous !</h1>
      <form className="sign-form" action="">
        <input type="text" name="lastname" placeholder="Nom" />
        <input type="text" name="firstname" placeholder="Prénom" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="tel" placeholder="Téléphone" />
        <textarea
          className="messageContact"
          type="text"
          name="message"
          placeholder="Message"
        />
        <button type="submit" className="btn">
          Envoyer !
        </button>
      </form>
    </div>
  );
};

export default Form;
