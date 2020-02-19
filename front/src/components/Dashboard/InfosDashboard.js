import React, { useState, useEffect } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBarDashboard from './NavBarDashboard';
import HeaderDashboard from './HeaderDashboard';

import useWindowDimensions from './useWindowDimensions';
import NavBarDashboardMobile from './NavBarDashboardMobile';
import apiUrl from '../api/api';
import './InfosDashboard.css';

const InfosDashboard = () => {
  const { width } = useWindowDimensions();
  const [toggleNavBarMobile, setToggleNavBarMobile] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [role] = useState('pro');
  const userId = 5;

  useEffect(() => {
    fetch(`${apiUrl}/api/users/infos/${role}/${userId}`)
      .then(res => res.json())
      .then(res => {
        setUserInfo(res[0]);
      });
  }, []);

  return (
    <div className="infosDashboardContainer">
      {width > 1060 ? <NavBarDashboard /> : null}

      {toggleNavBarMobile ? (
        <NavBarDashboardMobile
          setToggleNavbar={setToggleNavBarMobile}
          toggleNavbar={toggleNavBarMobile}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="fa-2x burgerMenuIconDashboard"
          onClick={() => setToggleNavBarMobile(true)}
        />
      )}
      <div className="dashboardBody">
        <div className="headerDashboardOrders">
          <HeaderDashboard />
        </div>
        <div className="myInfosContentContainer">
          <div className="myInfosAndTitleContainer">
            <h1>Mes informations</h1>
            <div className="contentNameInfo">
              <p className="textNameInfo">{userInfo.firstname}</p>
              <p className="textNameInfo">{userInfo.lastname}</p>
            </div>
            <div className="inputsContainerMyInfos">
              <div className="containerNameInput">
                <p className="nameInput">Email</p>
                <p className="nameInput">Téléphone</p>
                {role === 'deliv' ||
                  (role === 'pro' && (
                    <div className="containerNameInput">
                      <p className="nameInput">address</p>
                      <p className="nameInput">Perimètre</p>
                      <p className="nameInput">Rib</p>
                    </div>
                  ))}
                {role === 'pro' && (
                  <div className="containerNameInput">
                    <p className="nameInput">Kbis</p>
                    <p className="nameInput">Siret</p>
                    <p className="nameInput">TVA</p>
                  </div>
                )}
              </div>

              <div className="containerInput">
                <p className="inputStyle">{userInfo.email}</p>
                <p className="inputStyle">{userInfo.phone}</p>
                {role === 'deliv' ||
                  (role === 'pro' && (
                    <div className="containerNameInput">
                      <p className="inputStyle">{userInfo.address}</p>
                      <p className="inputStyle">{userInfo.perimeter}</p>
                      <p className="inputStyle">{userInfo.rib}</p>
                    </div>
                  ))}
                {role === 'pro' && (
                  <div className="containerNameInput">
                    <p className="inputStyle">{userInfo.kbis}</p>
                    <p className="inputStyle">{userInfo.siret}</p>
                    <p className="inputStyle">{userInfo.tva}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfosDashboard;
