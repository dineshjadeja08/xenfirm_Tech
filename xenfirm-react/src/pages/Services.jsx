import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: '1' }}>
          <div className="label">Our Expertise</div>
          <h1>Innovative Solutions<br />for a <em>Digital-First</em> World</h1>
          <p>We combine strategic thinking with engineering excellence to build digital products that drive measurable business results.</p>
        </div>
      </div>

      {/* MAIN SERVICES */}
      <section className="section">
        <div className="container">

          {/* 01 Web Development */}
          <div className="service-big-card anim-fade-up">
            <div className="sbc-content" style={{ padding: '60px' }}>
              <div className="sbc-num">01 — Engineering</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px' }}>Web Engineering</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginBottom: '30px', lineHeight: '1.8' }}>
                We engineer high-performance web platforms that serve as the backbone of your digital presence. 
                Our focus is on speed, security, and enterprise-grade scalability.
              </p>
              <ul className="feature-list" style={{ gap: '15px' }}>
                <li style={{ fontSize: '1rem' }}><strong>Custom Web Applications:</strong> Built with React, Next.js, and Django.</li>
                <li style={{ fontSize: '1rem' }}><strong>Scalable Architecture:</strong> Designed to handle high traffic loads effortlessly.</li>
                <li style={{ fontSize: '1rem' }}><strong>SEO & Performance:</strong> Optimized for Core Web Vitals and top search rankings.</li>
                <li style={{ fontSize: '1rem' }}><strong>Secure & Reliable:</strong> Enterprise security and 99.9% uptime guarantee.</li>
              </ul>
              <div style={{ marginTop: '20px' }}>
                <Link to="/pages/contact" className="btn btn-primary btn-lg">Start Your Project →</Link>
              </div>
            </div>
            <div className="sbc-visual" style={{ padding: '0 40px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/service-web.png" alt="Web Engineering" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--black)', marginTop: '20px' }}>ENTERPRISE WEB</div>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginTop: '10px' }}>Modern Tech Stack · Scalable Design · Secure Code</p>
              </div>
            </div>
          </div>

          {/* 02 Mobile App Development */}
          <div className="service-big-card reverse anim-fade-up">
            <div className="sbc-content" style={{ padding: '60px' }}>
              <div className="sbc-num">02 — Mobile</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px' }}>Mobile Applications</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginBottom: '30px', lineHeight: '1.8' }}>
                Create seamless mobile experiences that your users will love. We deliver high-performance 
                iOS and Android apps using native-quality cross-platform technologies.
              </p>
              <ul className="feature-list" style={{ gap: '15px' }}>
                <li style={{ fontSize: '1rem' }}><strong>Native Performance:</strong> Smooth animations with React Native & Flutter.</li>
                <li style={{ fontSize: '1rem' }}><strong>User-Centric UI:</strong> Intuitive designs focused on high engagement.</li>
                <li style={{ fontSize: '1rem' }}><strong>Offline Support:</strong> Fully functional apps even without connectivity.</li>
                <li style={{ fontSize: '1rem' }}><strong>Real-time Sync:</strong> Instant data updates and cloud push notifications.</li>
              </ul>
              <div style={{ marginTop: '20px' }}>
                <Link to="/pages/contact" className="btn btn-primary btn-lg">Build My App →</Link>
              </div>
            </div>
            <div className="sbc-visual" style={{ padding: '0 40px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/service-mobile.png" alt="Mobile Applications" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--black)', marginTop: '20px' }}>MOBILE EXCELLENCE</div>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginTop: '10px' }}>iOS & Android · Native UI · Fast Delivery</p>
              </div>
            </div>
          </div>

          {/* 03 AI & SaaS */}
          <div className="service-big-card anim-fade-up">
            <div className="sbc-content" style={{ padding: '60px' }}>
              <div className="sbc-num">03 — Intelligence</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px' }}>AI & SaaS Solutions</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginBottom: '30px', lineHeight: '1.8' }}>
                Leverage cutting-edge Artificial Intelligence to automate your business. We build 
                intelligent SaaS platforms that provide smarter experiences for your customers.
              </p>
              <ul className="feature-list" style={{ gap: '15px' }}>
                <li style={{ fontSize: '1rem' }}><strong>AI Workflows:</strong> Custom GPT and Gemini model integrations.</li>
                <li style={{ fontSize: '1rem' }}><strong>Smart Automation:</strong> Intelligent agents to handle routine tasks.</li>
                <li style={{ fontSize: '1rem' }}><strong>Multi-Tenant SaaS:</strong> Robust platforms with subscription billing.</li>
                <li style={{ fontSize: '1rem' }}><strong>Predictive Analytics:</strong> Data-driven insights to guide your growth.</li>
              </ul>
              <div style={{ marginTop: '20px' }}>
                <Link to="/pages/contact" className="btn btn-primary btn-lg">Automate Today →</Link>
              </div>
            </div>
            <div className="sbc-visual" style={{ padding: '0 40px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/service-ai.png" alt="AI & SaaS" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--black)', marginTop: '20px' }}>AI INTELLIGENCE</div>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginTop: '10px' }}>LLM Integration · Workflow Automation · Smart Data</p>
              </div>
            </div>
          </div>

          {/* 04 Digital Marketing */}
          <div className="service-big-card reverse anim-fade-up">
            <div className="sbc-content" style={{ padding: '60px' }}>
              <div className="sbc-num">04 — Growth</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px' }}>Digital Marketing</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginBottom: '30px', lineHeight: '1.8' }}>
                We don't just drive traffic; we drive growth. Our data-led marketing strategies 
                are engineered to ensure every marketing dollar translates into real revenue.
              </p>
              <ul className="feature-list" style={{ gap: '15px' }}>
                <li style={{ fontSize: '1rem' }}><strong>SEO Dominance:</strong> Strategies to put your brand on page one.</li>
                <li style={{ fontSize: '1rem' }}><strong>High-ROI Ads:</strong> Expertly managed Google and Social Media ads.</li>
                <li style={{ fontSize: '1rem' }}><strong>Content Authority:</strong> High-quality content that converts leads.</li>
                <li style={{ fontSize: '1rem' }}><strong>Data Transparency:</strong> Real-time growth tracking and reporting.</li>
              </ul>
              <div style={{ marginTop: '20px' }}>
                <Link to="/pages/contact" className="btn btn-primary btn-lg">Scale My Business →</Link>
              </div>
            </div>
            <div className="sbc-visual" style={{ padding: '0 40px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/service-marketing.png" alt="Digital Marketing" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--black)', marginTop: '20px' }}>GROWTH ENGINE</div>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginTop: '10px' }}>ROI Focused · Data Driven · Full Transparency</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header centered anim-fade-up">
            <div className="label">Full Spectrum</div>
            <h2 className="section-title">More Ways We Can Help</h2>
            <p className="section-desc">Comprehensive technology solutions for every stage of your business growth.</p>
          </div>
          <div className="grid-4">
            {[
              { title: 'UI/UX Design', desc: 'Beautiful, user-centric designs.', icon: '🎨' },
              { title: 'Cloud & DevOps', desc: 'Secure and scalable cloud infra.', icon: '☁️' },
              { title: 'Security Audits', desc: 'Hardening your digital assets.', icon: '🛡️' },
              { title: 'Analytics Setup', desc: 'Data insights with GA4.', icon: '📊' },
              { title: 'E-Commerce', desc: 'Optimized online storefronts.', icon: '🛒' },
              { title: 'Brand Identity', desc: 'Professional visual branding.', icon: '✨' },
              { title: 'SaaS Architecture', desc: 'Built for massive scaling.', icon: '🏗️' },
              { title: '24/7 Support', desc: 'Ongoing product maintenance.', icon: '📞' }
            ].map((s, i) => (
              <div key={s.title} className={`anim-fade-up d${(i % 4) + 1}`} style={{ background: 'white', padding: '40px', borderRadius: '4px', border: '1px solid var(--gray-100)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{s.icon}</div>
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>{s.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-band" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px' }}>Let's Build Something Great.</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.8 }}>Ready to transform your business with modern technology?</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/pages/contact" className="btn btn-primary btn-lg">Schedule a Free Strategy Call</Link>
            <Link to="/pages/portfolio" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>View Our Portfolio</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
