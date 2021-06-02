import React, { useState } from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/server-room-2.png';
import CONSTANTS from '../../assets/constants/Constants';
import { useMediaQuery } from 'react-responsive';

function OfficeInsidePage3() {

    const content_text = "It looks like the four digit code has been hidden as incorrect dates";

    const hint1 = "Hint 1) Maybe google the dates to check if the dates are factually correct.";
    const hint2 = "Hint 2) The incorrect numbers make up the pin.";
    const hint3 = "Hint 3) Hero I go giving you the answer again! I think the answer is 8502";

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
        if (passwordVal !== CONSTANTS.SERVER_ROOM_PASSWORD) {
            generateHintContent(failCount + 1);
            setFailCount(failCount + 1);
        }
        else {
            const path = "/office-location";
            history.push(path);
        }
    }

    const handleHintClick = () => {
        generateHintContent(hintClickCount + 1);
        setHintClickCount(hintClickCount + 1);
    };

    const downloadFullImage = "https://user-images.githubusercontent.com/14851449/120116488-09517f80-c1a6-11eb-8f19-d5807f6fccd3.png";

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className="server-room">
            <div className="img-container--1">
                {!isTablet && <img className="server-room__image" src={image} alt="server room" />}
                {isTablet && <img className="server-room__image--tablet" src={image} alt="server room" />}

                <a className="download-link--1"
                    href={downloadFullImage}
                    target="_blank" rel="noopener noreferrer"
                    download
                >Click here to view the image in full screen
                    </a>
                {!isTablet && <div className="server-room__form alignAsSingleRow form-single">
                    <input
                        onChange={handleInput}
                        value={passwordVal}
                        required
                        placeholder="Enter the password"
                        className="server-room__form-input form-single__input"
                    />
                    <button
                        className="form__btn btn btn--default"
                        onClick={handleSubmit}>Done</button>
                </div>}
                {isTablet && <div className="server-room__form alignAsSingleColumn form-single">
                    <input
                        onChange={handleInput}
                        value={passwordVal}
                        required
                        placeholder="Enter the password"
                        className="server-room__form-input form-single__input"
                    />
                    <button
                        className="form__btn btn btn--default ut-marginTop"
                        onClick={handleSubmit}>Done</button>
                </div>}
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

export default OfficeInsidePage3;
