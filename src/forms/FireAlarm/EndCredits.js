import React from 'react';
import "./FireAlarm.scss";

function EndCredits() {
    return (
        <div className="end-credits">
            <div className="end-credits__header-shape">
                <p className="end-credits__header-shape--text">Thank you for taking part in our training</p>
            </div>
            <p className="end-credits__text--1">Hope you had fun whilst learning about the key issues of the latest cyber security threats. Now that you can think like a hacker, you can be more alert and vigilant so that you don’t.</p>
            <p className="end-credits__text--2">Click here for more resources to follow and stay up-to-date with your cyber security training:</p>
            <a className="end-credits__text--anchor" target="_blank" rel="noreferrer" href="https://www.notion.so/f3dec368d75b427e9d7d08636876cafa?v=c10e1d052a864d31b81ea1890e783f5a
">Cybersecurity Web Resources</a>
            <p className="end-credits__text--2">If you have the time, please fill the feedback form to tell us about your experience with the game</p>
            <a className="end-credits__text--anchor" target="_blank" rel="noreferrer" href="https://www.questionpro.com/a/TakeSurvey?tt=KWyQx1rbMvg%3D">Feedback form</a>
            <p className="end-credits__text--footer">Have a nice day!</p>
        </div>
    );
}

export default EndCredits;