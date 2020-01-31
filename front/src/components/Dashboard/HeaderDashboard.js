import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HeaderDashboard.css';
import { Link } from 'react-router-dom';

const HeaderDashboard = () => {
  return (
    <div className="headerDashboard">
      <div className="topHeaderBarMySpace">
        <Link to="/">
          <div className="backToHome">
            <p className="backToHomeText">Accueil</p>
            <FontAwesomeIcon className="fas fa-2x fa-home" icon={faHome} />
          </div>
        </Link>
        <Link to="/contact">
          <div className="getHelpDashboardContainer">
            <p className="needHelpText">Besoin d'aide </p>
            <p className="getHelpDashboard">?</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderDashboard;
