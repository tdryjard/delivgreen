import React from 'react';
import {
  faExclamationCircle,
  faCheckCircle,
  faInfo
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getIcon = function getIconFromType(type) {
  switch (type) {
    case 'info':
      return faInfo;
    case 'success':
      return faCheckCircle;
    case 'error':
      return faExclamationCircle;
    default:
      return faInfo;
  }
};

const getTitle = function getTitleFromType(type) {
  switch (type) {
    case 'info':
      return 'Info';
    case 'success':
      return 'Succès !';
    case 'error':
      return 'Erreur !';
    default:
      return 'Info';
  }
};

export function icon(type) {
  return <FontAwesomeIcon icon={getIcon(type)} size="2x" />;
}

export function title(type) {
  return <div className="popup-title">{getTitle(type)}</div>;
}
