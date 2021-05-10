import React from 'react';
import "./CoffeeShopBackStoryPage.scss";
import Footer from "../../components/footer/footer.js";

function CoffeeShopBackStoryPage() {

    const content = "Hello, I am Morpheus. Thank you for hiring me to help you with your mission to destroy company Roxxon. From your previous email I understand that company Roxxon has caused major damages to your community with their toxic waste and illegal accumulation of properties.";

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

