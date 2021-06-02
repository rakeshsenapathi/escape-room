import React from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/outside-office-1.png';
import { useMediaQuery } from 'react-responsive';

function OfficePage3() {

    const content = "Alright. Let’s try your way then.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/office-inside";
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
                isPlayerNarrative={false}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps}
            />
        </div >
    );
};

export default OfficePage3;
