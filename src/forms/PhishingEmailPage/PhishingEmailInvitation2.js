import React from 'react';
import "./PhishingEmailPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/invitation.png";
import { useHistory } from 'react-router';

function PhishingEmailInvitation2() {

    const content = "This will keep the office doors open late in the evening and is the perfect opportunity for you to enter the building and complete your mission. I have sent you a fake invitation as well which you can show the guard to enter the office building.";
    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/fake-invitation";
        history.push(path);
    };

    return (
        <div className="invitation">
            <div className="invitation__img-container">
                <img className="invitation__image" src={image} alt="Invitation" />
            </div>
            <Footer textBtn="Next"
                iconNext={true}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps}
            />
        </div>
    );
};

export default PhishingEmailInvitation2;
