import React from 'react';
import "./FireAlarm.scss";
import image from "../../assets/images/getting-fired.png";
import bossImage from "../../assets/images/boss-profile.png";
import { useHistory } from 'react-router';
import Footer3 from '../../components/footer/footer3';

function BossFiresPage() {

    const content1 = "Boss Drump: ";
    const content2 = "Because of your incompetence and carelessness, today a hacker got into our systems, entered our office and stole confidential information.";
    const content3 = "You are all fired!!!";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/congrats";
        history.push(path);
    };

    return (
        <div className="fire-alarm">
            <img className="fake-invitation__image" src={image} alt="Exit door" />
            <Footer3 textBtn="Next"
                iconNext={true}
                content1={content1}
                content2={content2}
                content3={content3}
                iconFooter={bossImage}
                handleNext={handleNext}
                styleProps={styleProps}
            />
        </div>
    );
};

export default BossFiresPage;
