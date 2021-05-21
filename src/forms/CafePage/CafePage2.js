import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-2.png";

function CafePage2() {

    const content = "It looks like Tom is a workaholic, working hard on his company’s laptop in a café. Good thing the café has great coffee and wifi to keep him going. What an easy target.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="coffeeShopStory">
            <div className="cafePage-container">
                <img className="cafePage__image" src={image} alt="coffeshop" />
            </div>
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                path="/cafe3"
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePage2;
