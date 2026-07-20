import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="container">
        <div class="logo">Tejas Audichya</div>
        <div class="nav-toggle" id="navToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav-links" id="navLinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
