import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { XenfirmLogo } from "./Brand";
import { company } from "../data/company";
const links = [
  ["/services", "Services"],
  ["/products", "Products"],
  ["/case-studies", "Case studies"],
  ["/about", "Company"],
  ["/insights", "Insights"],
  ["/contact", "Contact"],
];
function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        className="xf-nav"
        aria-label="Main navigation"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        <div className="container xf-nav-inner">
          <Link to="/" className="xf-brand" aria-label="XenFirm home">
            <XenfirmLogo />
            <span>
              Xen<span>Firm</span>
            </span>
          </Link>
          <button
            className="xf-menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="primary-links"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}{" "}
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
          <div
            id="primary-links"
            className={`xf-links ${open ? "is-open" : ""}`}
          >
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary nav-cta"
              onClick={() => setOpen(false)}
            >
              Discuss your project ↗
            </Link>
          </div>
        </div>
      </nav>
      <a
        className="xf-whatsapp"
        href={company.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with XenFirm on WhatsApp"
      >
        WhatsApp ↗
      </a>
    </>
  );
}
export default function Navbar() {
  const { pathname } = useLocation();
  return <Navigation key={pathname} />;
}
