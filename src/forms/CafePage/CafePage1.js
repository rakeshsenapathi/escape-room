import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-bluetie.png";
import { useHistory } from 'react-router';
import { useMediaQuery } from 'react-responsive';

function CafePage1() {

    const content = "Notice the man with the blue tie sitting in the corner? That’s Tom Murray, he works for company Sigma which stores data and runs the application of Roxxon’s servers.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/cafe2";
        history.push(path);
    };

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className="coffeeShopStory">
            <div className="cafePage-container">
                {isTablet && <img className="cafePage__image--tablet" src={image} alt="coffeshop" />}
                {!isTablet && <img className="cafePage__image" src={image} alt="coffeshop" />}
            </div>
            <Footer textBtn="Next"
                iconNext={true}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePage1;
