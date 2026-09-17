import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-meta">
            <div className="footer-brand">
              <span>&gt;_</span> tejas<span>.dev</span>
            </div>
            <div className="footer-sub">
              &copy; {new Date().getFullYear()} Tejas Audichya // Designed & Engineered for High Performance
            </div>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/tejasaudichya"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              title="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href="https://linkedin.com/in/tejasaudichya"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              title="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="https://twitter.com/tejasaudichya"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              title="Twitter / X"
            >
              <TwitterIcon size={17} />
            </a>
          </div>

          <a href="#home" className="footer-return-top">
            <ArrowUp size={14} />
            <span>[ RETURN TO ROOT ]</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
