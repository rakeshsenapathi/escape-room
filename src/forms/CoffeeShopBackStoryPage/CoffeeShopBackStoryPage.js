import React from 'react';
import "./CoffeeShopBackStoryPage.scss";
import Footer from "../../components/footer/footer.js";

function CoffeeShopBackStoryPage() {

    const content = "Hello, I am Morpheus. Thank you for hiring me to help you with your mission to destroy company Roxxon.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="coffeeShopStory">
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                path="/coffeeShopStory1"
                styleProps={styleProps}
            />
        </div>
    );
};

export default CoffeeShopBackStoryPage;

