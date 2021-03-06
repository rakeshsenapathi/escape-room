import React, { useState } from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/wifi-router-1.png";
import "../../common-styles/main.scss";
import CONSTANTS from "../../assets/constants/Constants";
import { useHistory } from 'react-router';

function CafePageWifi() {

    const [content, setContent] = useState("");
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
                setContent("Look closely at the router");
                break;
            case CONSTANTS.MAX_FAIL_LIMIT:
            default:
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

    return (
        <div className="cafePage-wifi">
            <div className="cafePage-wifi__container">
                <img className="cafePage-wifi__image" src={image} alt="coffeshop" />
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

export default CafePageWifi;
