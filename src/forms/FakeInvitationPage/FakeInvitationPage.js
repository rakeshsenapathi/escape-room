import React from 'react';
import "./FakeInvitationPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/fake-invitation.png";
import { useHistory } from 'react-router';

function FakeInvitationPage() {

    const content = "I have reached the location, and now hiding in plain sight with the others at the party.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/fake-invitation-1";
        history.push(path);
    };

    return (
        <div className="fake-invitation">
            <img className="fake-invitation__image" src={image} alt="Fake Invitation" />
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                isPlayerNarrative={true}
                handleNext={handleNext}
                styleProps={styleProps}
            />
        </div>
    );
};

export default FakeInvitationPage;
