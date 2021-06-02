import React from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/server-room-3.png';
import { useMediaQuery } from 'react-responsive';

function OfficeInsidePage1() {

    const content = "I see the server room but there is a lock. I can’t get in without the pin.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/office-inside-2";
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

export default OfficeInsidePage1;
