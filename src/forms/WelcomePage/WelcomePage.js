import React, { useEffect, useCallback } from 'react';
import './WelcomePage.scss';
import { useHistory } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function WelcomePage() {

    const history = useHistory();

    const path = 'rules';

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    const handleClick = () => {
        if (isTablet) {
            history.push(path);
        }
    }

    const handleEventStart = useCallback((e) => {
        if (e.keyCode === 32) { // value of space bar in keyboard
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
        <div className="welcome" onClick={handleClick}>
            <div className="welcome__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--sub ut-align-center">Welcome to the</span>
                    <span className="heading-primary--main">Hacker Heist</span>
                </h1>
            </div>
            <div className="welcome__footer-text">
                <h1 className="heading-primary--sub ut-align-center">
                    Tap <span className="heading-primary--highlight">{isTablet ? "anywhere" : "Space"}</span> to enter the game
                </h1>
            </div>
        </div>
    )
}

export default WelcomePage;