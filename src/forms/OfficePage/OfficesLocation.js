import React from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/offices-location.png';
import { useMediaQuery } from 'react-responsive';

function OfficesLocation() {

    const content = "Solved it, I have entered the server room.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/office-location-1";
        history.push(path);
    };

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className="offices-location">
            {/* {isTablet && <img src={image}
                alt="Outside office"
                className="offices-location__image" />} */}
            {isTablet && <img src={image}
                alt="Outside office"
                className="offices-location__image--tablet" />}
            {!isTablet && <img src={image}
                alt="Outside office"
                className="offices-location__image" />}
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

export default OfficesLocation;
