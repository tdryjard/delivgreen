import React, { useRef } from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, title  } from './AlertPopupUtils';
import './AlertPopup.css';

function AlertPopup({ type = 'neutral', text, vertical = 'top', horizontal = 'right', from = 'vertical' }) {
    const popupContainer = useRef(null);

    return (
        <div 
            className={`alert-popup ${type} ${vertical} ${horizontal} from-${from}-side`} 
            onAnimationEnd={(e) => e.target.remove()}
            ref={popupContainer}
        >
            { icon(type) }
            <span className="text">
                {title(type)}
                {text}
            </span>
            <FontAwesomeIcon icon={faTimes} className="popup-close" onClick={() => { popupContainer.current.remove() }} />
        </div>
    )
}

export default AlertPopup;
