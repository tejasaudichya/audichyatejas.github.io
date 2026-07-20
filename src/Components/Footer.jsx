import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 Tejas Audichya. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/tejasaudichya">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/tejasaudichya">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/tejasaudichya">
              <i className ="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
