// Main Application JavaScript
class PortfolioApp {
  constructor() {
    this.currentPage = 'home';
    this.appContainer = document.getElementById('app');
    this.init();
  }

  init() {
    this.setupRouting();
    this.loadPage('home');
    this.setupEventListeners();
  }

  setupRouting() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1) || 'home';
      this.loadPage(hash);
    });
  }

  loadPage(page) {
    this.currentPage = page;
    this.appContainer.innerHTML = '';
    this.appContainer.classList.add('fade-in');

    switch(page) {
      case 'home':
        this.renderHome();
        break;
      case 'about':
        this.renderAbout();
        break;
      case 'experience':
        this.renderExperience();
        break;
      case 'skills':
        this.renderSkills();
        break;
      case 'projects':
        this.renderProjects();
        break;
      case 'education':
        this.renderEducation();
        break;
      case 'contact':
        this.renderContact();
        break;
      default:
        this.renderHome();
    }

    window.scrollTo(0, 0);
  }

  renderHome() {
    this.appContainer.innerHTML = `
      <div class="hero-section">
        <div class="hero-background"></div>
        <div class="hero-content">
          <img src="adarrsh.jpeg" alt="Adarrsh" class="hero-avatar">
          <h1 class="hero-title">Adarrsh</h1>
          <p class="hero-subtitle">Cybersecurity Specialist | IoT Developer | AI Enthusiast</p>
          <p class="hero-description">Building secure, innovative solutions for a connected world</p>
          <div class="hero-buttons">
            <a href="#about" class="btn btn-primary">Explore My Work</a>
            <a href="#contact" class="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">5+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat">
            <span class="stat-number">6</span>
            <span class="stat-label">Certifications</span>
          </div>
          <div class="stat">
            <span class="stat-number">3</span>
            <span class="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
    `;
  }

  renderAbout() {
    this.appContainer.innerHTML = `
      <div class="page-header">
        <h1>About Me</h1>
        <p>Get to know who I am</p>
      </div>
      <div class="page-content">
        <div class="about-container">
          <div class="about-left">
            <img src="adarrsh.jpeg" alt="Adarrsh" class="about-image">
            <div class="about-info">
              <h3>Quick Facts</h3>
              <ul class="facts-list">
                <li>📍 Location: Palani, Tamil Nadu, India</li>
                <li>🎓 B.E. Computer Science (Cybersecurity)</li>
                <li>💼 Product Developer at DIAN Technologies</li>
                <li>🔐 Cybersecurity Enthusiast</li>
              </ul>
            </div>
          </div>
          <div class="about-right">
            <h2>My Journey</h2>
            <p>I'm a passionate cybersecurity specialist with expertise in IoT, penetration testing, and AI. My journey began with a curiosity about how systems work and how to protect them from threats.</p>
            <p>As a proud member of <strong>ExploitX</strong>, I collaborate with security researchers to identify vulnerabilities and develop stronger defense mechanisms. My technical foundation spans multiple programming languages and security frameworks.</p>
            <h3 style="margin-top: 25px;">Core Values</h3>
            <div class="values-grid">
              <div class="value-card">
                <h4>🔐 Security First</h4>
                <p>Building solutions with security at the core</p>
              </div>
              <div class="value-card">
                <h4>🚀 Innovation</h4>
                <p>Exploring cutting-edge technologies</p>
              </div>
              <div class="value-card">
                <h4>🤝 Collaboration</h4>
                <p>Working with talented security minds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderExperience() {
    this.appContainer.innerHTML = `
      <div class="page-header">
        <h1>Professional Experience</h1>
        <p>My career timeline and achievements</p>
      </div>
      <div class="page-content">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
              <h3>Product Developer</h3>
              <p class="timeline-company">DIAN Technologies</p>
              <p class="timeline-period">2024 - Present</p>
              <p class="timeline-description">Developed and maintained product features, collaborated with cross-functional teams, and contributed to security improvements.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
              <h3>Security Researcher</h3>
              <p class="timeline-company">ExploitX - Into the Void</p>
              <p class="timeline-period">2023 - Present</p>
              <p class="timeline-description">Conducted vulnerability assessments, penetration testing, and security research with a team of cybersecurity professionals.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
              <h3>Participant - Revil 2024</h3>
              <p class="timeline-company">Security Conference & Competition</p>
              <p class="timeline-period">2024</p>
              <p class="timeline-description">Participated in cybersecurity challenges and networking events, enhancing practical security knowledge.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderSkills() {
    this.appContainer.innerHTML = `
      <div class="page-header">
        <h1>Skills & Expertise</h1>
        <p>Technical proficiencies and competencies</p>
      </div>
      <div class="page-content">
        <div class="skills-container">
          <div class="skill-category">
            <h3>Programming Languages</h3>
            <div class="skill-grid">
              ${this.createSkillCard('Python', 90)}
              ${this.createSkillCard('C++', 75)}
              ${this.createSkillCard('JavaScript', 70)}
              ${this.createSkillCard('SQL', 85)}
            </div>
          </div>
          <div class="skill-category">
            <h3>Cybersecurity & Tools</h3>
            <div class="skill-grid">
              ${this.createSkillCard('Penetration Testing', 85)}
              ${this.createSkillCard('Network Analysis', 80)}
              ${this.createSkillCard('Vulnerability Assessment', 82)}
              ${this.createSkillCard('Cryptography', 75)}
            </div>
          </div>
          <div class="skill-category">
            <h3>Technologies & Frameworks</h3>
            <div class="skill-grid">
              ${this.createSkillCard('IoT Platforms', 78)}
              ${this.createSkillCard('MongoDB', 80)}
              ${this.createSkillCard('AI/ML Tools', 72)}
              ${this.createSkillCard('Docker', 70)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  createSkillCard(name, percentage) {
    return `
      <div class="skill-card">
        <div class="skill-name">${name}</div>
        <div class="skill-bar">
          <div class="skill-progress" style="width: ${percentage}%"></div>
        </div>
        <div class="skill-percentage">${percentage}%</div>
      </div>
    `;
  }

  renderProjects() {
    this.appContainer.innerHTML = `
      <div class="page-header">
        <h1>Featured Projects</h1>
        <p>Showcasing my work and contributions</p>
      </div>
      <div class="page-content">
        <div class="projects-grid">
          ${this.createProjectCard(
            'CIA Shield',
            'A comprehensive penetration testing web framework designed for security professionals to identify and remedy web vulnerabilities.',
            ['Python', 'Security', 'Web'],
            'https://github.com/Adarrsh7'
          )}
          ${this.createProjectCard(
            'IoT Security Suite',
            'Advanced security monitoring and protection system for IoT devices with real-time threat detection.',
            ['IoT', 'C++', 'Security'],
            'https://github.com/Adarrsh7'
          )}
          ${this.createProjectCard(
            'Portfolio Website',
            'Modern, responsive portfolio showcasing skills and projects with advanced animations and interactions.',
            ['HTML', 'CSS', 'JavaScript'],
            'https://github.com/Adarrsh7'
          )}
          ${this.createProjectCard(
            'AI Threat Analyzer',
            'Machine learning-based system for analyzing and predicting security threats in network environments.',
            ['Python', 'AI/ML', 'Security'],
            'https://github.com/Adarrsh7'
          )}
        </div>
      </div>
    `;
  }

  createProjectCard(title, description, tags, link) {
    return `
      <div class="project-card">
        <div class="project-header">
          <h3>${title}</h3>
          <a href="${link}" class="project-link" target="_blank">→</a>
        </div>
        <p class="project-description">${description}</p>
        <div class="project-tags">
          ${tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
      </div>
    `;
  }

  renderEducation() {
    this.appContainer.innerHTML = `
      <div class="page-header">
        <h1>Education & Certifications</h1>
        <p>Academic background and professional credentials</p>
      </div>
      <div class="page-content">
        <div class="education-container">
          <div class="education-section">
            <h2>Degrees</h2>
            <div class="education-item">
              <div class="education-header">
                <h3>Bachelor of Engineering (B.E.)</h3>
                <span class="education-year">2022 - Present</span>
              </div>
              <p class="education-field">Computer Science - Cybersecurity Specialization</p>
              <p class="education-institution">Chennai Institute of Technology</p>
            </div>
            <div class="education-item">
              <div class="education-header">
                <h3>Secondary Education</h3>
                <span class="education-year">2009 - 2020</span>
              </div>
              <p class="education-field">High School</p>
              <p class="education-institution">The Indian Public School, Erode</p>
            </div>
          </div>
          <div class="education-section">
            <h2>Certifications</h2>
            <div class="cert-grid">
              ${this.createCertCard('Introduction to Cybersecurity')}
              ${this.createCertCard('Introduction to Data Science')}
              ${this.createCertCard('Introduction to IoT')}
              ${this.createCertCard('Introduction to Modern AI')}
              ${this.createCertCard('MongoDB Basics')}
              ${this.createCertCard('AI Tools & Applications')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  createCertCard(name) {
    return `
      <div class="cert-card">
        <div class="cert-icon">🏆</div>
        <p>${name}</p>
      </div>
    `;
  }

  renderContact() {
    this.appContainer.innerHTML = `
      <div class="page-header">
        <h1>Get In Touch</h1>
        <p>Let's connect and collaborate</p>
      </div>
      <div class="page-content">
        <div class="contact-container">
          <div class="contact-info">
            <div class="contact-item">
              <h3>📧 Email</h3>
              <p><a href="mailto:adrrshcbi@gmail.com">adrrshcbi@gmail.com</a></p>
            </div>
            <div class="contact-item">
              <h3>📱 Phone</h3>
              <p><a href="tel:+916381984881">+91 6381984881</a></p>
            </div>
            <div class="contact-item">
              <h3>📍 Location</h3>
              <p>Palani, Tamil Nadu, India</p>
            </div>
            <div class="contact-item">
              <h3>🔗 Connect With Me</h3>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/adarrsh-naga-naveen-00a3ba312" target="_blank" class="social-btn">LinkedIn</a>
                <a href="https://github.com/Adarrsh7" target="_blank" class="social-btn">GitHub</a>
              </div>
            </div>
          </div>
          <form class="contact-form">
            <div class="form-group">
              <label>Name</label>
              <input type="text" required>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" required>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
            <p class="form-note">Note: This is a demo form. Messages are not sent.</p>
          </form>
        </div>
      </div>
    `;

    // Add form submission handler
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
      });
    }
  }

  setupEventListeners() {
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
