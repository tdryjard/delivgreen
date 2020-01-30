import React from 'react';
import './HeaderDashboard.css';

const HeaderDashboard = () => {
  return (
    <div className="headerDashboard">
      <div className="topHeaderBarMySpace">
        <div className="backToHome">
          <p className="backToHomeText">Accueil</p>
          <i className="fas fa-2x fa-home" />
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
