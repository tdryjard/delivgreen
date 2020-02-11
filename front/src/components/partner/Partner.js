import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Partner.css';

const Partner = () => {
  return (
    <div className="partner-container">
      <NavBar />
      <div className="headband">
        <div className="container-headband">
          Devenir partenaire chez Deliv'green
        </div>
      </div>

      <div className="steps">
        <div className="steps-title">En 3 étapes</div>
      </div>
      <div className="the-logos">
        <div className="logo-1" />
        <div className="logo-2" />
        <div className="logo-3" />
      </div>

      <div className="delivery-part">
        <div className="delivery-title">Livrer avec Déliv'Green</div>
        <div className="first-part">
          <div className="image-1" />
          <div className="text-part-1">
            <div className="title-image-1">
              <Link to="/adhesion">Pourquoi devenir particulier ?</Link>
            </div>
            <div className="text-image-1">
              Grâce a Deliv'green vous pouvez faire autant de mission que vous
              souhaitez
            </div>
          </div>
        </div>
        <div className="second-part">
          <div className="image-2" />
        </div>
        <div className="text-part-2">
          <div className="title-image-2">
            <Link to="/adhesion">Pourquoi devenir coursier ?</Link>
          </div>
          <div className="text-image-2">
            Exercez comme prestataire de service! Travaillez à votre rythme
          </div>
        </div>

        <div className="third-part">
          <div className="image-3" />
        </div>
        <div className="text-part-3">
          <div className="title-image-3">
            <Link to="/adhesion">Pourquoi devenir transporteur ?</Link>
          </div>
          <div className="text-image-3">
            A vous de transporter et de livrer les colis des clients!
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partner;
