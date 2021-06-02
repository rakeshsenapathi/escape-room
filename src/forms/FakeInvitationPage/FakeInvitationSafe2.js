import React from 'react';
import "./FakeInvitationPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/boss-room.png";
import { useHistory } from 'react-router';
import { useMediaQuery } from 'react-responsive';

function FakeInvitationSafe2() {

    const content = (<div>Well done! You did it. Grab the hard drive which contains all the evidence.There might be an
        <span style={{ "color": "#fb3640" }}> alarm system </span>
                    that may……. </div>);

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/fake-invitation-safe-3";
        history.push(path);
    };

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className="fake-invitation">
            <img className={isTablet ? "fake-invitation__image--tablet" : "fake-invitation__image"} src={image} alt="Fake Invitation" />
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
