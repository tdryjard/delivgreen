import React, { useState, useEffect } from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarDashboard from './NavBarDashboard';
import HeaderDashboard from './HeaderDashboard';
import apiUrl from '../api/api';
import './InfosDashboard.css';

const InfosDashboard = () => {
  const [userInfo, setUserInfo] = useState({});
  const userId = 1;

  useEffect(() => {
    fetch(`${apiUrl}/api/users/infos/${userId}`)
      .then(res => res.json())
      .then(res => {
        setUserInfo(res[0]);
        console.log(res);
      });
  }, []);

  return (
    <div className="infosDashboardContainer">
      <NavBarDashboard />
      <div className="myInfosContentContainer">
        <HeaderDashboard />
        <div className="myInfosAndTitleContainer">
          <h1>Mes informations</h1>
          <div className="inputsContainerMyInfos">
            <p className="textInfo">{userInfo.firstname}</p>
            <p className="textInfo">{userInfo.lastname}</p>
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
