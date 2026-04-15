import React from 'react';
import { Link } from 'react-router-dom';

const XenfirmLogo = () => (
  <svg width="36" height="32" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gf1" x1="0" y1="0" x2="100" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#34D399" /><stop offset="1" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="gf2" x1="100" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A7F3D0" /><stop offset="1" stopColor="#10B981" />
      </linearGradient>
    </defs>
    <path d="M78 5 L28 75 C 22 82,10 82,5 75 C 0 68,5 60,15 50 L65 5 C75 -5,88 -2,92 5 C96 12,85 10,78 5Z" fill="url(#gf1)" opacity="0.95"/>
    <path d="M15 15 L85 65 C95 72,98 84,88 88 C78 92,65 85,55 75 L5 15 C-5 5,-2 -5,8 -8 C18 -11,25 5,15 15Z" fill="url(#gf2)"/>
  </svg>
);

const Footer = () => {
  const WHATSAPP = 'https://wa.me/919876543210?text=Hi%20Xenfirm%2C%20I%27d%20like%20to%20discuss%20a%20project.';
  const EMAIL = 'hello@xenfirm.com';

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <XenfirmLogo />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.04em', color: 'white' }}>
                Xen<span style={{ color: 'var(--green)' }}>Firm</span>
              </span>
            </div>
            <p>Turning Ideas Into Digital Reality. We build world-class software, AI products, and digital marketing strategies for businesses that want to lead.</p>
            <div className="footer-social">
              <a href="https://linkedin.com/company/xenfirm" target="_blank" rel="noopener" className="social-btn" title="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com/xenfirm" target="_blank" rel="noopener" className="social-btn" title="X">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com/xenfirm" target="_blank" rel="noopener" className="social-btn" title="Instagram">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://github.com/xenfirm" target="_blank" rel="noopener" className="social-btn" title="GitHub">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link to="/pages/services">Web Development</Link></li>
              <li><Link to="/pages/services">Mobile Apps</Link></li>
              <li><Link to="/pages/services">AI &amp; SaaS</Link></li>
              <li><Link to="/pages/services">Digital Marketing</Link></li>
              <li><Link to="/pages/services">UI/UX Design</Link></li>
              <li><Link to="/pages/services">Cloud &amp; DevOps</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/pages/about">About Us</Link></li>
              <li><Link to="/pages/portfolio">Portfolio</Link></li>
              <li><Link to="/pages/careers">Careers</Link></li>
              <li><Link to="/pages/blog">Blog</Link></li>
              <li><Link to="/pages/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener">Chat on WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 <span>Xenfirm Technologies</span>. All rights reserved.</p>
          <p>Made with ♥ in <span>Tamil Nadu</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
