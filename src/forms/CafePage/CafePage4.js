import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-2.png";
import { useHistory } from 'react-router';

function CafePage4() {

    const content = "Now listen carefully, in order to hack into his company’s laptop, you will need to find the admin password of the wifi router in the café.";

    const history = useHistory();

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const handleClickOption1 = (event) => {
        const path = "/cafeMenu";
        history.push(path);
    }

    const handleClickOption2 = (event) => {
        const path = '/cafeWifi';
        history.push(path);
    }

    return (
        <div className="coffeeShopStory">
            <div className="cafePage-container">
                <img className="cafePage__image" src={image} alt="coffeshop" />
                <div className="cafePage__highlight-shape cafePage__highlight-shape--1"
                    onClick={handleClickOption1}></div>
                <div className="cafePage__highlight-shape cafePage__highlight-shape--2"
                    onClick={handleClickOption2}></div>
            </div>
            <Footer textBtn="Hint"
                iconNext={false}
                content={content}
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePage4;
