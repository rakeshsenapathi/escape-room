import React, { useState } from 'react';
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';
import image1 from '../../assets/images/tailgating.png';
import image2 from '../../assets/images/inside-office-1.png';
import Constants from '../../assets/constants/Constants';
import { useMediaQuery } from 'react-responsive';

function OfficeInsidePage() {

    const contentText = "Ah great, I see Chris helped you in get in. You got away with that one! Now you need to find the server room.";
    const [image, setImage] = useState(image1);
    const [content, setContent] = useState();
    const [showFooterElements, setShowFooterElements] = useState(false);

    const refreshBgImage = () => {
        setTimeout(() => {
            setImage(image2);
            setContent(contentText);
            setShowFooterElements(true);
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
                showFooterElements={showFooterElements}
                isPlayerNarrative={false}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps}
            />
        </div >
    );
};

export default OfficeInsidePage;
