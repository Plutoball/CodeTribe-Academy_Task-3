//Landing page hero section...
// used to showcase the value proposition and draw users to drive conversion rates
// one-liner, CTA and image 

import './HeroSection.css';
import heroImage from '../assets/hero-img.svg';

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">
                <h1>Easy Application Tracking !</h1>
                <p>Keep track of all your job applications and more...</p>
                <button className="cta-button">Get Started</button>
            </div>

            <div className="hero-image">
                <img src = {heroImage} alt="hero-img" />
            </div>

        </section>
    );
};

export default Hero;