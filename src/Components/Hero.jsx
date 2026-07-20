import React from "react";

const Hero = () => {
  return (
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Hi, I'm Tejas</h1>
          <p class="hero-subtitle">3rd Year Software Engineering Student</p>
          <p class="hero-description">
            Passionate about building elegant solutions and exploring emerging
            technologies
          </p>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">
              View My Work
            </a>
              <a href="#contact" class="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div class="hero-decoration">
          <div class="circle"></div>
          <div class="square"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
