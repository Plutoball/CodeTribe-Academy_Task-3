//Footer section

import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className ="footer">
            {/*CTA part*/}
            <div className="footer-cta">
                <h2>Level Up Today</h2>
                <div className ="cta-input-group">
                    <input
                    type='email'
                    placeholder='Enter your email'
                    aria-label='Email address'
                    />
                    <button type = "button">Sign Up</button>
                </div>
            </div>

            {/*Links part*/}
            <div className="footer-links">
                <div className="footer-column">
                    <h4>Product</h4>
                    <ul>
                        <li><a href= "/features">Features</a></li>
                        <li><a href = "/pricing">Pricing</a></li>
                        <li><a href = "/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li><a href= "/about">About</a></li>
                        <li><a href = "/careers">Careers</a></li>
                        <li><a href = "/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href= "/privacy">Privacy Policy</a></li>
                        <li><a href = "/terms">Terms of Service</a></li>
                        <li><a href = "/cookies">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>2025 JobTrack. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;