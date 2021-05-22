import React, { useState } from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image1 from '../../assets/images/outside-office-1.png';
import image2 from '../../assets/images/inside-office-1.png';
import Constants from '../../assets/constants/Constants';

function OfficeInsidePage() {

    const contentText = "Ah great, I see Chris helped you in get in. You got away with that one! Now you need to find the server room.";
    const [image, setImage] = useState(image1);
    const [content, setContent] = useState();

    const refreshBgImage = () => {
        setTimeout(() => {
            setImage(image2);
            setContent(contentText);
        }, Constants.REFRESH_TIME);
    }

    refreshBgImage();

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/office-inside-1";
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

export default OfficeInsidePage;
