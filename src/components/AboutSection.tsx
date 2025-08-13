//Styles for the about section of JobTrack landing page

import './aboutSection.css';

function AboutSection () {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2>About</h2>
                <p>
                   JobTrack lets you keep your job search organised.
                   Keep track of your progress with intel and insightful strategies.
                   Don’t just apply - JobTrack 
                </p>
                <button className= "about-cta">Learn More</button>
            </div>
        </section>
    );
};

export default AboutSection;