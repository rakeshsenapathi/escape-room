import React from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image from '../../assets/images/server-room-3.png';

function OfficeInsidePage2() {

    const content = "Solve this puzzle to reveal the pin for the server room.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/office-inside-3";
        history.push(path);
    };

    return (
        <div className="office-outside">
            <img src={image}
                alt="Outside office"
                className="office-outside__image" />
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

export default OfficeInsidePage2;
