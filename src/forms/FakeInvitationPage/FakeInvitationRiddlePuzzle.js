import React, { useState } from 'react';
import "./FakeInvitationPage.scss";
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/maze.png';
import CONSTANTS from '../../assets/constants/Constants';

function FakeInvitationRiddlePuzzle() {

    const content_text = "Solve the clue, unlock the safe and grab the evidence. Good luck!";

    const hint1 = "Hint 1) The riddle is an equation. Solve it to open the safe.";
    const hint2 = "Hint 2) Clue: D / U x L +R = code for the safe.";
    const hint3 = "Hint 3) Answer 40.";

    const [passwordVal, setPasswordVal] = useState("");
    const [content, setContent] = useState(content_text);
    const [failCount, setFailCount] = useState(0);
    const [hintClickCount, setHintClickCount] = useState(0);

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleInput = (event) => {
        const val = event.target.value;
        setPasswordVal(val);
    };

    const generateHintContent = (count) => {
        switch (count) {
            case 1:
                setContent(hint1);
                break;
            case 2:
                setContent(hint2);
                break;
            case CONSTANTS.MAX_FAIL_LIMIT:
                setContent(hint3);
                break;
            default:
                setContent(hint3);
                break;
        }
    }

    const handleSubmit = () => {
        if (passwordVal !== CONSTANTS.RIDDLE_ANSWER) {
            generateHintContent(failCount + 1);
            setFailCount(failCount + 1);
        }
        else {
            const path = "/fake-invitation-bossroom";
            history.push(path);
        }
    }

    const handleHintClick = () => {
        generateHintContent(hintClickCount + 1);
        setHintClickCount(hintClickCount + 1);
    };


    return (
        <div className="riddle">
            <div className="riddle__container">
                <div className="riddle__container-scan">
                    <div className="riddle__text-container">
                        <p className="riddle__scan-text">
                            <span style={{ "fontWeight": "700" }}>Riddle: <br /></span>
In life, for all the times you fall down, you have to split it by the number of times you go up. Add all the paths you have chosen, may they be left or right. In the end, multiply your solutions together to complete your mission. </p>
                    </div>
                    <img src={image}
                        alt="Outside office"
                        className="riddle__image" />
                </div>
                <div className="riddle__form alignAsSingleRow form-single">
                    <input
                        type="text"
                        onChange={handleInput}
                        value={passwordVal}
                        required
                        placeholder="Enter the key to the safe"
                        className="riddle__form-input form-single__input"
                    />
                    <button
                        className="form__btn btn btn--default"
                        onClick={handleSubmit}>Done</button>
                </div>
            </div>
            <Footer textBtn="Hint"
                iconNext={false}
                isPlayerNarrative={false}
                handleNext={handleHintClick}
                content={content}
                styleProps={styleProps}
            />
        </div >
    );
};

export default FakeInvitationRiddlePuzzle;
