// A nice features section for the landing page//

import feature1 from '../assets/feature1.svg';
import feature2 from '../assets/feature2.svg';
import feature3 from '../assets/feature3.svg';

import './featuresSection.css';

//Making the dispaly cards native to this component to avoid making many redundent components//

type Feature = {
    img: string;
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        img: feature1,
        title: 'Track Applications',
        description:'Keep track of job applications in an organised space.'
    },
    {
        img: feature2,
        title: 'Insights and analytics',
        description:'Improve your chances of geting work with key candidacy insights and analytics.'
    },
    {
        img: feature3,
        title: 'Smart Reminders',
        description:'Never miss a deadline with automated reminders for follow-ups, tasks and intervews.'
    },
];

const Features: React.FC = () => {
    return (
        <section className ="features-section">
            <h2>Features</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <img src={feature.img} alt= {feature.title} />
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;