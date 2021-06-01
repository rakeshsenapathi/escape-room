import React from 'react';
import "./CafePage.scss";
import image from "../../assets/images/conversation-2.png";
import { useHistory } from 'react-router';
import CONSTANTS from '../../assets/constants/Constants';

function CafePagePostCoffee() {
    const playerName = localStorage.getItem(CONSTANTS.PLAYER_NAME); //Mocking name, take it from context-api next
    const history = useHistory();
    const handleNext = () => {
        const path = "/office-outside";
        history.push(path);
    };
    return (
        <div className="cafePagePostCoffee">
            <div className="cafePagePostCoffee__conversation">
                <img className="cafePagePostCoffee__image"
                    alt="Coversation" src={image}
                />
                <p className="cafe__conversation-text cafe__conversation-text--1">
                    {playerName}: <br />
                    Here is the password<br />
                    for the wifi router
                </p>
                <p className="cafe__conversation-text cafe__conversation-text--2">
                    Hacker: Ah good job! See how easy <br />
                    that was. I have now hacked <br />
                    into Tom’s company’s laptop <br />
                    and found some very <br />
                    interesting personal messages <br />
                    and pictures that may cause <br />
                    Tom a lot of embarrassment. <br />
                    Perfect material to blackmail <br />
                    him into giving us <br />
                    company credentials. <br />
                </p>
                <p className="cafe__conversation-text cafe__conversation-text--3">
                    We now have Sigma company’s <br />
                    employee details <br />
                    to go into their system. <br />
                    Now, you have to go to <br />
                    company Sigma’s office. <br />
                </p>
                <button className="conversation-btn conversation-btn--default"
                    onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default CafePagePostCoffee;
