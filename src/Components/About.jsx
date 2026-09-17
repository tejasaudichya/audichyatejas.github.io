import { Server, GitBranch, Cpu, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header-hud">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>01 // SYSTEM SPECIFICATIONS</span>
          </div>
          <h2 className="section-title">
            About <span>Developer</span>
          </h2>
          <p className="section-subtitle">
            Core architecture, engineering philosophy, and runtime telemetry
          </p>
        </div>

        <div className="about-content">
          <div className="about-card-hud">
            <div className="about-text">
              <p>
                I am a 3rd-year Software Engineering student driven by a deep fascination
                for building resilient, high-throughput systems and scalable digital platforms.
                My engineering workflow combines rigorous algorithmic foundations with modern
                full-stack development standards.
              </p>
              <p>
                I specialize in designing reactive frontends, modular microservices, and optimal
                database schemas. Whether it's optimizing time complexity on competitive programming
                platforms or building real-time collaboration engines, I focus on clean abstraction
                and maintainability.
              </p>
              <p>
                Beyond writing code, I actively participate in hackathons, contribute to open-source
                repositories, and mentor fellow engineering peers in core algorithms and web architecture.
              </p>
            </div>

            <div className="about-spec-list">
              <div className="spec-item">
                <Cpu size={16} className="spec-icon" />
                <span>Architecture: Full-Stack & Systems</span>
              </div>
              <div className="spec-item">
                <Code2 size={16} className="spec-icon" />
                <span>DSA Focus: LeetCode & Codeforces</span>
              </div>
              <div className="spec-item">
                <Server size={16} className="spec-icon" />
                <span>Backend: Node.js, Express, Python</span>
              </div>
              <div className="spec-item">
                <GitBranch size={16} className="spec-icon" />
                <span>DevOps: Git, Docker, CI/CD Pipelines</span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">
                3<span className="stat-accent">+</span>
              </div>
              <div className="stat-label">Years Compiling</div>
              <div className="stat-desc">Continuous software engineering & learning</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">
                10<span className="stat-accent">+</span>
              </div>
              <div className="stat-label">Deployed Repositories</div>
              <div className="stat-desc">From web platforms to educational visualization tools</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">
                500<span className="stat-accent">+</span>
              </div>
              <div className="stat-label">Algorithmic Problems</div>
              <div className="stat-desc">Mastered across LeetCode, Codeforces, and DSA platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
