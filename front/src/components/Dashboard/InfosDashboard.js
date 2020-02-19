import React from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarDashboard from './NavBarDashboard';
import HeaderDashboard from './HeaderDashboard';
import './InfosDashboard.css';

const InfosDashboard = () => {
  return (
    <div className="infosDashboardContainer">
      <NavBarDashboard />
      <div className="myInfosContentContainer">
        <HeaderDashboard />
        <div className="myInfosAndTitleContainer">
          <h1>Mes informations</h1>
          <div className="inputsContainerMyInfos">
            <label className="inputLabelDashboard" htmlFor="lastName">
              Nom
              <input
                className="inputMyInfosDashboard"
                id="lastName"
                type="text"
                value="Dubois"
              />
            </label>
            <label className="inputLabelDashboard" htmlFor="firstName">
              Prénom
              <input
                className="inputMyInfosDashboard"
                id="firstName"
                type="text"
                value="Franck"
              />
            </label>
            <label className="inputLabelDashboard" htmlFor="eMail">
              Email
              <input
                className="inputMyInfosDashboard"
                id="eMail"
                type="email"
                value="franckdubois@gmail.com"
              />
              <FontAwesomeIcon className="far editIcon fa-2x" icon={faEdit} />
            </label>
            <label className="inputLabelDashboard" htmlFor="phone">
              Téléphone
              <input
                className="inputMyInfosDashboard"
                id="phone"
                type="tel"
                value="06 51 78 52 48"
              />
              <FontAwesomeIcon className="far editIcon fa-2x" icon={faEdit} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfosDashboard;
