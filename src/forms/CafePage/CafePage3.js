import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-2.png";
import { useHistory } from 'react-router';

function CafePage3() {

    const content = "So this is the perfect opportunity to hack into Tom’s laptop to dig up some dirt on him so that we can blackmail into giving us his company credentials.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/cafe4";
        history.push(path);
    };

    return (
        <div className="coffeeShopStory">
            <div className="cafePage-container">
                <img className="cafePage__image" src={image} alt="coffeshop" />
            </div>
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                handleNext={handleNext}
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePage3;
