import React from 'react';
import './ManageCard.css';

function ManageCard({ children, className = '' }) {
    return (
        <div className={`manage-card ${className}`}>
            { children }
        </div>
    )
}

export default ManageCard
