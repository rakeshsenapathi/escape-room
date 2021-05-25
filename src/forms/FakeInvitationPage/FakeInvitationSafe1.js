import React from 'react';
import "./FakeInvitationPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/saferoom1.png";
import { useHistory } from 'react-router';

function FakeInvitationSafe1() {

    const content = "Okay, now I have done further digging into the company’s database and found a reminder clue for the CEO which he uses to open the safe. Solve the clue, unlock the safe and grab the evidence. Good luck!";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/riddle-puzzle";
        history.push(path);
    };

    return (
        <div className="fake-invitation">
            <img className="fake-invitation__image fake-invitation__image--1" src={image} alt="Fake Invitation" />
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

export default FakeInvitationSafe1;
