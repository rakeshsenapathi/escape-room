import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-2.png";
import { useHistory } from 'react-router';

function CafePage1() {

    const content = "Notice the man with the blue tie sitting in the corner? That’s Tom Murray, he works for company Sigma which stores data and runs the application of Roxxon’s servers.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/cafe2";
        history.push(path);
    };

    return (
        <div className="coffeeShopStory">
            <div className="cafePage-container">
                <img className="cafePage__image" src={image} alt="coffeshop" />
            </div>
            <Footer textBtn="Next"
                iconNext={true}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePage1;
