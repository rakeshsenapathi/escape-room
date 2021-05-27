import React from 'react';
import nextIcon from '../../assets/images/nextIcon.png';
import './footer.scss';

function Footer1(props) {

    const showBtnStyle = {
        "borderRadius": "1rem",
        "display": "block",
        "padding": props.iconNext ? "1.4rem 1.6rem" : "1.4rem 1.8rem",
        "width": props.styleProps.width,
        "height": props.styleProps.height,
        "fontWeight": "700",
        "fontSize": "2.6rem",
        "marginRight": "4rem",
        "textAlign": "center",
        "cursor": "pointer",
        "backgroundColor": "#FFB169"
    }

    const hideBtnStyle = {
        "visibility": "hidden"
    }

    const btnStyles = props.hasOwnProperty('btnHide') && props.btnHide ? hideBtnStyle : showBtnStyle;

    const nextIconStyles = {
        "marginLeft": "1rem",
        "display": !props.iconNext ? "none" : "inline-block"
    }

    const image = props.iconFooter;

    return (
        <footer className="footer-generic">
            <div className="footer-generic__box">
                <img className="footer-generic__profile-image--1" src={image} alt="footer" />
                <h1 className="footer-generic__profile-text">{props.content}</h1>
            </div>
            <div style={btnStyles}
                onClick={props.handleNext}>
                {props.textBtn}
                <img src={nextIcon} alt="Next" style={nextIconStyles} />
            </div>
        </footer>
    );
}

export default Footer1;