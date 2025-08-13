//This will serve as the landing page to introduce users to the JobTrack App
import TopNav from "../components/TopNav";
import Hero from "../components/HeroSection";
import './landing.css'
import AboutSection from "../components/AboutSection";
import Features from "../components/FeaturesSection";
import Footer from "../components/FooterSection";


function LandingPage() {
    return (
        <div className="landing-page">
        {/*Top Navigation*/}    
        <TopNav
        theme='light'
        useFullLogo={true}
        links={[
          {label: 'About', href:'/about'},
          {label: 'Features', href:'/features'},
          {label: 'Blog', href:'/blog'},
          {label: 'Sign In', href:'/sign-in'}
        ]}/>
        {/*Sections*/}
        <Hero/>
        <AboutSection/>
        <Features/>
        {/*Footer*/}
        <Footer/>
        </div>
    );
}

export default LandingPage;