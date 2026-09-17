import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo-container">
          <div className="logo-badge">
            <span className="logo-symbol">&gt;_</span>
            <span>tejas</span>
            <span className="logo-ext">.dev</span>
          </div>
          <div className="nav-status-pill">
            <span className="status-beacon"></span>
            <span>SYSTEM: ONLINE</span>
          </div>
        </a>

        <button
          className="nav-toggle"
          onClick={toggleNav}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={closeNav}>
              <span className="nav-num">01.</span>
              <span>// about</span>
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeNav}>
              <span className="nav-num">02.</span>
              <span>// projects</span>
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeNav}>
              <span className="nav-num">03.</span>
              <span>// skills</span>
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeNav}>
              <span className="nav-num">04.</span>
              <span>// experience</span>
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeNav}>
              <span className="nav-num">05.</span>
              <span>// contact</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-cta-btn" onClick={closeNav}>
              &lt; Uplink /&gt;
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
