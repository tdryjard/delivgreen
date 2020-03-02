import React, { useState, useEffect } from 'react';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import AnnouncementCard from './announcementCard/AnnouncementCard';
import AdminHeader from '../adminHeader/AdminHeader';
import apiUrl from '../../api/api';
import './Announcement.css';

function Announcement() {

    const [announces, setAnnounces] = useState([]);
    const [noAnnounceError, setNoAnnounceError] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(apiUrl + '/api/admin/announces');
            const jsonResponse = await response.json();
            const { data, message } = jsonResponse;

            if (data) {
                setAnnounces(data)
                return;
            }
        })();
    }, []);

    // Fonction passée à <AnnounceCard /> 
    const removeAnnounceFromState = function deleteTheSelectedAnnounce (id) {  
        setAnnounces(
            announces.filter(announce => announce.id !== id)
        );
    }

    return (
        <div className="announcement-ctn">
            <AdminHeader icon={faBook} title="Liste des annonces" />
            <div className="announcement-card-ctn">
                { announces.length ?
                    announces.map((announce, i) => <AnnouncementCard 
                                                        key={i} 
                                                        {...announce} 
                                                        removeAnnounce={() => removeAnnounceFromState(announce.id)} 
                    />) : <div className="admin-no-content-message">Aucune Annonce</div>
                }
            </div>
        </div>
    );
}

export default Announcement;
