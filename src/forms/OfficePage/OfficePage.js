import React from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from "../../assets/images/outside-office-1.png";

function OfficePage() {

    const content = "I am here!";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/office-outside-1";
        history.push(path);
    };

    return (
        <div className="office-outside">
            <img src={image}
                alt="Outside office"
                className="office-outside__image" />
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

export default OfficePage;