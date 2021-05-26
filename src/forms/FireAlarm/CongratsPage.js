import React from 'react';
import "./FireAlarm.scss";
import congratsImage from "../../assets/images/congrats.png";
import { useHistory } from 'react-router';
import Footer2 from '../../components/footer/footer2';

function CongratsPage() {

    const content = "Congratulations! You did it. You completed all the tasks and performed cyber security threats in order to destroy Company Roxxon. Now you know how a hacker’s mind works and how small human errors can lead to destroying a company.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/boss-fires";
        history.push(path);
    };

    return (
        <div className="fire-alarm">
            <div className="fire-alarm__container--max">
                <img className="fire-alarm__image--1" src={congratsImage} alt="Exit door" />
            </div>
            <Footer2 textBtn="Next"
                iconNext={true}
                content={content}
                iconFooter={congratsImage}
                handleNext={handleNext}
                styleProps={styleProps}
            />
        </div>
    );
};

export default CongratsPage;
