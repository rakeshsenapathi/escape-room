import React from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/offices-location-1.png';
import { useMediaQuery } from 'react-responsive';

function OfficesLocation4() {

    const content = "Now all I need you to do is sit back and help me find information online about the Manchester office before you actually go in. The Roxxon office in Manchester will have high level security so we need to be one step ahead. We need to find a secure way for you to get in.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/qrleads";
        history.push(path);
    };

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className="offices-location">
            {isTablet && <img src={image}
                alt="Outside office"
                className="offices-location__image--tablet" />}
            {!isTablet && <img src={image}
                alt="Outside office"
                className="offices-location__image" />}
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

export default OfficesLocation4;
