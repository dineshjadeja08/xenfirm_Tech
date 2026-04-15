import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const XenfirmLogo = () => (
  <svg width="36" height="32" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="100" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#34D399" /><stop offset="1" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="g2" x1="100" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A7F3D0" /><stop offset="1" stopColor="#10B981" />
      </linearGradient>
    </defs>
    <path d="M78 5 L28 75 C 22 82,10 82,5 75 C 0 68,5 60,15 50 L65 5 C75 -5,88 -2,92 5 C96 12,85 10,78 5Z" fill="url(#g1)" opacity="0.95"/>
    <path d="M15 15 L85 65 C95 72,98 84,88 88 C78 92,65 85,55 75 L5 15 C-5 5,-2 -5,8 -8 C18 -11,25 5,15 15Z" fill="url(#g2)"/>
  </svg>
);

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/pages/about', label: 'About' },
  { to: '/pages/services', label: 'Services' },
  { to: '/pages/portfolio', label: 'Portfolio' },
  { to: '/pages/blog', label: 'Blog' },
  { to: '/pages/careers', label: 'Careers' },
  { to: '/pages/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <XenfirmLogo />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.04em', color: 'inherit' }}>
              Xen<span style={{ color: 'var(--green)' }}>Firm</span>
            </span>
          </Link>
          <ul className="nav-menu">
            {navLinks.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={({ isActive }) => isActive ? 'active' : ''}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link to="/pages/contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.84rem' }}>Get a Quote</Link>
          </div>
          <div className="hamburger" id="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: mobileOpen ? 0 : 1 }}></span>
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} id="mobileMenu">
        {navLinks.map(l => (
          <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setMobileOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <Link to="/pages/contact" className="btn btn-primary btn-lg" onClick={() => setMobileOpen(false)}>
          Get a Free Quote
        </Link>
      </div>

      {/* Ticker */}
      <div className="ticker-wrap" style={{ top: '66px' }}>
        <div className="ticker-track">
          {['Web Development','Mobile Apps','AI Solutions','SaaS Products','Digital Marketing','SEO & Growth','UI/UX Design','Cloud & DevOps',
            'Web Development','Mobile Apps','AI Solutions','SaaS Products','Digital Marketing','SEO & Growth','UI/UX Design','Cloud & DevOps'].map((t, i) => (
            <span key={i} className="ticker-item">{t}<span>✦</span></span>
          ))}
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/919876543210?text=Hi%20Xenfirm%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener" className="whatsapp-fab" title="Chat on WhatsApp">
        <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
};

export default Navbar;
