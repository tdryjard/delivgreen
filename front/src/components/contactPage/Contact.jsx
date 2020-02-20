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
          <label>
            Nom: 
            <input type="text" name="lastname" />
          </label>
          
          <label>
            Prénom: 
            <input type="text" name="firstname" />
          </label>
          
          <label>
            Email: 
            <input type="email" name="email" />
          </label>
          
          <label>
            Téléphone: 
            <input type="tel" name="tel" />
          </label>
         
         <label>
           Votre message: 
           <textarea
            className="messageContact"
            type="text"
            name="message"
          />
         </label>
          
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
