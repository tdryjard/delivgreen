import React from 'react';
import './ClientArea.css';

const ClientArea = () => {
  return (
    <div className="clientAreaContainer">
      <div className="headerClientArea">
        <h1>Mon espace perso</h1>
        <h1 className="nouvelleCommandeBoutton">Nouvelle commande</h1>
      </div>
      <div className="commandesEnCoursContainer">
        <img
          className="logoLivreur"
          src="https://zupimages.net/up/20/04/1djh.png"
          alt="logo by Eucalyp"
        />
        <div className="commandesEnCours">
          <h2>$nb commandes en cours</h2>
          <p>Statut de la commande</p>
          <button type="button">Voir détails</button>
        </div>
      </div>
      <div className="commandesRealContainer">
        <img
          className="logoColis"
          src="https://zupimages.net/up/20/04/sv9t.png"
          alt="logo by Freepik"
        />
        <div className="commandesReal">
          <h1 className="nbCommandesRealTitle">$nb commandes réalisées</h1>
          <button type="button">Historique des commandes</button>
        </div>
      </div>
      <div className="infosContainer">
        <div className="myInformations">
          <img
            className="profileIcon"
            src="https://zupimages.net/up/20/04/e0jx.png"
            alt="logo by Those Icons"
          />
          <h1>Mes informations</h1>
          <label htmlFor="lastName">
            Prénom
            <div className="inputAndEdit">
              <input
                id="lastName"
                value="Jean"
                type="text"
                placeholder="Prénom"
              />
              <img
                className="editInfo"
                src="https://zupimages.net/up/20/04/51om.png"
                alt="edit information"
              />
            </div>
          </label>
          <label htmlFor="firstName">
            Nom
            <div className="inputAndEdit">
              <input
                id="firstName"
                value="Dutronc"
                type="text"
                placeholder="Prénom"
              />
              <img
                className="editInfo"
                src="https://zupimages.net/up/20/04/51om.png"
                alt="edit information"
              />
            </div>
          </label>
          <label htmlFor="phone">
            Numéro de téléphone
            <div className="inputAndEdit">
              <input
                id="phone"
                value="06 54 75 84 21"
                type="text"
                placeholder="Prénom"
              />
              <img
                className="editInfo"
                src="https://zupimages.net/up/20/04/51om.png"
                alt="edit information"
              />
            </div>
          </label>
          <label htmlFor="mail">
            E-mail
            <div className="inputAndEdit">
              <input
                id="mail"
                value="jean.dutronc@gmail.com"
                type="text"
                placeholder="Prénom"
              />
              <img
                className="editInfo"
                src="https://zupimages.net/up/20/04/51om.png"
                alt="edit information"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ClientArea;
