import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdminHeader({ icon, title }) {
    return (
        <>
            <header>
                <FontAwesomeIcon icon={icon} />
                <div className="title">
                    {title}
                </div>
            </header>
        </>
    )
}

export default AdminHeader
