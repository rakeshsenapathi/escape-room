import React from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from "../../assets/images/outside-office-1.png";
import { useMediaQuery } from 'react-responsive';

function OfficePage2() {

    const content = "I think I have an Idea. I am gonna wait for the right moment and step in as soon as someone is coming out of the door. They would probably not think twice about holding the door for me.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/office-outside-3";
        history.push(path);
    };

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className="office-outside">
            {isTablet && <img src={image}
                alt="Outside office"
                className="office-outside__image--tablet" />}
            {!isTablet && <img src={image}
                alt="Outside office"
                className="office-outside__image" />}
            <Footer textBtn="Next"
                iconNext={true}
                isPlayerNarrative={true}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps}
            />
        </div >
    );
};

export default OfficePage2;
