import React, { useState } from 'react';
import "./QRLeadsPage.scss";
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/qrcode.png';
import CONSTANTS from '../../assets/constants/Constants';
import { useMediaQuery } from 'react-responsive';

function QRLeadsPageInsta() {

    const content_text = "See if you can find any information from the images in this instagram profile. We can use the information to find a way to get access to the company.";

    const hint1 = "Hint 1) Maybe you should look up close.";
    const hint2 = "Hint 2) See if you could find a hidden e-mail.";
    const hint3 = "Hint 3) Uhhh... do I need to do everything myself? There you go -  sarahsmith@roxxon.com";

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
        if (passwordVal !== CONSTANTS.QR_PASSWORD) {
            generateHintContent(failCount + 1);
            setFailCount(failCount + 1);
        }
        else {
            const path = "/phishing-email";
            history.push(path);
        }
    }

    const handleHintClick = () => {
        generateHintContent(hintClickCount + 1);
        setHintClickCount(hintClickCount + 1);
    };

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className="qrcode">
            <div className="qrcode__container">
                <div className="qrcode__container-scan">
                    {!isTablet && <img src={image}
                        alt="Outside office"
                        className="qrcode__image" />}
                    {isTablet && <img src={image}
                        alt="Outside office"
                        className="qrcode__image--tablet" />}
                    <p className="qrcode__scan-text">
                        Scan QR code using your QR Scanner
                        to open the Instagram profile.</p>
                </div>
                <div className="qrcode__form alignAsSingleRow form-single">
                    <input
                        type="text"
                        onChange={handleInput}
                        value={passwordVal}
                        required
                        placeholder="Enter the Email ID here"
                        className="qrcode__form-input form-single__input"
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

export default QRLeadsPageInsta;
