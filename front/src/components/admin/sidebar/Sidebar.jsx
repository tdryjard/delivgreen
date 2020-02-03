import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { faIdCard, faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Sidebar.css';

function Sidebar() {

	const [sidebarOpened, setSidebarOpened] = useState(false);

	const bringSidebar = function () {
		setSidebarOpened(!sidebarOpened);
	}

	return (
		<>
			<FontAwesomeIcon className="icon" size="2x" icon={sidebarOpened ? faTimesCircle : faBars} onClick={bringSidebar}/>
			<div className={`sidebar-ctn ${sidebarOpened ? 'open' : ''}`}>
				<div className="sidebar-content">
					<ul className="sidebar-content-list" onClick={bringSidebar}>
						<NavLink to="/admin/adhesion" activeClassName="active-link" className="sidebar-link">
							<FontAwesomeIcon icon={faIdCard} />
							<li>Demandes adhésion</li>
						</NavLink>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Sidebar;
