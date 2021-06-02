import React from 'react';
import "./CoffeeShopBackStoryPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-outdoor-1.png";
import { useHistory } from 'react-router';
import { useMediaQuery } from 'react-responsive';

function CoffeeShopBackStoryPage1() {

    const content = "From your previous email I understand that company Roxxon has caused major damages to your community with their toxic waste and illegal accumulation of properties.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/coffeeShopStory2";
        history.push(path);
    };

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    return (
        <div className="coffeeShopStory">
            {isTablet && <img className="coffeeShopStory__image--tablet" src={image} alt="coffeshop" />}
            {!isTablet && <img className="coffeeShopStory__image" src={image} alt="coffeshop" />}
            <Footer textBtn="Next"
                iconNext={true}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps} />
        </div>
    );
};

export default CoffeeShopBackStoryPage1;

