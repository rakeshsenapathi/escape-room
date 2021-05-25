import React from 'react';
import "./PhishingEmailPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/invitation.png";
import { useHistory } from 'react-router';

function PhishingEmailInvitation1() {

    const content = "I have used Sarah’s email account to send out a fake invitation to all the employees of the Manchester office to a charity event tomorrow evening with an open bar. ";
    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/phishing-email-invitation-2";
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

export default PhishingEmailInvitation1;
