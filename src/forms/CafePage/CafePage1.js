import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-2.png";

function CafePage1() {

    const content = "Notice the man with the blue tie sitting in the corner? That’s Tom Murray, he works for company Sigma which stores data and runs the application of Roxxon’s servers.";

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
                path="/cafe2"
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePage1;
