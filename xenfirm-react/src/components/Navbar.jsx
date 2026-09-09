import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { XenfirmLogo } from "./Brand";
import { company } from "../data/company";

const THEME_KEY = "xenfirm-theme";
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
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const stored = window.localStorage.getItem(THEME_KEY);
    const initialTheme = stored === "light" || stored === "dark" ? stored : preferred;
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_KEY, next);
    }
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <>
      <nav
        className={`xf-nav ${scrolled ? "is-scrolled" : ""}`}
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
            {open ? "Close" : "Menu"} <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
          <div id="primary-links" className={`xf-links ${open ? "is-open" : ""}`}>
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <button
              type="button"
              className="xf-theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
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
