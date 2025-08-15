//This will serve as the landing page to introduce users to the JobTrack App
import {useState} from "react";
import TopNav from "../components/TopNav";
import Hero from "../components/HeroSection";
import './landing.css'
import AboutSection from "../components/AboutSection";
import Features from "../components/FeaturesSection";
import Footer from "../components/FooterSection";
import AuthModal from "../components/AuthModal";

function LandingPage() {

  const [authMode, setAuthMode] = useState<'signin' | 'sign-up' | null>(null);

  const handleClose = () => setAuthMode(null);
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
          {label: 'Sign In', onClick: () => setAuthMode('signin'), isButton: true}
        ]}/>
        {/*Authentication/user signup or signin*/}
        {authMode && (
          <AuthModal mode={authMode} onClose={handleClose} />
        )}
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