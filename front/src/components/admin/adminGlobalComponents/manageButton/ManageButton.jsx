import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ManageButton.css';

function ManageButton({ icon = null, text = null, className = null, onClick }) {
    return (
        <>
            <button className={`manage-btn ${className}`} onClick={onClick}>
                { icon ? <FontAwesomeIcon icon={icon} /> : text }
            </button>
        </>
    )
}

export default ManageButton;
