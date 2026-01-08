import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import './App.css';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = {
    languages: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
    frameworks: ['Django', 'Flask', 'React.js', 'Bootstrap'],
    databases: ['PostgreSQL', 'MySQL', 'SQLite'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker (Basics)'],
    other: ['REST APIs', 'CRUD operations', 'MVT architecture', 'JSON', 'AJAX']
  };

  const projects = [
    {
      title: 'Message Cyclogram Generator',
      tech: ['Python', 'Tkinter', 'Pandas', 'OpenPyXL', 'NumPy'],
      description: [
        'Built a desktop-based data management tool using tkinter for a graphical user interface',
        'Implemented features for importing and exporting data from Excel and CSV files',
        'Categorized entries into unique and duplicated records, displaying them in separate tables'
      ]
    },
    {
      title: 'Image Classification using CNN',
      tech: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'OpenCV', 'Matplotlib', 'Kaggle'],
      description: [
        'Deployed a Convolutional Neural Network (CNN) model for tumor detection in medical images',
        'Utilized popular datasets from Kaggle with 500-600 images',
        'Achieved 82-86% accuracy on the dataset'
      ]
    },
    {
      title: 'Database Management System',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      description: [
        'Developed a full-stack web application to manage online quizzes with user login, quiz participation, and score tracking',
        'Implemented secure admin panel to add, update, and delete quiz questions dynamically from a MySQL database'
      ]
    }
  ];

  const softSkills = ['Team Collaboration', 'Problem Solving', 'Quick Learner', 'Time Management'];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Thirumal S</div>
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('experience')}>Experience</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <img 
              src="/Thirumal_Photo.JPG" 
              alt="Thirumal S" 
              className="profile-image"
            />
          <h1 className="hero-title">Hi, I'm Thirumal S</h1>
          <h2 className="hero-subtitle">Full Stack Python Developer</h2>
          <p className="hero-description">
            Self-motivated developer with hands-on experience in building scalable web applications 
            using Python, Django, React.js, and SQL. Passionate about creating innovative software solutions.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Contact Me
            </button>
          </div>
          <div className="social-links">
            <a href="https://github.com/Thirumal9742" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/thirumal-s-8b26282a6/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:thiruthirumal415@gmail.com">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Full Stack Python Developer with a strong foundation in developing scalable web applications. 
                I have proven ability to complete full development lifecycle projects from design to deployment.
              </p>
              <p>
                Currently pursuing B.E in Information Science Engineering from SJB Institute Of Technology, 
                Bengaluru (2021-2025) with a CGPA of 7.49/10.
              </p>
            </div>
            <div className="about-info">
              <div className="info-item">
                <MapPin size={20} />
                <span>Bengaluru, India</span>
              </div>
              <div className="info-item">
                <Phone size={20} />
                <span>+91-9742691741</span>
              </div>
              <div className="info-item">
                <Mail size={20} />
                <span>thiruthirumal415@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                {skills.languages.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                {skills.frameworks.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-tags">
                {skills.databases.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Other Technologies</h3>
              <div className="skill-tags">
                {skills.other.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-tags">
                {softSkills.map((skill, idx) => (
                  <span key={idx} className="skill-tag soft">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ul className="project-description">
                  {project.description.map((desc, descIdx) => (
                    <li key={descIdx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-card">
            <div className="experience-header">
              <h3>Python Developer Intern</h3>
              <span className="experience-period">Sep 2023 - Oct 2023</span>
            </div>
            <h4 className="experience-company">Bharath Electronics Ltd., Bangalore</h4>
            <ul className="experience-description">
              <li>Developed RESTful APIs using Django REST Framework for a task management module</li>
              <li>Assisted in integrating front-end React components with backend APIs</li>
            </ul>
          </div>
          <div className="certification-section">
            <h3 className="certification-title">Certifications</h3>
            <div className="certification-item">
              <span className="cert-name">Full Stack Web Development with Django</span>
              <span className="cert-org">Itvedant</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-text">
              I'm currently seeking challenging entry-level opportunities to apply my technical skills 
              and contribute to innovative software solutions. Feel free to reach out!
            </p>
            <div className="contact-methods">
              <a href="mailto:thiruthirumal415@gmail.com" className="contact-card">
                <Mail size={32} />
                <h4>Email</h4>
                <p>thiruthirumal415@gmail.com</p>
              </a>
              <a href="tel:+919742691741" className="contact-card">
                <Phone size={32} />
                <h4>Phone</h4>
                <p>+91-9742691741</p>
              </a>
              <a href="https://github.com/Thirumal9742" target="_blank" rel="noopener noreferrer" className="contact-card">
                <Github size={32} />
                <h4>GitHub</h4>
                <p>Thirumal9742</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Thirumal S. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;