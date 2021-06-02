import React from 'react';
import "./QRLeadsPage.scss";
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/instagram-search-image.png';
import { useMediaQuery } from 'react-responsive';

function QRLeadsPage1() {

    const content = "Okay now click on the instagram profile link.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/qrleads-insta";
        history.push(path);
    };

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className="qrleads">
            <div className="qrleads__container">
                {!isTablet && <img className="qrleads__image--1" src={image} alt="QR Leads" />}
                {isTablet && <img className="qrleads__image--tablet" src={image} alt="QR Leads" />}
                {!isTablet && <div className="qrleads__click-event-area"
                    onClick={handleNext}></div>}
                {isTablet && <div className="qrleads__click-event-area--tablet"
                    onClick={handleNext}></div>}
            </div>
            <Footer textBtn="Next"
                btnHide={true}
                iconNext={true}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps}
            />
        </div>
    );
};

export default QRLeadsPage1;
