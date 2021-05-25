import React from 'react';
import "./FakeInvitationPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/fake-invitation.png";
import { useHistory } from 'react-router';

function FakeInvitationPage1() {

    const content = "Great, follow my instructions carefully now. Sneak into the CEO’s chamber and locate the safe.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/fake-invitation-safe";
        history.push(path);
    };

    return (
        <div className="fake-invitation">
            <img className="fake-invitation__image" src={image} alt="Fake Invitation" />
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                isPlayerNarrative={false}
                handleNext={handleNext}
                styleProps={styleProps}
            />
        </div>
    );
};

export default FakeInvitationPage1;
