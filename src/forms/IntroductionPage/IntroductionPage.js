import React from 'react';
import './IntroductionPage.scss';
import profileImage from '../../assets/images/profile-image-2.png';
import { useHistory } from 'react-router-dom';

function IntroductionPage() {

    const history = useHistory();

    const navigateToNext = () => {
        const path = '/teamName';
        history.push(path);
    }

    return (
        <div className="introduction">
            <div className="introduction__video">
                <iframe
                    className="introduction__iframe"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6xfpTCT4Ygw?version=3"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer;
                    autoplay; clipboard-write;
                    encrypted-media; gyroscope;
                    picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <h1 className="heading-primary heading-primary--sub introduction__video-text">Click "Play" to watch the video</h1>
            <footer className="footer">
                <div className="footer__box">
                    <img className="footer__profile-image" src={profileImage} alt="footer" />
                    <h1 className="footer__profile-text">Morpheus: Instructions appear here:</h1>
                </div>
                <div
                    className="footer__btn"
                    onClick={navigateToNext}>
                    I understand the instructions
                </div>
            </footer>
        </div>
    );
}

export default IntroductionPage;