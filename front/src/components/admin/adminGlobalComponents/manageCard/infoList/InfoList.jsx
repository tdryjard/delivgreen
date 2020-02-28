import React from 'react';
import './InfoList.css';

function InfoList({ moreInfo = true, children, className = '' }) {
    return (
        <div className={`manage-card--info-list ${moreInfo} ${className}`}>
            { children }
        </div>
    )
}

export default InfoList;
