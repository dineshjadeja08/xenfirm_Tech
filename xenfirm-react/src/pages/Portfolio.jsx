import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { emoji: '🛒', color: '#ECFDF5', tag: 'E-Commerce', title: 'ShopEasy India', desc: 'Full-stack e-commerce platform with payment gateway, inventory management, and mobile app.', stack: ['Django', 'React', 'Stripe'] },
  { emoji: '🤖', color: '#EFF6FF', tag: 'AI & SaaS', title: 'GrowthLab CRM AI', desc: 'AI-powered CRM with lead scoring, automated follow-ups, and predictive analytics dashboard.', stack: ['Python', 'OpenAI', 'Next.js'] },
  { emoji: '🌱', color: '#F0FDF4', tag: 'Web & SEO', title: 'AgroSmart Solutions', desc: 'Corporate website with integrated blog, SEO optimization, and a 3x organic traffic increase in 4 months.', stack: ['Next.js', 'PostgreSQL', 'SEO'] },
  { emoji: '📱', color: '#FFF7ED', tag: 'Mobile App', title: 'DeliverNow App', desc: 'Cross-platform food delivery app with real-time tracking, push notifications, and restaurant POS integration.', stack: ['React Native', 'Node.js', 'Firebase'] },
  { emoji: '☁️', color: '#F0F9FF', tag: 'Cloud & DevOps', title: 'CloudSync Platform', desc: 'B2B SaaS data synchronization platform handling 10M+ daily records across cloud providers.', stack: ['Django', 'AWS', 'Docker', 'Celery'] },
  { emoji: '🎨', color: '#FEFCE8', tag: 'UI/UX & Branding', title: 'PixelForge Studio', desc: 'Complete brand identity system, design language, and component library for a creative agency.', stack: ['Figma', 'React', 'Storybook'] },
];

const Portfolio = () => (
  <>
    <div className="page-hero">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="label">Our Work</div>
        <h1>Projects That Speak<br/>For Themselves</h1>
        <p>A selection of our best work — from MVPs to production-grade SaaS platforms, built with precision and purpose.</p>
      </div>
    </div>

    <section className="section">
      <div className="container">
        <div className="grid-3">
          {projects.map(({ emoji, color, tag, title, desc, stack }, i) => (
            <div key={title} className={`portfolio-card anim-fade-up d${(i % 3) + 1}`}>
              <div className="portfolio-img" style={{ background: color }}>{emoji}</div>
              <div className="portfolio-body">
                <div className="portfolio-tag">{tag}</div>
                <div className="portfolio-title">{title}</div>
                <p className="portfolio-desc">{desc}</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px' }}>
                  {stack.map(t => (
                    <span key={t} style={{ fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', background: 'var(--green-pale)', color: 'var(--green-dark)', borderRadius: '4px', border: '1px solid var(--green-mid)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats bar */}
    <section className="section-green">
      <div className="container">
        <div className="grid-4">
          {[['50+','Projects Delivered'],['30+','Happy Clients'],['6+','Industries Served'],['99%','Client Satisfaction']].map(([n, l], i) => (
            <div key={l} className={`stat-card anim-fade-up d${i+1}`}>
              <div className="stat-number" style={{ color: 'white' }}>{n}</div>
              <div className="stat-label" style={{ color: 'rgba(255,255,255,0.6)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-band">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="anim-fade-up">Want to See Your Project Here?</h2>
        <p className="anim-fade-up d1">Let's talk about your idea and build something remarkable together.</p>
        <div className="btn-group anim-fade-up d2">
          <Link to="/pages/contact" className="btn btn-primary btn-lg">Start Your Project</Link>
          <Link to="/pages/services" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.12)' }}>Our Services</Link>
        </div>
      </div>
    </section>
  </>
);

export default Portfolio;
