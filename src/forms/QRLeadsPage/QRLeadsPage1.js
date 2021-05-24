import React from 'react';
import "./QRLeadsPage.scss";
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/searchengine-result.png';

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

    return (
        <div className="qrleads">
            <div className="qrleads__container">
                <img className="qrleads__image--1" src={image} alt="QR Leads" />
                <div className="qrleads__click-event-area"
                    onClick={handleNext}></div>
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
