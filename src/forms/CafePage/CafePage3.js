import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";

function CafePage3() {

    const content = "So this is the perfect opportunity to hack into Tom’s laptop to dig up some dirt on him so that we can blackmail into giving us his company credentials.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="coffeeShopStory">
            <Footer textBtn="Next"
                iconNext={true}
                content={content}
                path="/cafe4"
                styleProps={styleProps}
            />
        </div>
    );
};

export default CafePage3;
