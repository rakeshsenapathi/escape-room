import React from 'react';
import "./FireAlarm.scss";
import image from "../../assets/images/fire-alarm.png";
import { useHistory } from 'react-router';

function FireAlarm() {

    const history = useHistory();

    setTimeout(() => {
        const path = "/exit-door";
        history.push(path);
    }, 3000);

    return (
        <div className="fire-alarm">
            <div className="fire-alarm__container">
                <img className="fire-alarm__image" src={image} alt="Fire Alarm" />
            </div>
        </div>
    );
};

export default FireAlarm;
