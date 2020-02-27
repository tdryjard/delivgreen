import React from 'react';
import ManageButton from '../ManageButton';
import { faTrash, faCaretDown, faCaretUp, faCheck, faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import './ManageButtonContainer';

function ManageButtonContainer({ children, create, erase, update, accept, more = false }) {
    const { showMoreInfo, setShowMoreInfo } = more;
    return (
        <div className="manage-btn-ctn">
            { children }
            { create && <ManageButton icon={faPlus} className="create-btn" /> }
            { update && <ManageButton icon={faPen} className="update-btn" /> }
            { accept && <ManageButton icon={faCheck} className="accept-btn" /> }
            { erase && <ManageButton icon={faTrash} className="delete-btn" /> }
            { more && <ManageButton icon={showMoreInfo ? faCaretUp : faCaretDown} onClick={() => setShowMoreInfo(!showMoreInfo)} /> }
        </div>
    )
}

export default ManageButtonContainer;
