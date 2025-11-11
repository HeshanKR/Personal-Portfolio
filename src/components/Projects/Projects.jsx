import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Electric Cube Cosmos',
      description: 'A mesmerizing 3D web application featuring a massive glowing electric cube at the center of a cosmic scene, surrounded by three orbiting streams of smaller electric cubes in blue and purple hues. The scene creates a stunning visual effect of energy particles flowing through space, with realistic starfields and cinematic camera movements.',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'React Three Drei', 'React Three Postprocessing', 'Vite', 'Vercel', 'Railway'],
      github: 'https://github.com/HeshanKR/Electro-cubes-WebGL-.git',
      demo: 'https://electro-cubes-web-gl.vercel.app/'
    },
    {
      title: 'Modella',
      description: 'Collaborated with a team of six to develop an application connecting models and fashion brands, incorporating features like profile management, categorization, filtering, secure communication, and preference driven recommendations. The application offers user friendly intuitive interfaces, swipe based system which can be used by brands to scout for models and vise versa, the applications preferences based filtering makes the match-making smoother for the clients.',
      technologies: ['React', 'FastAPI', 'MongoDB', 'AWS S3', 'Auth0', 'TypeScript', 'Python', 'Vercel'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-Time Ticketing System',
      description: 'Developed a full-stack ticket-selling platform using a three-tier architecture for scalability and maintainability. Implemented multi-threaded processing with Reentrant Locks to synchronize concurrent ticket purchases and ensure data consistency. Developed APIs with Spring Boot and a responsive front-end using React + TypeScript. Optimized MySQL queries and transactions for reliability and performance under heavy load.',
      technologies: ['React', 'Springboot', 'MySQL', 'TypeScript', 'Java'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Secure Login System',
      description: 'Developed a secure authentication platform with role-based access control and rate limiting to enhance security and performance. Implemented CSRF protection, CSP-based XSS prevention, session hijacking defenses, refresh token flow, and OAuth token forgery protection. Utilized Angular for a dynamic front end and Express.js for a robust backend API with MySQL for persistent user data storage.',
      technologies: ['Angular', 'Express.js', 'MySQL', 'TypeScript', 'JavaScript'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Neural Style Transfer Application',
      description: 'Built and deployed an Angular web application that applies artistic styles to images in real time using Magenta.js (TensorFlow.js-based), the frontend was hosted on Vercel and the backend was hosted on Railway. Implemented image upload, live preview, and download features for a seamless user experience. Integrated client-side neural style transfer for efficient and interactive image transformation without server dependency.',
      technologies: ['Angular', 'Magenta.js', 'HTML/CSS', 'TypeScript', 'Railway', 'Vercel', 'Flask'],
      github: 'https://github.com/HeshanKR',
      demo: 'https://neural-style-transfer-remastered-fr.vercel.app/'
    },
    {
      title: 'Breast Cancer Detection using Machine Learning',
      description: 'Developed a machine learning model to classify breast cancer tumors as benign or malignant using the Breast Cancer Wisconsin dataset. Implemented data preprocessing, feature selection, and normalization to improve model performance and reliability. Trained and evaluated models including Logistic Regression and K-Nearest Neighbors (KNN) using accuracy, precision, recall, F1-score, and ROC-AUC metrics. Visualized model performance with confusion matrices and ROC curves to assess classification effectiveness.',
      technologies: ['Python', 'Pandas', 'scikit-learn'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="btn small">GitHub</a>
                  <a href={project.demo} className="btn small secondary">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;