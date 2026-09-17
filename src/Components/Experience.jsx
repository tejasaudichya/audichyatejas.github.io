import { GitCommit, Trophy, Users, Globe } from "lucide-react";

const TIMELINE_DATA = [
  {
    role: "Hackathon Winner - Code Quest Nebula",
    org: "National Hackathon 2026",
    period: "2026",
    commit: "commit #8f3a9e // [HEAD -> main, tag: winner-1st]",
    icon: <Trophy size={14} color="var(--accent-emerald)" />,
    description:
      "Spearheaded the engineering team to build a real-time competitive programming arena with sandboxed execution, real-time WebSockets, and low-latency grading engine, securing 1st place overall."
  },
  {
    role: "Open Source Contributor",
    org: "Global Developer Repositories",
    period: "2024 - Present",
    commit: "commit #5c20da // [15+ Merged PRs]",
    icon: <GitCommit size={14} color="var(--accent-cyan)" />,
    description:
      "Active maintainer and contributor to modern open-source toolkits and developer frameworks. Refactored backend bottlenecks, resolved memory leaks, and contributed unit test coverage."
  },
  {
    role: "Technical Workshop Facilitator",
    org: "University Tech Society",
    period: "2024 - 2026",
    commit: "commit #3b87fe // [Mentored 100+ Devs]",
    icon: <Users size={14} color="var(--accent-blue)" />,
    description:
      "Organized and instructed intensive bootcamps on Data Structures & Algorithms, modern JavaScript, and full-stack web architecture for 100+ undergraduate developers."
  },
  {
    role: "Freelance Web Developer",
    org: "Independent Client Engineering",
    period: "2023 - Present",
    commit: "commit #1a92df // [10+ Production Deployments]",
    icon: <Globe size={14} color="var(--accent-purple)" />,
    description:
      "Engineered bespoke, responsive web applications and high-conversion portals for clients. Focused on performance optimization, sub-second load times, and intuitive design interfaces."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header-hud">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>04 // EXECUTION TIMELINE</span>
          </div>
          <h2 className="section-title">
            Engineering <span>Milestones</span>
          </h2>
          <p className="section-subtitle">
            Deployment logs, competitive achievements, and technical contributions
          </p>
        </div>

        <div className="experience-timeline">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-git-tag">
                  {item.icon}
                  <span>{item.commit}</span>
                </div>
                <h3>{item.role}</h3>
                <div className="timeline-date">
                  {item.org} // {item.period}
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
