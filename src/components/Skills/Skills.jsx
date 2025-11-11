import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Tools',
      skills: ['React', 'Angular', 'FastAPI', 'Spring Boot', 'Express.js', 'Postman', 'Git']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'SQLite']
    },
    {
      title: 'Cloud Platforms & APIs',
      skills: ['AWS', 'GCP', 'Auth0', 'Google APIs', 'Redis']
    },
    {
      title: 'Methodologies',
      skills: ['Agile', 'Scrum', 'Monolithic']
    },
    {
      title: 'Soft Skills',
      skills: ['Commitment', 'Detail-Oriented', 'Fast-Learner']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-category">
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    style={{
                      animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                    }}
                  >
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;