import React from 'react';
import './TeamNameEntryPage.scss';
// import { useHistory } from "react-router-dom";
import profileImage from '../../assets/images/profile-image-1.png';

function TeamNameEntryPage() {

    // const history = useHistory();

    const navigateToNext = () => {
        // const path = "/introduction";
        // history.push(path);
    }

    return (
        <div className="teamName">
            <img src={profileImage} alt="Profile" className="teamName__profileImage" />
            <form className="form">
                <input
                    type="text"
                    required
                    placeholder="Enter your name or name of your group"
                    className="form__input"
                />
                <button
                    class="form__btn btn btn--default"
                    onClick={navigateToNext}>Let's go</button>
            </form>
        </div>
    )
};

export default TeamNameEntryPage;