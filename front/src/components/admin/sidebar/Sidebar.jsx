import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom'; 
import './Sidebar.css';

function Sidebar() {

	const sidebarRef = useRef(null);

	const bringSidebar = function () {
		sidebarRef.current.classList.toggle('open');
		sidebarRef.current.children[0].classList.toggle('fa-bars');
		sidebarRef.current.children[0].classList.toggle('fa-times-circle');
	}

	return (
		<div ref={sidebarRef} className="sidebar-ctn">
			<i className="fas fa-bars fa-2x icon" onClick={bringSidebar}></i>
			<div className="sidebar-content">
				<ul className="sidebar-content-list" onClick={bringSidebar}>
					<NavLink to="/admin/adhesion" activeClassName="active-link">
						<li>Demandes adhésion</li>
					</NavLink>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar;
