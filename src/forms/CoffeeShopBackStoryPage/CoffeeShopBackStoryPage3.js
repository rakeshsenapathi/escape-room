import React from 'react';
import "./CoffeeShopBackStoryPage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-outdoor-1.png";

function CoffeeShopBackStoryPage3() {
    const content = "Our mission starts at café Nero, Are you ready?";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="coffeeShopStory">
            <img className="coffeeShopStory__image" src={image} alt="coffeshop" />
            <Footer textBtn="I'm ready"
                iconNext={false}
                content={content}
                path="/cafe" styleProps={styleProps}
            />
        </div>
    );
};

export default CoffeeShopBackStoryPage3;

