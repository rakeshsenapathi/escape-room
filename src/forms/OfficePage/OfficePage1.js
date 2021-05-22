import React from 'react';
import './OfficePage.scss';
import Footer from "../../components/footer/footer.js";
import image from "../../assets/images/outside-office-1.png";
import { useHistory } from 'react-router';

function OfficePage1() {

    const content = "Wait outside Sigma. We may have a slight problem here. Notice how all the employees have to scan their face in order to enter the office building and since you’re not an employee we will need to come up with a plan.";

    const styleProps = {
        "width": "18.9rem",
        "height": "6.2rem"
    }

    const history = useHistory();

    const handleNext = () => {
        const path = "/office-outside-2";
        history.push(path);
    };

    return (
        <div className="office-outside">
            <img src={image}
                alt="Outside office"
                className="office-outside__image" />
            <Footer textBtn="Next"
                iconNext={true}
                isPlayerNarrative={false}
                handleNext={handleNext}
                content={content}
                styleProps={styleProps}
            />
        </div >
    );
};

export default OfficePage1;
