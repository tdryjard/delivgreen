import React, { useState, useEffect } from 'react';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import AnnouncementCard from './announcementCard/AnnouncementCard';
import AdminHeader from '../adminHeader/AdminHeader';
import apiUrl from '../../api/api';
import './Announcement.css';

function Announcement() {

    const [announces, setAnnounces] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(apiUrl + '/api/admin/announces');
            const jsonResponse = await response.json();
            const { data } = jsonResponse;
            if (data)
                setAnnounces(data)
        })();
    }, [])

    return (
        <div className="announcement-ctn">
            <AdminHeader icon={faBook} title="Liste des annonces" />
            <div className="announcement-card-ctn">
                { announces.length ?
                    announces.map((announce, i) => <AnnouncementCard key={i} {...announce} />)
                    :
                    <div className="admin-no-content-message">Pas d'annonce</div>
                }
            </div>
        </div>
    )
}

export default Announcement;
