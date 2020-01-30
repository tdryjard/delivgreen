import React, { useState } from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DashboardPro.css';
import NavBarDashboard from './NavBarDashboard';
import Chart from './Chart';
import useWindowDimensions from './useWindowDimensions';
import NavBarDashboardMobile from './NavBarDashboardMobile';

const DashboardPro = () => {
  const { height, width } = useWindowDimensions();
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(false);
  return (
    <div className="mySpaceMainContainer">
      {/*                   Pro Nav Bar                   */}
      {width > 1060 ? <NavBarDashboard /> : null}
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
            <div className="backToHome">
              <p className="backToHomeText">Accueil</p>
              <FontAwesomeIcon
                style={{ color: '#17B994' }}
                className="fas fa-2x"
                icon={faHome}
              />
            </div>
            <div className="getHelpDashboardContainer">
              <p className="needHelpText">Besoin d'aide </p>
              <p className="getHelpDashboard">?</p>
            </div>
          </div>

          {/*           Stats of the dashboard            */}

          <div className="doubleCardHeaderDashboard">
            <div className="cardHeaderDashboard">
              <div className="containerInCardDashboard">
                <p className="titleStatsCardDashboard">Commandes réalisées</p>
                <p className="nbCommandesReal">76</p>
              </div>
            </div>
            <div className="cardHeaderDashboard">
              <div className="containerInCardDashboard">
                <p className="titleStatsCardDashboard">Revenus générés</p>
                <p className="subtitleStatsCardDashboard">ce mois</p>
                <p className="generatedCash">340,3€</p>
              </div>
            </div>
            <div className="cardHeaderDashboard">
              <div className="containerInCardDashboard">
                <p className="titleStatsCardDashboard">Nouvelles commandes</p>
                <p className="subtitleStatsCardDashboard">ce mois</p>
                <p className="percentPlus">+67%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bodyMySpaceContainer">
          {/*          Chart section               */}

          <div className="cardBodyMySpace1">
            <h1>Livraisons réalisées depuis le 27.01.2020</h1>
            <Chart width={width} height={height} />
          </div>

          {/*           Announces waiting           */}

          <div className="cardBodyMySpace2">
            <h1>Annonces en attente</h1>
            <div className="announceContainerDashboard">
              <div className="announceDashboard">
                <p className="detailsAnnounceDashboard">
                  Orléans / Chateauroux
                </p>
                <p className="detailsAnnounceDashboard">
                  Date limite: 04/02/2020
                </p>
                <p className="detailsAnnounceDashboard">Commission: 8,50€</p>
              </div>
              <p className="moreDetailsButton">Détails</p>
            </div>

            {/*         Attempting announces          */}

            <div className="announceContainerDashboard">
              <div className="announceDashboard">
                <p className="detailsAnnounceDashboard">Orléans / Olivet</p>
                <p className="detailsAnnounceDashboard">
                  Date limite: 07/02/2020
                </p>
                <p className="detailsAnnounceDashboard">Commission: 6,50€</p>
              </div>
              <p className="moreDetailsButton">Détails</p>
            </div>
            <div className="announceContainerDashboard">
              <div className="announceDashboard">
                <p className="detailsAnnounceDashboard">Orléans / Olivet</p>
                <p className="detailsAnnounceDashboard">
                  Date limite: 07/02/2020
                </p>
                <p className="detailsAnnounceDashboard">Commission: 6,50€</p>
              </div>
              <p className="moreDetailsButton">Détails</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPro;
