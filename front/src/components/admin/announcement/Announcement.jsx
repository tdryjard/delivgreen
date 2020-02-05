import React from 'react';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnnouncementCard from './announcementCard/AnnouncementCard';
import './Announcement.css';

function Announcement() {

    const announceInfo = {
        lastname: "PROVOT",
        firstname: "Alexis",
        deliveryID: "52135645",
        telephone: "06 78 95 48 21",
        startingPoint: "15 rue des Poupola 45000 Orleans",
        endingPoint: "1 rue du Nirile 45000 Orleans",
        limitDate: "25/06/2020 à 13h50"
    }

    return (
        <div className="announcement-ctn">
            <header>
                <FontAwesomeIcon icon={faBook} />
                <div className="title">
                    Liste des annonces
                </div>
            </header>
            <div className="annoucement-card-ctn">
                <AnnouncementCard {...announceInfo} />
                <AnnouncementCard {...announceInfo} />
            </div>
        </div>
    )
}

export default Announcement;
