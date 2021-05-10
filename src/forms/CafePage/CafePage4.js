import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";

function CafePage4() {

    const content = "Now listen carefully, in order to hack into his company’s laptop, you will need to find the admin password of the wifi router in the café.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="coffeeShopStory">
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                path="/cafe5"
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePage4;
