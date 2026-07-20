import React from "react";

const About = () => {
  return (
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p>
              I'm a 3rd-year Software Engineering student with a strong passion
              for creating impactful software solutions. My journey in tech has
              been marked by continuous learning, hands-on project experience,
              and a drive to master modern development practices.
            </p>
            <p>
              I specialize in full-stack development, data structures &
              algorithms, and have hands-on experience with various programming
              languages and frameworks. I'm particularly interested in building
              scalable applications and exploring AI/ML technologies.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source
              projects, participating in hackathons, or staying updated with the
              latest tech trends.
            </p>
          </div>
          <div class="about-stats">
            <div class="stat">
              <h3>3+</h3>
              <p>Years in Tech</p>
            </div>
            <div class="stat">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div class="stat">
              <h3>3+</h3>
              <p>Languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
