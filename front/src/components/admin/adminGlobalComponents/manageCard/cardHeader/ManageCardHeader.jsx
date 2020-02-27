import React from 'react';
import './ManageCardHeader.css';

function ManageCardHeader({ dropDownState, sticky, children, title = null }) {
    return (
        <div className={`manage-card--min-info ${(dropDownState && sticky) ? 'sticky' : ''}`}>
            { title &&
                <div  className="manage-card--header-title">
                    {title}
                </div>
            }
            { children }
        </div>
    )
}

export default ManageCardHeader;
