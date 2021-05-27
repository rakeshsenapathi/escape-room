import React, { useState } from 'react';
import "./PhishingEmailPage.scss";
import Footer from "../../components/footer/footer.js";
import Email from "../../components/email/email.js";
import { useHistory } from 'react-router';
import CONSTANTS from '../../assets/constants/Constants';

function PhishingEmailCompose2() {

    const content_text = "Get started on that phishing email";

    const [content, setcontent] = useState(content_text);

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        setcontent("Hint: Try to click on the dropdowns for “From” and “Subject”. And navigate the email body with arrows.");
    };

    const validateCombination = (response) => {
        const { FROM, SUBJECT, BODY_INDEX } = response;
        if (FROM === CONSTANTS.MAIL_ACCOUNT_SOLUTION
            && SUBJECT === CONSTANTS.MAIL_SUBJECT_SOLUTION
            && BODY_INDEX === CONSTANTS.MAIL_BODY_SOLUTION) {
            const path = "/phishing-email-invitation";
            history.push(path);
        }
        else {
            setcontent("This doesn't look right");
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
            <Footer textBtn="Hint"
                iconNext={false}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps}
            />
        </div>
    );
};

export default PhishingEmailCompose2;
