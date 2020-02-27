import React from 'react';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import AnnouncementCard from './announcementCard/AnnouncementCard';
import AdminHeader from '../adminHeader/AdminHeader';
import './Announcement.css';

function Announcement() {

    return (
        <div className="announcement-ctn">
            <AdminHeader icon={faBook} title="Liste des annonces" />
            <div className="announcement-card-ctn">
            </div>
        </div>
    )
}

export default Announcement;
