import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>

                <div className="container">
                    <div className="hero-content fade-in-up">
                        <div className="hero-badge">✦ Premium Learning Experience ✦</div>
                        <h1 className="hero-title">
                            Welcome to <span className="gradient-text">Pearl Dream</span>
                        </h1>
                        <p className="hero-subtitle">
                            Where aspirations meet excellence. Discover transformative courses and witness
                            the remarkable work we've delivered for our valued customers.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/courses" className="btn btn-primary">
                                View Courses
                            </Link>
                            <Link to="/work" className="btn btn-secondary">
                                Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🎓</div>
                            <h3>Expert-Led Courses</h3>
                            <p>Learn from industry professionals with years of real-world experience</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Flexible Learning</h3>
                            <p>Online, offline, and hybrid modes to suit your lifestyle and preferences</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🏆</div>
                            <h3>Proven Results</h3>
                            <p>Join hundreds of successful students who've achieved their goals</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="section about-preview gradient-bg">
                <div className="container">
                    <div className="about-preview-content">
                        <div className="about-preview-text">
                            <h2>Crafting Excellence Since Day One</h2>
                            <p>
                                At Pearl Dream, we believe in the transformative power of quality education.
                                Our mission is to empower individuals with the skills, knowledge, and confidence
                                they need to excel in their chosen fields.
                            </p>
                            <p>
                                Every course is meticulously designed, every service thoughtfully delivered,
                                and every student success story is a testament to our commitment to excellence.
                            </p>
                            <Link to="/about" className="btn btn-primary">
                                Learn More About Us
                            </Link>
                        </div>
                        <div className="about-preview-stats">
                            <div className="stat-card">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Students Trained</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Courses Offered</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Begin Your Journey?</h2>
                        <p>Join Pearl Dream today and unlock your full potential</p>
                        <Link to="/contact" className="btn btn-primary">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
