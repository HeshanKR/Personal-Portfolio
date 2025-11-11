import React from 'react';
import './About.css';
import proPic from '../../assets/pro-pic.jpg';
import proPurple from '../../assets/pro-purple.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a proactive Computer Science undergraduate with practical experience in full-stack development and cloud computing.
              Completed a Software Engineering internship at the Sri Lanka Ports Authority, developing key ERP and LMS modules
              such as a Classroom Booking System and Course Cost/Profit Tracker. Skilled in Python, Java, JavaScript, React, Angular,
              FastAPI, Express.js, Spring Boot, Flask, Railway, Vercel and AWS/GCP. Committed to creating secure, scalable, and
              user-focused applications that deliver real-world impact.
            </p>
            <p>
              My journey in programming started with curiosity and has evolved into a deep passion
              for creating efficient, user-friendly applications. I believe in continuous learning
              and staying updated with the latest trends in technology.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years of Study</p>
              </div>
              <div className="stat">
                <h3>6+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container" style={{backgroundImage: `url(${proPic})`}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;