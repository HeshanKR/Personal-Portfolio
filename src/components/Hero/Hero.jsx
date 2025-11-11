import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import proPurple from '../../assets/pro-purple.png';

const Hero = () => {
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const [contentTilt, setContentTilt] = useState({ x: 0, y: 0 });
  const [imageTilt, setImageTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.radius = Math.random() * 1.5;
        this.speed = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (1000 / this.z) + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * (1000 / this.z) + canvas.height / 2;
        const radius = this.radius * (1000 / this.z);

        if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 108, 255, ${0.8 * (1000 / this.z)})`;
          ctx.fill();
        }
      }
    }

    // Create stars
    const stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push(new Star());
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(36, 36, 36, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Mouse tilt effect for content
    const handleContentMouseMove = (e) => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate tilt based on mouse position (max 15 degrees)
        const tiltX = (mouseY / (rect.height / 2)) * 15;
        const tiltY = -(mouseX / (rect.width / 2)) * 15;

        setContentTilt({ x: tiltX, y: tiltY });
      }
    };

    const handleContentMouseLeave = () => {
      setContentTilt({ x: 0, y: 0 });
    };

    // Mouse tilt effect for image
    const handleImageMouseMove = (e) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate tilt based on mouse position (max 15 degrees)
        const tiltX = (mouseY / (rect.height / 2)) * 15;
        const tiltY = -(mouseX / (rect.width / 2)) * 15;

        setImageTilt({ x: tiltX, y: tiltY });
      }
    };

    const handleImageMouseLeave = () => {
      setImageTilt({ x: 0, y: 0 });
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('mousemove', handleContentMouseMove);
      contentElement.addEventListener('mouseleave', handleContentMouseLeave);
    }

    const imageElement = imageRef.current;
    if (imageElement) {
      imageElement.addEventListener('mousemove', handleImageMouseMove);
      imageElement.addEventListener('mouseleave', handleImageMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (contentElement) {
        contentElement.removeEventListener('mousemove', handleContentMouseMove);
        contentElement.removeEventListener('mouseleave', handleContentMouseLeave);
      }
      if (imageElement) {
        imageElement.removeEventListener('mousemove', handleImageMouseMove);
        imageElement.removeEventListener('mouseleave', handleImageMouseLeave);
      }
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="stars-canvas"></canvas>
      <div className="hero-container">
        <div
          ref={contentRef}
          className="hero-content"
          style={{
            transform: `perspective(1000px) rotateX(${contentTilt.x}deg) rotateY(${contentTilt.y}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h1>Hi, I'm <span className="highlight">Heshan Ratnaweera</span></h1>
          <p>Proactive <span className="highlight">Computer Science undergraduate</span> with practical experience in full-stack development and cloud computing. Skilled in Python, Java, JavaScript, React, Angular, FastAPI, Express.js, Spring Boot, Flask, Railway, Vercel and AWS/GCP. Committed to creating secure, scalable, and user-focused applications that deliver real-world impact.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div
            ref={imageRef}
            className="hero-image-tilt"
            style={{
              transform: `perspective(1000px) rotateX(${imageTilt.x}deg) rotateY(${imageTilt.y}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img src={proPurple} alt="Heshan Ratnaweera" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;