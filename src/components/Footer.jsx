import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-icon">✦</span>
                            <span className="logo-text">Pearl Dream</span>
                        </div>
                        <p className="footer-tagline">
                            Transforming aspirations into achievements through excellence in education
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/courses">Courses</Link>
                        </div>

                        <div className="footer-column">
                            <h4>Services</h4>
                            <Link to="/work">Our Work</Link>
                            <Link to="/contact">Contact</Link>
                        </div>

                        <div className="footer-column">
                            <h4>Connect</h4>
                            <a href="mailto:info@pearldream.com">info@pearldream.com</a>
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Pearl Dream. All rights reserved.</p>
                    <p className="footer-credit">Crafted with excellence and passion</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
