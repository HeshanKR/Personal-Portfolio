import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="education-card">
                <div className="education-header">
                  <h3>BSc.(Hons) in Computer Science</h3>
                  <div className="duration-badges">
                    <span className="duration">2024 - Present</span>
                    <span className="status ongoing">Ongoing</span>
                  </div>
                </div>
                <div className="education-meta">
                  <p className="institution">IIT, Colombo (Affiliated with University of Westminster, UK)</p>
                  <p className="details">Completed 2 years of 4-year program • Grade Average: 77%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="education-card">
                <div className="education-header">
                  <h3>Foundation in Higher Education in IT</h3>
                  <div className="duration-badges">
                    <span className="duration">2023</span>
                    <span className="achievement">Certificate of Distinction</span>
                  </div>
                </div>
                <div className="education-meta">
                  <p className="institution">IIT Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="education-card">
                <div className="education-header">
                  <h3>GCE Ordinary Level</h3>
                  <div className="duration-badges">
                    <span className="duration">2011 - 2022</span>
                    <span className="results">6 A's and 3 B's</span>
                  </div>
                </div>
                <div className="education-meta">
                  <p className="institution">Louvre International School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;