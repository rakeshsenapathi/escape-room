import React, { useState } from 'react';
import './TeamNameEntryPage.scss';
import { useHistory } from "react-router-dom";
import profileImage from '../../assets/images/profile-image-1.png';
import CONSTANTS from '../../assets/constants/Constants';

function TeamNameEntryPage() {

    const history = useHistory();
    const [inputVal, setInputVal] = new useState("");

    const navigateToNext = () => {
        if (inputVal === '') { return; }
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem(CONSTANTS.PLAYER_NAME, inputVal);
        }
        const path = "/coffeeShopStory";
        history.push(path);
    }

    return (
        <div className="teamName">
            <img src={profileImage} alt="Profile" className="teamName__profileImage" />
            <form className="form">
                <input
                    type="text"
                    required
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Enter your name or name of your group"
                    className="form__input"
                />
                <button
                    className="form__btn btn btn--default"
                    onClick={navigateToNext}>Let's go</button>
            </form>
        </div>
    )
};

export default TeamNameEntryPage;