import React from "react";

const Experience = () => {
  return (
    <section id="experience" class="experience">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="experience-timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Hackathon Winner - Code Quest Nebula</h3>
              <p class="timeline-date">2026</p>
              <p>
                Led a team to develop a competitive programming platform that
                won first place at a national hackathon. Implemented full-stack
                architecture and real-time features.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Open Source Contributor</h3>
              <p class="timeline-date">2024 - Present</p>
              <p>
                Active contributor to multiple open-source projects. Focused on
                backend development and bug fixes. Merged 15+ pull requests
                across various repositories.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Technical Workshop Facilitator</h3>
              <p class="timeline-date">2024 - 2026</p>
              <p>
                Conducted workshops on Web Development, Data Structures, and
                Competitive Programming for 100+ students. Created educational
                content and coding resources.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Freelance Web Developer</h3>
              <p class="timeline-date">2023 - Present</p>
              <p>
                Developed 10+ responsive websites and web applications for
                clients. Specialized in creating high-performance, user-friendly
                web experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
