import React from 'react';
import './Experience.css';
import AnimatedBackground from '../shared/AnimatedBackground';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <AnimatedBackground />
      <div className="container">
        <h2>Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="experience-card">
                <div className="experience-header">
                  <h3>Software Engineer Intern</h3>
                  <div className="duration-badges">
                    <span className="duration">April 2025 - October 2025</span>
                    <span className="duration">6 months</span>
                  </div>
                </div>
                <div className="experience-meta">
                  <p className="company">Sri Lanka Ports Authority – Mahapola Ports and Maritime Academy</p>
                  <p className="location">Colombo, Sri Lanka</p>
                </div>
                <div className="experience-details">
                  <ul>
                    <li>Developed and maintained the Classroom Booking System using React, Express.js, and MySQL, improving scheduling efficiency by effectively cutting down 75% of the manual processes involved in the previous manual file-based system.</li>
                    <li>Designed Course Cost & Profit Calculation System, enabling accurate financial tracking and reporting for courses.</li>
                    <li>Implemented custom role-based access authentication with token rotation, SQL injection protection, rate limiting, and XSS protection using Node Helmet, significantly enhancing application security.</li>
                    <li>Collaborated with a team of 3 interns to deliver multiple LMS modules within deadlines.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;