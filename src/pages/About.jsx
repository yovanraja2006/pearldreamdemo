import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content fade-in-up">
                        <h1>About Pearl Dream</h1>
                        <p className="about-hero-subtitle">
                            Empowering dreams through excellence in education and service
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section story-section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2>Our Story</h2>
                            <p>
                                Pearl Dream was born from a simple yet powerful vision: to create a learning
                                environment where every individual can discover their potential and transform
                                their aspirations into reality.
                            </p>
                            <p>
                                What started as a passion project has blossomed into a thriving educational
                                platform, serving hundreds of students and delivering exceptional results for
                                our clients. Our journey is defined by dedication, innovation, and an unwavering
                                commitment to quality.
                            </p>
                            <p>
                                Every course we design, every service we deliver, and every student we mentor
                                reflects our core belief: that excellence is not just a goal, but a standard
                                we uphold in everything we do.
                            </p>
                        </div>
                        <div className="story-image">
                            <div className="image-placeholder">
                                <span className="placeholder-icon">✦</span>
                                <p>Excellence in Education</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section values-section gradient-bg">
                <div className="container">
                    <h2 className="section-title">Our Core Values</h2>
                    <p className="subtitle">
                        The principles that guide everything we do
                    </p>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Excellence</h3>
                            <p>
                                We strive for the highest standards in every course, every interaction,
                                and every outcome. Mediocrity has no place in our vision.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">💡</div>
                            <h3>Innovation</h3>
                            <p>
                                We continuously evolve our teaching methods and service delivery to stay
                                ahead of industry trends and meet changing needs.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Integrity</h3>
                            <p>
                                Honesty, transparency, and ethical practices form the foundation of our
                                relationships with students and clients.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🌟</div>
                            <h3>Empowerment</h3>
                            <p>
                                We believe in equipping individuals with skills and confidence to take
                                control of their professional journey.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">❤️</div>
                            <h3>Passion</h3>
                            <p>
                                Our love for education and service excellence drives us to go above and
                                beyond for every student and client.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🚀</div>
                            <h3>Growth</h3>
                            <p>
                                We foster an environment of continuous learning, both for our students
                                and ourselves, always pushing boundaries.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-card">
                            <div className="mission-icon">🎓</div>
                            <h3>Our Mission</h3>
                            <p>
                                To provide world-class education and services that transform lives,
                                empower careers, and create lasting impact in our community. We are
                                committed to making quality learning accessible, engaging, and results-driven.
                            </p>
                        </div>

                        <div className="mission-card">
                            <div className="mission-icon">🔭</div>
                            <h3>Our Vision</h3>
                            <p>
                                To be recognized as the premier destination for professional development
                                and educational excellence, where every student achieves their goals and
                                every client receives exceptional value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section why-choose-section">
                <div className="container">
                    <h2 className="section-title">Why Choose Pearl Dream?</h2>
                    <p className="subtitle">
                        What sets us apart in the world of education and professional services
                    </p>

                    <div className="why-choose-grid">
                        <div className="why-card">
                            <div className="why-number">01</div>
                            <h4>Expert Instructors</h4>
                            <p>Learn from professionals with real-world experience and proven track records</p>
                        </div>

                        <div className="why-card">
                            <div className="why-number">02</div>
                            <h4>Flexible Learning</h4>
                            <p>Choose from online, offline, or hybrid modes that fit your schedule</p>
                        </div>

                        <div className="why-card">
                            <div className="why-number">03</div>
                            <h4>Practical Focus</h4>
                            <p>Hands-on projects and real-world applications in every course</p>
                        </div>

                        <div className="why-card">
                            <div className="why-number">04</div>
                            <h4>Personalized Support</h4>
                            <p>Individual attention and guidance throughout your learning journey</p>
                        </div>

                        <div className="why-card">
                            <div className="why-number">05</div>
                            <h4>Proven Results</h4>
                            <p>High success rates and satisfied students who achieve their goals</p>
                        </div>

                        <div className="why-card">
                            <div className="why-number">06</div>
                            <h4>Lifetime Value</h4>
                            <p>Skills and knowledge that continue to benefit you throughout your career</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
