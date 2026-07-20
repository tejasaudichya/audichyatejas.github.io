import React from "react";

const Projects = () => {
  return (
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-header">
              <h3>CodeQuest Nebula</h3>
              <span class="project-tag">Full Stack</span>
            </div>
            <p>
              A competitive programming platform with real-time code execution
              and leaderboards. Features judge system, problem management, and
              user analytics.
            </p>
            <div class="project-tech">
              <span class="tech-badge">React</span>
              <span class="tech-badge">Node.js</span>
              <span class="tech-badge">MongoDB</span>
            </div>
            <a href="#" class="project-link">
              View Project →
            </a>
          </div>

          <div class="project-card">
            <div class="project-header">
              <h3>DSA Visualizer</h3>
              <span class="project-tag">Educational</span>
            </div>
            <p>
              Interactive visualization tool for Data Structures and Algorithms.
              Helps students understand complex algorithms through step-by-step
              animation and visualization.
            </p>
            <div class="project-tech">
              <span class="tech-badge">JavaScript</span>
              <span class="tech-badge">Canvas API</span>
              <span class="tech-badge">HTML/CSS</span>
            </div>
            <a href="#" class="project-link">
              View Project →
            </a>
          </div>

          <div class="project-card">
            <div class="project-header">
              <h3>AI Chat Assistant</h3>
              <span class="project-tag">AI/ML</span>
            </div>
            <p>
              Intelligent chatbot using natural language processing. Integrated
              with various APIs and capable of handling context-aware
              conversations with learning capabilities.
            </p>
            <div class="project-tech">
              <span class="tech-badge">Python</span>
              <span class="tech-badge">NLP</span>
              <span class="tech-badge">Flask</span>
            </div>
            <a href="#" class="project-link">
              View Project →
            </a>
          </div>

          <div class="project-card">
            <div class="project-header">
              <h3>Portfolio Website</h3>
              <span class="project-tag">Web Design</span>
            </div>
            <p>
              Clean and modern monochrome portfolio website showcasing projects
              and skills. Fully responsive with smooth animations and optimized
              performance.
            </p>
            <div class="project-tech">
              <span class="tech-badge">HTML/CSS</span>
              <span class="tech-badge">JavaScript</span>
              <span class="tech-badge">Responsive</span>
            </div>
            <a href="#" class="project-link">
              View Project →
            </a>
          </div>

          <div class="project-card">
            <div class="project-header">
              <h3>E-Commerce Platform</h3>
              <span class="project-tag">Full Stack</span>
            </div>
            <p>
              Complete e-commerce solution with product catalog, shopping cart,
              payment integration, and admin dashboard for inventory management.
            </p>
            <div class="project-tech">
              <span class="tech-badge">React</span>
              <span class="tech-badge">Express</span>
              <span class="tech-badge">PostgreSQL</span>
            </div>
            <a href="#" class="project-link">
              View Project →
            </a>
          </div>

          <div class="project-card">
            <div class="project-header">
              <h3>Fitness Tracker App</h3>
              <span class="project-tag">Mobile</span>
            </div>
            <p>
              Mobile application for tracking workouts, calories, and health
              metrics. Features data visualization, goal tracking, and social
              sharing capabilities.
            </p>
            <div class="project-tech">
              <span class="tech-badge">React Native</span>
              <span class="tech-badge">Firebase</span>
              <span class="tech-badge">Charts</span>
            </div>
            <a href="#" class="project-link">
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
