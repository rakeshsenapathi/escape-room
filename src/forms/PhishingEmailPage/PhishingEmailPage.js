import React from 'react';
import "./PhishingEmailPage.scss";
import image from "../../assets/images/conversation-3.png";
import { useHistory } from 'react-router';
import CONSTANTS from '../../assets/constants/Constants';

function PhishingEmailPage() {
    const playerName = localStorage.getItem(CONSTANTS.PLAYER_NAME); //Mocking name, take it from context-api next
    const history = useHistory();
    const handleNext = () => {
        const path = "/phishing-email-compose";
        history.push(path);
    };
    return (
        <div className="phishing-email">
            <div className="phishing-email__conversation">
                <img className="phishing-email__image"
                    alt="Coversation" src={image}
                />
                <p className="conversation-text conversation-text--1">
                    {playerName}: Got it<br />
                    It's sarahsmith@roxxon.com
                </p>
                <p className="conversation-text conversation-text--2">
                    Brilliant, you found Sarah <br />
                    Taylor’s email! Sarah is the <br />
                    company’s events manager. <br />
                    Social media really makes <br />
                    a hacker’s job so easy. <br />
                </p>
                <p className="conversation-text conversation-text--3">
                    We didn’t even have to break <br />
                    through the site’s defenses. <br />
                    Hackers like me prey on the <br />
                    oversharing and careless <br />
                    nature of open social media <br />
                    accounts.
                </p>
                <button className="conversation-btn conversation-btn--default"
                    onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default PhishingEmailPage;
