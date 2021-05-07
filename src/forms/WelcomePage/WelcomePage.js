import React, { useEffect, useCallback } from 'react';
import './WelcomePage.scss';
import { useHistory } from "react-router-dom";

function WelcomePage() {

    const history = useHistory();

    const handleEventStart = useCallback((e) => {
        if (e.keyCode === 32) { // value of space bar in keyboard
            const path = 'rules';
            history.push(path); // Routing to the path 'rules'
        }
    }, [history]);

    useEffect(() => {
        document.addEventListener("keypress", handleEventStart, false);
        return () => {
            document.removeEventListener("keypress", handleEventStart, false);
        }
    }, [handleEventStart]);

    return (
        <div className="welcome">
            <div className="welcome__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--sub">Welcome to the</span>
                    <span className="heading-primary--main">Escape Room</span>
                </h1>
            </div>
            <div className="welcome__footer-text">
                <h1 className="heading-primary--sub">
                    Tap <span className="heading-primary--highlight">"Space"</span> to enter the game
                </h1>
            </div>
        </div>
    )
}

export default WelcomePage;