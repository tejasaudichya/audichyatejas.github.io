import React from "react";

const Skills = () => {
  return (
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>Responsive Design</li>
              <li>Animations</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js/Express</li>
              <li>REST APIs</li>
              <li>Database Design</li>
              <li>Authentication</li>
              <li>Server Management</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Git/GitHub</li>
              <li>VS Code</li>
              <li>Docker</li>
              <li>Firebase</li>
              <li>AWS</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Redis</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Specializations</h3>
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Full Stack Development</li>
              <li>Problem Solving</li>
              <li>System Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
