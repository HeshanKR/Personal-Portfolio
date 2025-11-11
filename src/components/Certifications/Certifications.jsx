import React from 'react';
import './Certifications.css';
import AnimatedBackground from '../shared/AnimatedBackground';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <AnimatedBackground />
      <div className="container">
        <h2>Certifications & Courses</h2>
        <div className="certifications-grid">
          <div className="certification-item">
            <div className="certification-content">
              <h3>Build Rest APIs using FastAPI</h3>
              <p className="certification-provider">LinkedIn Learning</p>
              <span className="certification-date">24/12/2024</span>
            </div>
          </div>
          <div className="certification-item">
            <div className="certification-content">
              <h3>Java Threads</h3>
              <p className="certification-provider">LinkedIn Learning</p>
              <span className="certification-date">02/11/2024</span>
            </div>
          </div>
          <div className="certification-item">
            <div className="certification-content">
              <h3>Springboot for beginners</h3>
              <p className="certification-provider">Amigoscode</p>
              <span className="certification-date">27/10/2024</span>
            </div>
          </div>
          <div className="certification-item">
            <div className="certification-content">
              <h3>Pandas Essential Training</h3>
              <p className="certification-provider">LinkedIn Learning</p>
              <span className="certification-date">08/09/2024</span>
            </div>
          </div>
          <div className="certification-item">
            <div className="certification-content">
              <h3>Numpy Essential Training</h3>
              <p className="certification-provider">LinkedIn Learning</p>
              <span className="certification-date">17/08/2024</span>
            </div>
          </div>
          <div className="certification-item">
            <div className="certification-content">
              <h3>SQL Essential Training</h3>
              <p className="certification-provider">LinkedIn Learning</p>
              <span className="certification-date">08/08/2024</span>
            </div>
          </div>
          <div className="certification-item">
            <div className="certification-content">
              <h3>Learning Java 17</h3>
              <p className="certification-provider">LinkedIn Learning</p>
              <span className="certification-date">06/06/2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;