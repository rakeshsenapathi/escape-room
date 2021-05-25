import React from 'react';
import "./PhishingEmailPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/invitation.png";
import { useHistory } from 'react-router';

function PhishingEmailInvitation() {

    const content = "Nice job! I have embedded spyware on the link Sarah clicked on to reset her password. Now I’ve got access to her company’s email account.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/phishing-email-invitation-1";
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

export default PhishingEmailInvitation;
