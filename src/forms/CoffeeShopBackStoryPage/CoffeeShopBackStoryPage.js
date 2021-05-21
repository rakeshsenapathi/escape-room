import React from 'react';
import "./CoffeeShopBackStoryPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-outdoor-1.png";
import { useHistory } from 'react-router';

function CoffeeShopBackStoryPage() {

    const content = "Hello, I am Morpheus. Thank you for hiring me to help you with your mission to destroy company Roxxon.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/coffeeShopStory1";
        history.push(path);
    };

    return (
        <div className="coffeeShopStory">
            <img className="coffeeShopStory__image" src={image} alt="coffeshop" />
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                handleNext={handleNext}
                styleProps={styleProps}
            />
        </div>
    );
};

export default CoffeeShopBackStoryPage;

