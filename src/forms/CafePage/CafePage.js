import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/coffee-shop-2.png";
import { useHistory } from 'react-router';

function CafePage() {

    const content = "I see you have made it to the café. The reason I have sent you here is so you can start your first task.";

    const history = useHistory();

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const handleNext = () => {
        const path = "/cafe1";
        history.push(path);
    };

    return (
        <div className="cafePage">
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

export default CafePage;
