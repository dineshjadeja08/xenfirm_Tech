import { Link } from "react-router-dom";
import { XenfirmLogo } from "./Brand";
import { company } from "../data/company";
export default function Footer() {
  return (
    <footer className="xf-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="xf-brand">
              <XenfirmLogo />
              <span>
                Xen<span>Firm</span>
              </span>
            </Link>
            <p>
              IT services and software products
              <br />
              for growing businesses.
            </p>
            <div className="footer-external">
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href={company.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
          <div>
            <h2>What we do</h2>
            <Link to="/services">IT services</Link>
            <Link to="/products">Software products</Link>
            <Link to="/case-studies">Case studies & concepts</Link>
            <Link to="/upskill">XenFirm Upskill</Link>
          </div>
          <div>
            <h2>Company</h2>
            <Link to="/about">About XenFirm</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/verify">Verify a certificate</Link>
          </div>
          <div>
            <h2>Let’s talk</h2>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp ↗
            </a>
            <Link to="/contact">Project enquiry</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} XenFirm Technologies</p>
          <div>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Website terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
