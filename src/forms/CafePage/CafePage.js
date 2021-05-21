import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-2.png";

function CafePage() {

    const content = "Hacker: I see you have made it to the café. The reason I have sent you here is so you can start your first task.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="cafePage">
            <div className="cafePage-container">
                <img className="cafePage__image" src={image} alt="coffeshop" />
            </div>
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                path="/cafe1"
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePage;
