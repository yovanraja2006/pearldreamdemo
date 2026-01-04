import './Work.css';

const Work = () => {
    const services = [
        {
            id: 1,
            title: 'Custom Training Programs',
            description: 'Designed and delivered specialized training programs for corporate teams, resulting in improved productivity and skill development.',
            outcome: '95% participant satisfaction rate',
            icon: '🎯',
            category: 'Training'
        },
        {
            id: 2,
            title: 'E-Learning Platform Development',
            description: 'Built a comprehensive online learning platform for a leading educational institution, enabling seamless remote education.',
            outcome: '10,000+ active users within 6 months',
            icon: '💻',
            category: 'Development'
        },
        {
            id: 3,
            title: 'Curriculum Design & Consulting',
            description: 'Collaborated with educational organizations to redesign course curricula, making them more engaging and industry-relevant.',
            outcome: '40% increase in student engagement',
            icon: '📚',
            category: 'Consulting'
        },
        {
            id: 4,
            title: 'Professional Certification Programs',
            description: 'Developed industry-recognized certification programs that helped professionals advance their careers and gain credentials.',
            outcome: '500+ certified professionals',
            icon: '🏆',
            category: 'Certification'
        },
        {
            id: 5,
            title: 'Corporate Workshops',
            description: 'Conducted intensive workshops on leadership, communication, and technical skills for Fortune 500 companies.',
            outcome: 'Delivered 50+ workshops across 15 organizations',
            icon: '🎓',
            category: 'Workshops'
        },
        {
            id: 6,
            title: 'Learning Management System',
            description: 'Implemented and customized LMS solutions for businesses to track employee training and development progress.',
            outcome: 'Streamlined training for 2,000+ employees',
            icon: '⚙️',
            category: 'Technology'
        },
        {
            id: 7,
            title: 'Content Creation Services',
            description: 'Produced high-quality educational content including video tutorials, interactive modules, and assessment materials.',
            outcome: '200+ hours of premium content created',
            icon: '🎬',
            category: 'Content'
        },
        {
            id: 8,
            title: 'Career Coaching & Mentorship',
            description: 'Provided one-on-one career guidance and mentorship to professionals seeking career transitions and growth.',
            outcome: '85% of mentees achieved career goals',
            icon: '🌟',
            category: 'Coaching'
        },
        {
            id: 9,
            title: 'Educational Technology Consulting',
            description: 'Advised institutions on adopting modern educational technologies and digital transformation strategies.',
            outcome: 'Helped 20+ institutions modernize',
            icon: '🚀',
            category: 'Consulting'
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'HR Director, TechCorp Inc.',
            text: 'Pearl Dream transformed our employee training program. The custom curriculum they designed was exactly what we needed. Highly professional and results-driven!',
            rating: 5
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Founder, EduStart',
            text: 'Working with Pearl Dream was a game-changer for our startup. Their e-learning platform development expertise helped us launch successfully and scale rapidly.',
            rating: 5
        },
        {
            id: 3,
            name: 'Priya Sharma',
            role: 'Learning & Development Manager',
            text: 'The workshops conducted by Pearl Dream were exceptional. Our team gained valuable skills and the engagement levels were through the roof. Would definitely recommend!',
            rating: 5
        }
    ];

    return (
        <div className="work-page">
            {/* Hero Section */}
            <section className="work-hero">
                <div className="container">
                    <div className="work-hero-content fade-in-up">
                        <h1>Our Work</h1>
                        <p className="work-hero-subtitle">
                            Delivering excellence through innovative solutions and transformative services
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <h2 className="section-title">Services We've Delivered</h2>
                    <p className="subtitle">
                        Real projects, real impact, real results for our valued clients
                    </p>

                    <div className="services-grid">
                        {services.map(service => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <div className="service-category">{service.category}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-outcome">
                                    <span className="outcome-label">Outcome:</span>
                                    <span className="outcome-text">{service.outcome}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats-section gradient-bg">
                <div className="container">
                    <h2 className="section-title">Our Impact in Numbers</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-icon">👥</div>
                            <div className="stat-value">5,000+</div>
                            <div className="stat-label">Professionals Trained</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">🏢</div>
                            <div className="stat-value">100+</div>
                            <div className="stat-label">Organizations Served</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">📊</div>
                            <div className="stat-value">250+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">⭐</div>
                            <div className="stat-value">98%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="subtitle">
                        Don't just take our word for it - hear from those we've worked with
                    </p>

                    <div className="testimonials-grid">
                        {testimonials.map(testimonial => (
                            <div key={testimonial.id} className="testimonial-card">
                                <div className="testimonial-stars">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="star">⭐</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <div className="author-name">{testimonial.name}</div>
                                        <div className="author-role">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section work-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Work With Us?</h2>
                        <p>Let's create something amazing together</p>
                        <a href="/contact" className="btn btn-primary">Start a Project</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
