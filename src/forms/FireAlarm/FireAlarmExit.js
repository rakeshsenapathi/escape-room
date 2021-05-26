import React from 'react';
import "./FireAlarm.scss";
import image from "../../assets/images/exit-door.png";
import securityGuardImage from "../../assets/images/security-guard.png";
import { useHistory } from 'react-router';
import Footer1 from '../../components/footer/footer1';

function FireAlarmExit() {

    const content = "Security Guard: We have a fire alert. Please exit through the door.";

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
            <Footer1 textBtn="Next"
                iconNext={true}
                content={content}
                iconFooter={securityGuardImage}
                handleNext={handleNext}
                styleProps={styleProps}
            />
        </div>
    );
};

export default FireAlarmExit;
