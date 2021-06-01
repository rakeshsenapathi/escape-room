import React from 'react';
import "./FireAlarm.scss";
import { useHistory } from 'react-router';
import nextIcon from '../../assets/images/nextIcon.png';
import img from '../../assets/images/boss-firing.png';

function ReviewFiringReason() {

    const history = useHistory();

    const handleNext = () => {
        const path = "/end";
        history.push(path);
    };

    const text1 = (<div>1. Tom, used the company’s laptop in a public space and connected to <span style={{ "fontWeight": "700" }}>public wifi</span> and gave away the company details to a stranger.</div>);

    const text2 = (<div>2. Then comes Chris who kindly <span style={{ "fontWeight": "700" }}>allowed a stranger</span> into the office building without checking for identity.</div>)

    const text3 = (<div>3. Emma uploaded images to company Roxxon’s official Instagram page with <span style={{ "fontWeight": "700" }}>sensitive information</span> like an email displayed in the background.</div>)

    const text4 = (<div>4. Lastly, Sarah fell for a <span style={{ "fontWeight": "700" }}>phishing email.</span></div>);

    return (
        <div className="review-firing">
            <div className="review-firing__container">
                <img className="review-firing__img" alt="Review" src={img} />
                <div className="review-firing__text">
                    <h1 className="review-firing__header-text">Let’s review the four employees that are going to get fired:</h1>
                    <p className="review-firing__bullet-points">{text1}</p>
                    <p className="review-firing__bullet-points">{text2}</p>
                    <p className="review-firing__bullet-points">{text3}</p>
                    <p className="review-firing__bullet-points">{text4}</p>
                </div>
            </div>
            <footer className="footer">
                <div
                    className="footer__btn--1"
                    onClick={handleNext}>
                    Next
                    <img src={nextIcon} alt="Next" style={{ "marginLeft": "1rem" }} />
                </div>
            </footer>
        </div>
    );
};

export default ReviewFiringReason;
