import { useState, useEffect } from "react";
import { ArrowRight, Cpu, Code2, Send } from "lucide-react";

const ROLES = [
  "Full-Stack Software Engineer",
  "Distributed Systems & Cloud",
  "DSA & Competitive Coder",
  "Real-Time Architect"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState("");

  // Typing effect for dynamic roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleCommand = (cmd) => {
    switch (cmd.toLowerCase()) {
      case "whoami":
        setConsoleOutput(">> Tejas Audichya: 3rd Year Software Engineering Student passionate about building scalable, high-performance systems.");
        break;
      case "stack":
        setConsoleOutput(">> Core: TypeScript, React 19, Node.js, Python, C++, PostgreSQL, MongoDB, Docker, Git");
        break;
      case "status":
        setConsoleOutput(">> Available for Software Engineering Internships & Collaborative Engineering Projects.");
        break;
      case "clear":
        setConsoleOutput("");
        break;
      default:
        setConsoleOutput(`>> Command not recognized: "${cmd}". Try whoami, stack, or status.`);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-meta-badge">
            <span className="hero-status-dot"></span>
            <span>SYSTEM v2.6.4 // LATENCY: 14ms // STATUS: ONLINE</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-greeting">&lt;hello_world&gt;</span>
            <span className="hero-name-gradient">Tejas Audichya</span>
          </h1>

          <div className="hero-role-typing">
            <span className="hero-role-prompt">&gt;</span>
            <span>{displayedText}</span>
            <span style={{ animation: "beaconPulse 1s infinite", color: "var(--accent-cyan)" }}>|</span>
          </div>

          <p className="hero-description">
            Architecting robust, low-latency applications and elegant web systems.
            Bridging algorithmic precision with modern full-stack development to
            build software that scales.
          </p>

          <div className="hero-tech-pills">
            <span className="hero-pill">&lt;React 19 /&gt;</span>
            <span className="hero-pill">TypeScript</span>
            <span className="hero-pill">Node.js</span>
            <span className="hero-pill">Python & C++</span>
            <span className="hero-pill">Docker & SQL</span>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <Code2 size={16} />
              <span>Explore Systems</span>
              <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Send size={15} />
              <span>Initialize Uplink</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Developer Terminal */}
        <div className="hero-terminal-wrapper">
          <div className="hero-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
              </div>
              <div className="terminal-title">tejas@station: ~/engineer.ts</div>
              <Cpu size={14} color="var(--accent-cyan)" />
            </div>

            <div className="terminal-body">
              <div>
                <span className="code-keyword">const </span>
                <span className="code-var">engineer</span>:{" "}
                <span className="code-prop">SoftwareEngineer</span> = {"{"}
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span className="code-prop">alias</span>:{" "}
                <span className="code-string">"Tejas Audichya"</span>,
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span className="code-prop">education</span>:{" "}
                <span className="code-string">"3rd Year B.Tech Software Eng"</span>,
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span className="code-prop">primary_stack</span>: [
                <span className="code-string">"React"</span>,{" "}
                <span className="code-string">"TypeScript"</span>,{" "}
                <span className="code-string">"Node"</span>,{" "}
                <span className="code-string">"Python"</span>,{" "}
                <span className="code-string">"C++"</span>],
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span className="code-prop">architecture</span>:{" "}
                <span className="code-string">"Full-Stack & Systems"</span>,
              </div>
              <div style={{ paddingLeft: "1.2rem" }}>
                <span className="code-prop">availability</span>:{" "}
                <span className="code-string">"Open to Internships / Roles"</span>
              </div>
              <div>{"};"}</div>

              <div className="terminal-quick-actions">
                <div className="quick-label">// Interactive CLI - Click to execute</div>
                <div className="quick-chips">
                  <button
                    className="quick-chip"
                    onClick={() => handleCommand("whoami")}
                  >
                    $ whoami
                  </button>
                  <button
                    className="quick-chip"
                    onClick={() => handleCommand("stack")}
                  >
                    $ stack
                  </button>
                  <button
                    className="quick-chip"
                    onClick={() => handleCommand("status")}
                  >
                    $ status
                  </button>
                  <button
                    className="quick-chip"
                    onClick={() => handleCommand("clear")}
                  >
                    $ clear
                  </button>
                </div>
              </div>

              {consoleOutput && (
                <div className="terminal-console-output">
                  {consoleOutput}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
