import React, { useState } from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/menucard.png";
import "../../common-styles/main.scss";
import CONSTANTS from "../../assets/constants/Constants";
import { useHistory } from 'react-router';

function CafePageMenu() {

    const [content, setContent] = useState("Read between the lines");
    const [hintClickCount, setHintClickCount] = useState(0);
    const history = useHistory();
    const [failCount, setFailCount] = useState(0);
    const [passwordVal, setPasswordVal] = useState("");

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    };

    const handleInput = (event) => {
        const val = event.target.value.toLowerCase();
        setPasswordVal(val);
    };

    const generateHintContent = (count) => {
        switch (count) {
            case 1:
                setContent("Hint 1) Some of the letters look different");
                break;
            case 2:
                setContent("Hint 2) I think you have to rearrange the letters to form a word");
                break;
            case CONSTANTS.MAX_FAIL_LIMIT:
                setContent("Hint 3) Alright, I figured it out, the word is 'ransomware'");
                break;
            default:
                setContent("The password is ransomware");
                break;
        }
    }

    const handleSubmit = () => {
        if (passwordVal !== CONSTANTS.WIFI_PASSWORD) {
            generateHintContent(failCount + 1);
            setFailCount(failCount + 1);
        }
        else {
            const path = "/cafePostCoffee";
            history.push(path);
        }
    }

    const handleHintClick = () => {
        generateHintContent(hintClickCount + 1);
        setHintClickCount(hintClickCount + 1);
    };

    const downloadFullImage = "https://user-images.githubusercontent.com/14851449/119868868-3818ed00-bf3d-11eb-8bbc-54a98cdd62a7.png";

    return (
        <div className="cafePage-wifi">
            <div className="cafePage-wifi__container">
                <div className="img-container">
                    <img className="cafePage-wifi__image--1" src={image} alt="coffeshop" />
                    <a className="download-link"
                        href={downloadFullImage}
                        target="_blank" rel="noopener noreferrer"
                        download
                    >Click here to view the image in full screen
                    </a>
                </div>
                {/* <img className="cafePage-wifi__image--1" src={download} alt="coffeshop" /> */}
                <div className="cafePage-wifi__form alignAsSingleRow form-single">
                    <input
                        type="text"
                        onChange={handleInput}
                        value={passwordVal}
                        required
                        placeholder="Enter the password"
                        className="cafePage-wifi__form-input form-single__input"
                    />
                    <button
                        className="form__btn btn btn--default"
                        onClick={handleSubmit}>Done</button>
                </div>
            </div>
            <Footer textBtn="Hint"
                handleNext={handleHintClick}
                iconNext={false}
                content={content}
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePageMenu;
