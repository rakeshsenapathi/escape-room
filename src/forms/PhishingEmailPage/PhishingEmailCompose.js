import React from 'react';
import "./PhishingEmailPage.scss";
import Footer from "../../components/footer/footer.js";
import { useHistory } from 'react-router';

function PhishingEmailCompose() {

    const content = "Now that we have Sarah’s email ID, your next task is to create a phishing email to get Sarah to reset her login details.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/phishing-email-compose-1";
        history.push(path);
    };

    return (
        <div className="phishing-composemail">
            {/* <div className="phishing-composemail__conversation">
            </div> */}
            {/* <Email
                handleSend={handleSend}
            /> */}
                
            <Footer textBtn="Next"
                iconNext={true}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps}
            />
        </div>
    );
};

export default PhishingEmailCompose;
