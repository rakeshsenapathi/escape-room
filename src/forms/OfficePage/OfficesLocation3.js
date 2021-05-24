import React from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/offices-location-1.png';

function OfficesLocation3() {

    const content = "Found it. It is in Roxxon’s Manchester branch.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/office-location-4";
        history.push(path);
    };

    return (
        <div className="offices-location">
            <img src={image}
                alt="Outside office"
                className="offices-location__image" />
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

export default OfficesLocation3;
