import React from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/offices-location.png';

function OfficesLocation1() {

    const content = "Okay great, I need you to connect your laptop to the server and find the location of the office that holds the evidence we are looking for.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/office-location-2";
        history.push(path);
    };

    return (
        <div className="offices-location">
            <img src={image}
                alt="Outside office"
                className="offices-location__image" />
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

export default OfficesLocation1;
