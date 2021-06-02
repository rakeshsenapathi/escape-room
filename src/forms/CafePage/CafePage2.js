import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-bluetie.png";
import { useHistory } from 'react-router';
import { useMediaQuery } from 'react-responsive';

function CafePage2() {

    const content = "It looks like Tom is a workaholic, working hard on his company’s laptop in a café. Good thing the café has great coffee and wifi to keep him going. What an easy target.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/cafe3";
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
                content={content}
                handleNext={handleNext}
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePage2;
