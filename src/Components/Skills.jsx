import { Code, Layout, Server, Database, Cloud, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Core Languages",
    icon: <Code size={18} className="skill-cat-icon" />,
    skills: [
      { name: "TypeScript / JavaScript", level: "Primary" },
      { name: "Python", level: "Advanced" },
      { name: "C++", level: "Competitive" },
      { name: "Java", level: "Proficient" },
      { name: "SQL (PostgreSQL/MySQL)", level: "Active" }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: <Layout size={18} className="skill-cat-icon" />,
    skills: [
      { name: "React 19 & React DOM", level: "Expert" },
      { name: "Next.js & SSR", level: "Proficient" },
      { name: "Tailwind CSS & Modern CSS", level: "Active" },
      { name: "State (Redux / Zustand)", level: "Active" },
      { name: "Canvas API & Web Animations", level: "Active" }
    ]
  },
  {
    title: "Backend & Systems",
    icon: <Server size={18} className="skill-cat-icon" />,
    skills: [
      { name: "Node.js & Express", level: "Expert" },
      { name: "RESTful API Architecture", level: "Expert" },
      { name: "WebSockets & Realtime", level: "Active" },
      { name: "Microservices & Auth (JWT)", level: "Active" },
      { name: "Server Optimization", level: "Proficient" }
    ]
  },
  {
    title: "Data & Storage",
    icon: <Database size={18} className="skill-cat-icon" />,
    skills: [
      { name: "MongoDB & Mongoose", level: "Active" },
      { name: "PostgreSQL & Prisma", level: "Active" },
      { name: "Redis In-Memory Cache", level: "Active" },
      { name: "Data Schema Design", level: "Advanced" },
      { name: "Query Optimization", level: "Proficient" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={18} className="skill-cat-icon" />,
    skills: [
      { name: "Docker Containerization", level: "Active" },
      { name: "Git & GitHub Actions CI/CD", level: "Daily" },
      { name: "AWS (S3, EC2)", level: "Familiar" },
      { name: "Firebase & Cloud Functions", level: "Active" },
      { name: "Linux Environments & Bash", level: "Daily" }
    ]
  },
  {
    title: "Computer Science Core",
    icon: <Cpu size={18} className="skill-cat-icon" />,
    skills: [
      { name: "Data Structures & Algorithms", level: "Primary" },
      { name: "System Design & Scalability", level: "Active" },
      { name: "Object-Oriented Design (OOD)", level: "Advanced" },
      { name: "Operating Systems & Concurrency", level: "Academic" },
      { name: "Computer Networks & Protocols", level: "Academic" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header-hud">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>03 // CAPABILITY MATRIX</span>
          </div>
          <h2 className="section-title">
            Technical <span>Stack</span>
          </h2>
          <p className="section-subtitle">
            Categorized telemetry of programming languages, architectures, and engineering toolchains
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="skill-category">
              <div className="skill-category-header">
                {cat.icon}
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <ul>
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-item">
                    <span className="skill-item-name">
                      <span className="skill-bullet">&gt;</span>
                      <span>{skill.name}</span>
                    </span>
                    <span className="skill-tag-pill">[{skill.level}]</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
