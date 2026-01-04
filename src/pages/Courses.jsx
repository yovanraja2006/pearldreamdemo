import { useState } from 'react';
import './Courses.css';

const Courses = () => {
    const [filter, setFilter] = useState('all');

    const courses = [
        {
            id: 1,
            title: 'Web Development Mastery',
            description: 'Master modern web development with HTML, CSS, JavaScript, and React. Build stunning, responsive websites from scratch.',
            duration: '12 weeks',
            mode: 'Hybrid',
            level: 'Beginner to Advanced',
            category: 'development'
        },
        {
            id: 2,
            title: 'Digital Marketing Excellence',
            description: 'Learn SEO, social media marketing, content strategy, and analytics to grow businesses online effectively.',
            duration: '8 weeks',
            mode: 'Online',
            level: 'Intermediate',
            category: 'marketing'
        },
        {
            id: 3,
            title: 'Data Science Fundamentals',
            description: 'Dive into data analysis, visualization, and machine learning with Python. Transform data into insights.',
            duration: '16 weeks',
            mode: 'Offline',
            level: 'Advanced',
            category: 'data'
        },
        {
            id: 4,
            title: 'Graphic Design Pro',
            description: 'Create stunning visual designs using Adobe Creative Suite. Master typography, color theory, and composition.',
            duration: '10 weeks',
            mode: 'Hybrid',
            level: 'Beginner',
            category: 'design'
        },
        {
            id: 5,
            title: 'Business Analytics',
            description: 'Learn to analyze business data, create dashboards, and make data-driven decisions using Excel and Power BI.',
            duration: '6 weeks',
            mode: 'Online',
            level: 'Intermediate',
            category: 'business'
        },
        {
            id: 6,
            title: 'Mobile App Development',
            description: 'Build native mobile applications for iOS and Android using React Native and modern development tools.',
            duration: '14 weeks',
            mode: 'Hybrid',
            level: 'Advanced',
            category: 'development'
        },
        {
            id: 7,
            title: 'Content Writing & Copywriting',
            description: 'Master the art of persuasive writing for web, marketing, and brand storytelling. Create compelling content.',
            duration: '8 weeks',
            mode: 'Online',
            level: 'Beginner',
            category: 'marketing'
        },
        {
            id: 8,
            title: 'UI/UX Design Essentials',
            description: 'Learn user-centered design principles, wireframing, prototyping, and usability testing for digital products.',
            duration: '10 weeks',
            mode: 'Offline',
            level: 'Intermediate',
            category: 'design'
        },
        {
            id: 9,
            title: 'Financial Management',
            description: 'Understand financial planning, budgeting, investment strategies, and risk management for business success.',
            duration: '12 weeks',
            mode: 'Hybrid',
            level: 'Advanced',
            category: 'business'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Courses' },
        { id: 'development', name: 'Development' },
        { id: 'design', name: 'Design' },
        { id: 'marketing', name: 'Marketing' },
        { id: 'business', name: 'Business' },
        { id: 'data', name: 'Data Science' }
    ];

    const filteredCourses = filter === 'all'
        ? courses
        : courses.filter(course => course.category === filter);

    const getModeClass = (mode) => {
        switch (mode.toLowerCase()) {
            case 'online': return 'mode-online';
            case 'offline': return 'mode-offline';
            case 'hybrid': return 'mode-hybrid';
            default: return '';
        }
    };

    return (
        <div className="courses-page">
            {/* Hero Section */}
            <section className="courses-hero">
                <div className="container">
                    <div className="courses-hero-content fade-in-up">
                        <h1>Our Courses</h1>
                        <p className="courses-hero-subtitle">
                            Discover transformative learning experiences designed to elevate your skills and career
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="section filter-section">
                <div className="container">
                    <div className="filter-buttons">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                                onClick={() => setFilter(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="section courses-section">
                <div className="container">
                    <div className="courses-grid">
                        {filteredCourses.map(course => (
                            <div key={course.id} className="course-card">
                                <div className="course-header">
                                    <span className={`course-mode ${getModeClass(course.mode)}`}>
                                        {course.mode}
                                    </span>
                                    <span className="course-level">{course.level}</span>
                                </div>

                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-description">{course.description}</p>

                                <div className="course-meta">
                                    <div className="meta-item">
                                        <span className="meta-icon">⏱️</span>
                                        <span className="meta-text">{course.duration}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="meta-icon">📚</span>
                                        <span className="meta-text">{course.mode}</span>
                                    </div>
                                </div>

                                <button className="course-btn">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>

                    {filteredCourses.length === 0 && (
                        <div className="no-courses">
                            <p>No courses found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section courses-cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>Can't Find What You're Looking For?</h2>
                        <p>We offer custom courses tailored to your specific needs and goals</p>
                        <a href="/contact" className="btn btn-primary">Contact Us</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;
