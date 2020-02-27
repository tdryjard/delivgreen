import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './AdminHeader.css';

function AdminHeader({ icon, title }) {
    return (
        <>
            <header className="admin-content-header">
                <FontAwesomeIcon icon={icon} />
                <div className="title">
                    {title}
                </div>
            </header>
        </>
    )
}

export default AdminHeader
