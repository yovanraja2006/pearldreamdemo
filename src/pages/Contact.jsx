import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Since this is a static site, we'll just show a success message
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content fade-in-up">
                        <h1>Get in Touch</h1>
                        <p className="contact-hero-subtitle">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <p className="contact-intro">
                                Reach out to us through any of the following channels. We're here to help you achieve your goals.
                            </p>

                            <div className="info-cards">
                                <div className="info-card">
                                    <div className="info-icon">📧</div>
                                    <h3>Email</h3>
                                    <p>info@pearldream.com</p>
                                    <p>support@pearldream.com</p>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">📱</div>
                                    <h3>Phone</h3>
                                    <p>+1 (234) 567-8900</p>
                                    <p>+1 (234) 567-8901</p>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">📍</div>
                                    <h3>Location</h3>
                                    <p>123 Pearl Street</p>
                                    <p>Dream City, DC 12345</p>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">⏰</div>
                                    <h3>Business Hours</h3>
                                    <p>Monday - Friday: 9AM - 6PM</p>
                                    <p>Saturday: 10AM - 4PM</p>
                                </div>
                            </div>

                            <div className="social-links">
                                <h3>Follow Us</h3>
                                <div className="social-icons">
                                    <a href="#" className="social-icon" aria-label="Facebook">📘</a>
                                    <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
                                    <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
                                    <a href="#" className="social-icon" aria-label="Instagram">📷</a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <div className="form-header">
                                <h2>Send Us a Message</h2>
                                <p>Fill out the form below and we'll get back to you shortly</p>
                            </div>

                            {submitted && (
                                <div className="success-message">
                                    <span className="success-icon">✓</span>
                                    <p>Thank you! Your message has been received. We'll be in touch soon.</p>
                                </div>
                            )}

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (234) 567-8900"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section map-section">
                <div className="container">
                    <div className="map-placeholder">
                        <div className="map-content">
                            <span className="map-icon">📍</span>
                            <h3>Visit Our Office</h3>
                            <p>123 Pearl Street, Dream City, DC 12345</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
