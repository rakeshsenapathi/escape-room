import React from 'react';
import './RulesPage.scss';
import { useHistory } from "react-router-dom";

function RulesPage() {

    const history = useHistory();

    const navigateToNext = () => {
        const path = "/introduction";
        history.push(path);
    }
    return (
        <div className="rules">
            <div className="rules__box">
                <div className="rules__heading">
                    <h1 className="heading-secondary ut-margin-bottom-medium">What is this game about?</h1>
                    <h1 className="heading-tertiary ut-font-size-medium ut-color-white">
                        Welcome to the future of cyber security training.
                    <br />
                        We have designed an exciting escape room game for your cyber security training because we believe in having fun whilst learning!
                    <br />
                        You will partner with a real life hacker, Morpheus. Your goal is to work as a team to destroy Company Roxxon by carefully following the instructions by Morpheus and solving a number of puzzles. In order to complete the tasks given by Morpheus, you and your team will be required to exploit multiple security issues to help you understand cyber security breaches. The aim of this game is to educate you on the hot topics of cyber security and how small errors can lead to devastating consequences. If you accept the challenge, please proceed and be aware that there is no turning back!
                    </h1>
                    <div className="rules__points">
                        <h1 className="heading-secondary ut-margin-bottom-medium">Rules</h1>
                        <ul className="rules__points-list">
                            <li className="rules__points-item">1. Rules are for loosers</li>
                            <li className="rules__points-item">2. Same here</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="rules__leaderboard">
                    <h1 className="heading-primary heading-primary--sub ut-margin-bottom-medium">Leaderboard</h1>
                    <ul className="rules__leaderboard-list">
                        <li className="rules__leaderboard-item">Jack Doe</li>
                        <li className="rules__leaderboard-item">Sam Doe</li>
                        <li className="rules__leaderboard-item">Amy Doe</li>
                        <li className="rules__leaderboard-item">Jane Doe</li>
                        <li className="rules__leaderboard-item">Phil Doe</li>
                    </ul>
                </div> */}
            </div>
            <div
                className="rules__agree-btn btn btn--default"
                onClick={navigateToNext}>
                I agree to the rules
            </div>
        </div>
    );
}

export default RulesPage;