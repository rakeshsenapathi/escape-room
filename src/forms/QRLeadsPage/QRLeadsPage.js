import React from 'react';
import "./QRLeadsPage.scss";
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/searchengine-home.png';

function QRLeadsPage() {

    const content = "Start surfing the internet and stalk the company’s social media accounts. You need to be vigilant here.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/qrleads-1";
        history.push(path);
    };

    return (
        <div className="qrleads">
            <div className="qrleads__container">
                <img className="qrleads__image" src={image} alt="QR Leads" />
                <div className="qrleads__search-event-area"
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

export default QRLeadsPage;
