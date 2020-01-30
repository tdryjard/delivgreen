import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HeaderDashboard.css';

const HeaderDashboard = () => {
  return (
    <div className="headerDashboard">
      <div className="topHeaderBarMySpace">
        <div className="backToHome">
          <p className="backToHomeText">Accueil</p>
          <FontAwesomeIcon className="fas fa-2x fa-home" icon={faHome} />
        </div>
        <div className="getHelpDashboardContainer">
          <p className="needHelpText">Besoin d'aide </p>
          <p className="getHelpDashboard">?</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
