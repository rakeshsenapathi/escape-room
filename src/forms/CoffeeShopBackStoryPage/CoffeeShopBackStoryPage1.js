import React from 'react';
import "./CoffeeShopBackStoryPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-outdoor-1.png";

function CoffeeShopBackStoryPage1() {

    const content = "From your previous email I understand that company Roxxon has caused major damages to your community with their toxic waste and illegal accumulation of properties.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="coffeeShopStory">
            <img className="coffeeShopStory__image" src={image} alt="coffeshop" />
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                path="/coffeeShopStory2"
                styleProps={styleProps} />
        </div>
    );
};

export default CoffeeShopBackStoryPage1;

