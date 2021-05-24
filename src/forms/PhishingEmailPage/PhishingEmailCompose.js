import React from 'react';
import "./PhishingEmailPage.scss";
import Footer from "../../components/footer/footer.js";
import Email from "../../components/email/email.js";
import { useHistory } from 'react-router';
import CONSTANTS from '../../assets/constants/Constants';

function PhishingEmailCompose() {

    const content = "Now that we have Sarah’s email ID, your next task is to create a phishing email to get Sarah to reset her login details. Remember a phishing email is a way of luring individuals to reveal sensitive information like passwords. This only works if we can create a legitimate-looking email to convince the target to trust us.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/cafe2";
        history.push(path);
    };

    const validateCombination = (response) => {
        const { FROM, SUBJECT, BODY_INDEX } = response;
        if (FROM === CONSTANTS.MAIL_ACCOUNT_SOLUTION
            && SUBJECT === CONSTANTS.MAIL_SUBJECT_SOLUTION
            && BODY_INDEX === CONSTANTS.MAIL_BODY_SOLUTION) {
            const path = "/";
            history.push(path);
        }
    }


    const handleSend = (response) => {
        validateCombination(response);
    }

    return (
        <div className="phishing-composemail">
            {/* <div className="phishing-composemail__conversation">
            </div> */}
            <Email
                handleSend={handleSend}
            />
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
