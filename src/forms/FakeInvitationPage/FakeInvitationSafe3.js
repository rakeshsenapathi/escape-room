import React from 'react';
import "./FakeInvitationPage.scss";
import image from "../../assets/images/boss-room.png";
import warningImage from "../../assets/images/warning.png";
import { useHistory } from 'react-router';
import Footer1 from '../../components/footer/footer1';

function FakeInvitationSafe3() {

    const content = "You have been detected by the security. You must move fast now!";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/fake-invitation-safe-4";
        history.push(path);
    };

    return (
        <div className="fake-invitation">
            <img className="fake-invitation__image" src={image} alt="Fake Invitation" />
            <Footer1 textBtn="Next"
                iconNext={true}
                content={content}
                iconFooter={warningImage}
                handleNext={handleNext}
                styleProps={styleProps}
            />
        </div>
    );
};

export default FakeInvitationSafe3;
