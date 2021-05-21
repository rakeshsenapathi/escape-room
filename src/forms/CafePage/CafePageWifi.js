import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/wifi-router-1.png";
import "../../common-styles/main.scss";

function CafePageWifi() {

    const content = "Wifi Screen";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="cafePage-wifi">
            <div className="cafePage-wifi__container">
                <img className="cafePage-wifi__image" src={image} alt="coffeshop" />
                <form className="cafePage-wifi__form alignAsSingleRow form-single">
                    <input
                        type="text"
                        required
                        placeholder="Enter the password"
                        className="cafePage-wifi__form-input form-single__input"
                    />
                    <button
                        className="form__btn btn btn--default"
                    >Done</button>
                </form>
            </div>
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                path="/cafe3"
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePageWifi;
