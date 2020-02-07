import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import NavBarDashboardMobile from './NavBarDashboardMobile';
import useWindowDimensions from './useWindowDimensions';
import NavBarDashboardClient from './NavBarDashboardClient';
import './DashboardClient.css';

const DashboardClient = () => {
  const { width } = useWindowDimensions();
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(false);

  return (
    <div className="mySpaceMainContainer">
      {/*                   Pro Nav Bar                   */}
      {width > 1060 ? <NavBarDashboardClient /> : null}
      {width < 1060 ? (
        <NavBarDashboardMobile
          setToggleNavbar={setToggleNavBarMobile}
          toggleNavbar={toggleNavBarMobile}
        />
      ) : null}
      {/*                 Else Client Nav bar              */}
      <div className="dashboardBody">
        <div className="headerDashboard">
          {/*         Icons in the top of the dashboard       */}

          <div className="topHeaderBarMySpace">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="backToHome">
                <p className="backToHomeText">Accueil</p>
                <FontAwesomeIcon
                  style={{ color: '#17B994' }}
                  className="fas fa-2x"
                  icon={faHome}
                />
              </div>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <div className="getHelpDashboardContainer">
                <p className="needHelpText">Besoin d'aide </p>
                <p className="getHelpDashboard">?</p>
              </div>
            </Link>
          </div>

          {/*           Stats of the dashboard            */}

          <div className="doubleCardHeaderDashboard">
            <div className="cardHeaderDashboard">
              <div className="containerInCardDashboard">
                <p className="titleStatsCardDashboard">Commandes en cours</p>
                <p className="nbCommandesReal">4</p>
              </div>
            </div>
            <div className="cardHeaderDashboard">
              <div className="containerInCardDashboard">
                <p className="titleStatsCardDashboard">Nombre de commandes</p>
                <p className="generatedCash">23</p>
              </div>
            </div>
            <div className="cardHeaderDashboard">
              <div className="containerInCardDashboard">
                <p className="titleStatsCardDashboard">Nouvelle commande</p>
                <h1>+ button</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bodyMySpaceContainer">
          {/*          Chart section               */}

          <div className="cardBodyMySpace1">
            <h1>Commandes en cours</h1>
            <p>
              Commande n°1562 à destination: Tours. Statut: Pris en charge par
              le livreur. Livraison éstimée le 27/02/2020.
            </p>
            <p>
              Commande n°1542 à destination: Narbonne. Statut: En attente
              d'acceptation. Livraison éstimée le 27/02/2020.
            </p>
            <p>
              Commande n°1585 à destination: Nantes. Statut: Accepté. Livraison
              éstimée le 27/02/2020.
            </p>
            <p>
              Commande n°1624 à destination: Paris. Statut: Pris en charge par
              le livreur. Livraison éstimée le 27/02/2020.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
