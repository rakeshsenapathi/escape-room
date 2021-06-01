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
                    <h1 className="heading-secondary ut-margin-bottom-medium ut-align-center--1 ut-fs-50">Hacker Heist</h1>
                    <h1 className="heading-secondary ut-margin-bottom-medium">What is this game about?</h1>
                    <h1 className="heading-tertiary ut-font-size-medium ut-color-white">

                        We hear you and understand your pain of going through hours of tedious company training sessions. Here at Hacker Heist, we have turned passive training into an exciting virtual CYBER SECURITY ESCAPE ROOM GAME! We have implemented scientifically proven, game-based learning principles to create a lasting and an effective training program that will help you complete your cyber security awareness training. Our goal is for you to turn human risk into human strength. You will have the opportunity to work in a team and learn about the latest cyber security issues whilst solving a series of puzzles within 2 hours. Join us today to become a part of a positive security culture.
                        {/* Welcome to the future of cyber security training.
                    <br />
                        We have designed an exciting escape room game for your cyber security training because we believe in having fun whilst learning!
                    <br />
                        You will partner with a real life hacker, Morpheus. Your goal is to work as a team to destroy Company Roxxon by carefully following the instructions by Morpheus and solving a number of puzzles. In order to complete the tasks given by Morpheus, you and your team will be required to exploit multiple security issues to help you understand cyber security breaches. The aim of this game is to educate you on the hot topics of cyber security and how small errors can lead to devastating consequences. If you accept the challenge, please proceed and be aware that there is no turning back! */}
                    </h1>
                    <div className="rules__points">
                        <h1 className="heading-secondary ut-margin-bottom-medium">Rules</h1>
                        <ul className="rules__points-list">
                            <li className="rules__points-item">1. Play solo or form a team of up to 4 members</li>
                            <li className="rules__points-item">2. Game takes up to two hours</li>
                            <li className="rules__points-item">3. Make sure you have a pen, paper and access to a smartphone</li>
                            <li className="rules__points-item">4. Always be vigilant</li>
                            <li className="rules__points-item">5. Think like a hacker!</li>
                        </ul>
                    </div>
                </div>
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