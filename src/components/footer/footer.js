import React from 'react';
import profileImage from '../../assets/images/profile-image-2.png';
import nextIcon from '../../assets/images/nextIcon.png';
import './footer.scss';
import { useHistory } from 'react-router';

function Footer(props) {

    const btnStyles = {
        "borderRadius": "1rem",
        "display": "block",
        "padding": props.iconNext ? "1.4rem 1.6rem" : "1.4rem 1.8rem",
        "width": props.styleProps.width,
        "height": props.styleProps.height,
        "fontSize": "2.6rem",
        "marginRight": "4rem",
        "textAlign": "center",
        "backgroundColor": "#FFB169"
    }

    const nextIconStyles = {
        "marginLeft": "1rem",
        "display": !props.iconNext ? "none" : "inline-block"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = props.path;
        history.push(path);
    };

    return (
        <footer className="footer-generic">
            <div className="footer-generic__box">
                <img className="footer-generic__profile-image" src={profileImage} alt="footer" />
                <h1 className="footer-generic__profile-text">{props.content}</h1>
            </div>
            <div style={btnStyles}
                onClick={handleNext}>
                {props.textBtn}
                <img src={nextIcon} alt="Next" style={nextIconStyles} />
            </div>
        </footer>
    );
}

export default Footer;