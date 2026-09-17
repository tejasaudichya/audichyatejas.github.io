import { useState } from "react";
import { Mail, MapPin, Copy, Check, Send, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("tejas@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header-hud">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>05 // ESTABLISH UPLINK</span>
          </div>
          <h2 className="section-title">
            Contact & <span>Transmission</span>
          </h2>
          <p className="section-subtitle">
            Open for software engineering opportunities, collaborations, and technical discussions
          </p>
        </div>

        <div className="contact-layout">
          {/* Direct channels */}
          <div className="contact-channels">
            <a
              href="mailto:tejas@example.com"
              className="channel-card"
              onClick={handleCopyEmail}
            >
              <div className="channel-left">
                <div className="channel-icon-wrap">
                  <Mail size={18} />
                </div>
                <div className="channel-info">
                  <h4>Email Uplink</h4>
                  <p>tejas@example.com</p>
                </div>
              </div>
              <button
                type="button"
                className="channel-action-btn"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
              </button>
            </a>

            <a
              href="https://linkedin.com/in/tejasaudichya"
              target="_blank"
              rel="noreferrer"
              className="channel-card"
            >
              <div className="channel-left">
                <div className="channel-icon-wrap">
                  <LinkedinIcon size={18} />
                </div>
                <div className="channel-info">
                  <h4>LinkedIn Network</h4>
                  <p>in/tejasaudichya</p>
                </div>
              </div>
              <div className="channel-action-btn">↗</div>
            </a>

            <a
              href="https://github.com/tejasaudichya"
              target="_blank"
              rel="noreferrer"
              className="channel-card"
            >
              <div className="channel-left">
                <div className="channel-icon-wrap">
                  <GithubIcon size={18} />
                </div>
                <div className="channel-info">
                  <h4>GitHub Repositories</h4>
                  <p>@tejasaudichya</p>
                </div>
              </div>
              <div className="channel-action-btn">↗</div>
            </a>

            <div className="channel-card">
              <div className="channel-left">
                <div className="channel-icon-wrap">
                  <MapPin size={18} />
                </div>
                <div className="channel-info">
                  <h4>Base Coordinates</h4>
                  <p>India // UTC+05:30 (Available Worldwide)</p>
                </div>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent-emerald)" }}>
                ● Active
              </span>
            </div>
          </div>

          {/* Terminal Packet Form */}
          <div className="contact-terminal-form">
            <div className="contact-terminal-header">
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Terminal size={14} color="var(--accent-cyan)" />
                <span>uplink-packet-sender.sh</span>
              </div>
              <span>PORT: 443 [ENCRYPTED]</span>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-body">
              {formSubmitted ? (
                <div style={{
                  padding: "2rem",
                  textAlign: "center",
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: "var(--radius-sm)"
                }}>
                  <p style={{ fontFamily: "var(--font-mono)", color: "var(--accent-emerald)", marginBottom: "0.5rem" }}>
                    &gt;&gt; TRANSMISSION DELIVERED SUCCESSFULLY
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    Packet received. I will acknowledge and reply shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label className="form-label">
                      <span className="form-label-prompt">&gt;</span>
                      <span>sender_alias: string</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Recruiter"
                      className="contact-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <span className="form-label-prompt">&gt;</span>
                      <span>sender_email: string</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      className="contact-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <span className="form-label-prompt">&gt;</span>
                      <span>transmission_payload: string</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Enter project specifications, engineering opportunity, or message..."
                      className="contact-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
                    <Send size={16} />
                    <span>Transmit Packet</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
