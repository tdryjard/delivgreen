import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="pageContact">
      <Navbar />
      <div className="FormContact">
        <div className="contact_logo">
          <img
            src={require('../contactPage/images/contact.svg')}
            alt="contact logo"
          />
          <h1>Contactez-nous !</h1>
        </div>
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
          <button type="submit" className="btn">
            Envoyer !
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
