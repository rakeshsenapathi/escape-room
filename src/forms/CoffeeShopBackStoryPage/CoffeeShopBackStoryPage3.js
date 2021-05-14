import React from 'react';
import "./CoffeeShopBackStoryPage.scss";
import Footer from "../../components/footer/footer.js";

function CoffeeShopBackStoryPage3() {
    const content = "Our mission starts at café Nero, Are you ready?";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="coffeeShopStory">
            <Footer textBtn="I'm ready"
                iconNext={false}
                content={content}
                path="/cafe" styleProps={styleProps}
            />
        </div>
    );
};

export default CoffeeShopBackStoryPage3;

