import { useState } from "react";
import { Terminal, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

const PROJECTS_DATA = [
  {
    id: "codequest",
    title: "CodeQuest Nebula",
    file: "sys://codequest-nebula.tsx",
    category: "fullstack",
    tag: "🏆 Hackathon Winner",
    description:
      "High-throughput competitive programming platform engineered with real-time sandboxed code execution, dynamic leaderboards, and judge verdict engines.",
    metrics: "Latency: <45ms | Execution: Docker Sandbox | Sockets: Active",
    tech: ["React 19", "Node.js", "MongoDB", "Docker", "WebSockets"],
    github: "https://github.com/tejasaudichya",
    demo: "#"
  },
  {
    id: "dsa-viz",
    title: "DSA Interactive Visualizer",
    file: "algo://dsa-visualizer.ts",
    category: "systems",
    tag: "⚡ High Performance",
    description:
      "Interactive runtime visualizer for graph traversals, sorting, trees, and dynamic programming with step-by-step frame scrubbing and memory allocation graphs.",
    metrics: "Render Loop: 60 FPS HTML5 Canvas | Complexity Breakdown",
    tech: ["TypeScript", "Canvas API", "Algorithms", "CSS Grid"],
    github: "https://github.com/tejasaudichya",
    demo: "#"
  },
  {
    id: "ai-assistant",
    title: "Contextual AI Agent",
    file: "ai://chat-assistant.py",
    category: "ai",
    tag: "🧠 Intelligence",
    description:
      "Context-aware AI conversational engine with custom prompt pipelining, external tool retrieval, memory persistence, and streaming token response.",
    metrics: "Memory: Token Window Sliding | Stream: Server-Sent Events",
    tech: ["Python", "Flask", "NLP", "OpenAI API", "Redis"],
    github: "https://github.com/tejasaudichya",
    demo: "#"
  },
  {
    id: "ecommerce",
    title: "NextGen E-Commerce Core",
    file: "sys://ecommerce-engine.ts",
    category: "fullstack",
    tag: "🛒 Scalable Architecture",
    description:
      "Full-featured transactional web commerce engine featuring atomic inventory decrement, payment gateway webhooks, and granular admin analytics telemetry.",
    metrics: "Transactions: ACID Compliant | DB: PostgreSQL Pool",
    tech: ["React", "Express.js", "PostgreSQL", "Tailwind", "Stripe API"],
    github: "https://github.com/tejasaudichya",
    demo: "#"
  },
  {
    id: "fitness-tracker",
    title: "Biometric & Fitness Mobile",
    file: "mobile://fitness-tracker.jsx",
    category: "mobile",
    tag: "📱 Cross-Platform",
    description:
      "Cross-platform telemetry application for tracking workout metrics, caloric burn vectors, and nutritional trends with cloud synchronization and charts.",
    metrics: "Offline-First: SQLite Cache | Realtime Sync: Firebase",
    tech: ["React Native", "Firebase", "Victory Charts", "REST API"],
    github: "https://github.com/tejasaudichya",
    demo: "#"
  },
  {
    id: "portfolio-cyber",
    title: "Dev Station Portfolio",
    file: "web://portfolio-v2.tsx",
    category: "systems",
    tag: "🌐 Edge Deployed",
    description:
      "Ultra-responsive developer station portfolio built with React 19, custom terminal CLI simulator, high-tech cybernetic aesthetics, and zero external bloat.",
    metrics: "Performance: 100 Lighthouse | Bundle: Vite Rolldown Optimized",
    tech: ["React 19", "Vite", "Lucide", "CSS3 Variables"],
    github: "https://github.com/tejasaudichya",
    demo: "#"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header-hud">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>02 // DEPLOYED SYSTEMS</span>
          </div>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Engineered solutions spanning full-stack architectures, algorithms, and AI tooling
          </p>
        </div>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            [ All Systems ({PROJECTS_DATA.length}) ]
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            [ Full Stack ]
          </button>
          <button
            className={`filter-btn ${filter === "systems" ? "active" : ""}`}
            onClick={() => setFilter("systems")}
          >
            [ Systems & DSA ]
          </button>
          <button
            className={`filter-btn ${filter === "ai" ? "active" : ""}`}
            onClick={() => setFilter("ai")}
          >
            [ AI / ML ]
          </button>
          <button
            className={`filter-btn ${filter === "mobile" ? "active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            [ Mobile ]
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-terminal-top">
                <div className="project-file-name">
                  <Terminal size={13} />
                  <span>{project.file}</span>
                </div>
                <span>git:(main)</span>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-tag">{project.tag}</span>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-metrics">
                  <span>// {project.metrics}</span>
                </div>

                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-link"
                  >
                    <GithubIcon size={15} />
                    <span>&lt; Source Code /&gt;</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-link"
                  >
                    <ExternalLink size={15} />
                    <span>Live Uplink →</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
