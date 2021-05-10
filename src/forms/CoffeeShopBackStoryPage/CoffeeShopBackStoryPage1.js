import React from 'react';
import "./CoffeeShopBackStoryPage.scss";
import Footer from "../../components/footer/footer.js";

function CoffeeShopBackStoryPage1() {

    const content = "I am here to help you get your revenge by hacking into the company’s system and obtaining evidence to destroy Roxxon. I have done all my research and articulated a full proof plan, I just need you to carefully follow my instructions";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="coffeeShopStory">
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                path="/coffeeShopStory2"
                styleProps={styleProps} />
        </div>
    );
};

export default CoffeeShopBackStoryPage1;

