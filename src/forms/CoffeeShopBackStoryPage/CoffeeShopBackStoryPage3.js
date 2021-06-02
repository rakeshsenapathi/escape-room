import React from 'react';
import "./CoffeeShopBackStoryPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-outdoor-1.png";
import { useHistory } from 'react-router';
import { useMediaQuery } from 'react-responsive';

function CoffeeShopBackStoryPage3() {
    const content = "Our mission starts at café Nero, Are you ready?";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/cafe";
        history.push(path);
    };

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className="coffeeShopStory">
            {isTablet && <img className="coffeeShopStory__image--tablet" src={image} alt="coffeshop" />}
            {!isTablet && <img className="coffeeShopStory__image" src={image} alt="coffeshop" />}
            <Footer textBtn="I'm ready"
                iconNext={false}
                content={content}
                handleNext={handleNext}
                path="/cafe" styleProps={styleProps}
            />
        </div>
    );
};

export default CoffeeShopBackStoryPage3;

