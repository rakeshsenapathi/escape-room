import React from 'react';
import "./FakeInvitationPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/boss-room.png";
import { useHistory } from 'react-router';

function FakeInvitationSafe2() {

    const content = "Well done! You did it. Grab the hard drive which contains all the evidence. There might be an alarm system that may…….";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/fake-invitation-safe-1";
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

export default FakeInvitationSafe2;
