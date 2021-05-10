import React from 'react';
import "./CafePage.scss";
import Footer from "../../components/footer/footer.js";

function CafePage() {

    const content = "Hacker: I see you have made it to the café. The reason I have sent you here is so you can start your first task.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    return (
        <div className="coffeeShopStory">
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
