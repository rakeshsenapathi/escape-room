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
            <div className="introduction__video bg-video">
                <video className="bg-video__content">
                    <source src="" type="video/mp4" />
                    <source src="" type="video/webm" />
                    <source />
                </video>
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