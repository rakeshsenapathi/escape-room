import React from 'react';
import './IntroductionPage.scss';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function IntroductionPage() {

    const history = useHistory();

    const isTablet = useMediaQuery({ query: '(max-width: 1224px' });

    const navigateToNext = () => {
        const path = '/teamName';
        history.push(path);
    }

    return (
        <div className="introduction">
            {isTablet && (<div className="introduction__video--tablet">
                <iframe title="test" src="https://player.vimeo.com/video/556865660?autoplay=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>)}
            {!isTablet && (<div className="introduction__video">
                <iframe title="test" src="https://player.vimeo.com/video/556865660?autoplay=1&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>)}
            {!isTablet && <h1 className="heading-primary heading-primary--sub introduction__video-text">Click "Play" to watch the video</h1>}
            {isTablet && <h1 className="heading-primary heading-primary--sub introduction__video-text--tablet">Click "Play" to watch the video</h1>}
            <footer className="footer">
                {/* <div className="footer__box">
                    <img className="footer__profile-image" src={profileImage} alt="footer" />
                    <h1 className="footer__profile-text">Morpheus: Instructions appear here:</h1>
                </div> */}
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