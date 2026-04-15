import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    if (window.XF && window.XF.observe) window.XF.observe();
  }, []);

  return (
    <>
      <div className="page-hero">
  <div className="container" style={{ position: 'relative', zIndex: '1' }}>
    <div className="label">What We Offer</div>
    <h1>Services Built for<br />Business Growth</h1>
    <p>From ideation to launch and beyond — comprehensive IT solutions tailored to your goals, timeline, and budget.</p>
  </div>
</div>

{/*  MAIN SERVICES  */}
<section className="section">
  <div className="container">

    <div className="service-big-card anim-fade-up">
      <div className="sbc-content">
        <div className="sbc-num">01 — Development</div>
        <h2>Web Development</h2>
        <p>We build fast, scalable, and beautiful web applications using modern technologies. From simple landing pages to complex multi-tenant SaaS platforms.</p>
        <ul className="feature-list">
          <li>Custom website & web app development</li>
          <li>Django, React, Next.js, Node.js</li>
          <li>REST API & GraphQL backend</li>
          <li>CMS integration (Headless, WordPress)</li>
          <li>Performance optimization & SEO-ready</li>
          <li>Fully responsive across all devices</li>
        </ul>
        <a href="contact" className="btn btn-primary">Get a Quote</a>
      </div>
      <div className="sbc-visual" style={{ background: 'var(--gray-900)', position: 'relative', overflow: 'hidden', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/*  IDE Window  */}
        <div style={{ width: '100%', background: '#1e1e1e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 24px 48px -12px rgba(0,0,0,0.5)', overflow: 'hidden', position: 'relative', zIndex: '2', transform: 'translateY(-8px)' }}>
          {/*  macOS bar  */}
          <div style={{ height: '32px', background: '#2d2d2d', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px', borderBottom: '1px solid #111' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
            <div style={{ flex: '1', textAlign: 'center', fontFamily: 'sans-serif', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontWeight: '600', letterSpacing: '0.05em' }}>xenfirm_app / views.py</div>
          </div>
          {/*  Code Content  */}
          <div style={{ padding: '20px', fontFamily: '"Menlo", "Monaco", "Courier New", monospace', fontSize: '0.75rem', color: '#d4d4d4', lineHeight: '1.7' }}>
            <div><span style={{ color: '#c586c0' }}>from</span> rest_framework.decorators <span style={{ color: '#c586c0' }}>import</span> api_view</div>
            <div><span style={{ color: '#c586c0' }}>from</span> rest_framework.response <span style={{ color: '#c586c0' }}>import</span> Response</div>
            <br />
            <div><span style={{ color: '#d16969' }}>@api_view</span>([<span style={{ color: '#ce9178' }}>'GET'</span>, <span style={{ color: '#ce9178' }}>'POST'</span>])</div>
            <div><span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>get_scale</span>(request):</div>
            <div>&nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>traffic</span> = Traffic.objects.all()</div>
            <div>&nbsp;&nbsp;<span style={{ color: '#c586c0' }}>return</span> Response({'{'}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>'status'</span>: <span style={{ color: '#ce9178' }}>'scalable'</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>'ops_per_second'</span>: <span style={{ color: '#b5cea8' }}>15000</span></div>
            <div>&nbsp;&nbsp;{'}'}</div>
          </div>
        </div>
        
        {/*  Floating Elements  */}
        <div className="anim-fade-up d3" style={{ position: 'absolute', bottom: '24px', left: '20px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px', zIndex: '3', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}>
          <div style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%', boxShadow: '0 0 10px #10B981' }}></div>
          <span style={{ fontSize: '0.75rem', color: 'white', fontWeight: '600' }}>Build Passing</span>
        </div>
        
        <div className="anim-fade-up d4" style={{ position: 'absolute', top: '24px', right: '20px', background: 'rgba(10,138,79,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(10,138,79,0.3)', padding: '8px 16px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px', zIndex: '3', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '1rem' }}>⚡</span>
          <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: '800' }}>Lighthouse: 100</span>
        </div>

        {/*  Glowing Accent Background  */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '200px', height: '200px', background: 'var(--green)', filter: 'blur(100px)', opacity: '0.15', zIndex: '1' }}></div>
      </div>
    </div>

    <div className="service-big-card reverse anim-fade-up">
      <div className="sbc-content">
        <div className="sbc-num">02 — Mobile</div>
        <h2>Mobile App Development</h2>
        <p>Native-quality mobile experiences for iOS and Android. We deliver cross-platform apps using React Native and Flutter that feel truly native.</p>
        <ul className="feature-list">
          <li>iOS & Android app development</li>
          <li>React Native & Flutter</li>
          <li>UI/UX design for mobile-first</li>
          <li>Backend API integration</li>
          <li>Push notifications & offline support</li>
          <li>App Store & Play Store publishing</li>
        </ul>
        <a href="contact" className="btn btn-primary">Get a Quote</a>
      </div>
      <div className="sbc-visual dark" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '32px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ width: '56px', height: '100px', background: 'linear-gradient(180deg,#1a1a2e,#16213e)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>📱</div>
          <div style={{ width: '56px', height: '100px', background: 'linear-gradient(180deg,#0A8A4F,#076638)', borderRadius: '14px', border: '1px solid rgba(10,138,79,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>⚡</div>
          <div style={{ width: '56px', height: '100px', background: 'linear-gradient(180deg,#1a1a2e,#16213e)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>📱</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '700', border: '1px solid rgba(255,255,255,0.15)' }}>React Native</span>
          <span style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '700', border: '1px solid rgba(255,255,255,0.15)' }}>Flutter</span>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>iOS &amp; Android · Cross-Platform</div>
      </div>
    </div>

    <div className="service-big-card anim-fade-up">
      <div className="sbc-content">
        <div className="sbc-num">03 — Artificial Intelligence</div>
        <h2>AI & SaaS Solutions</h2>
        <p>We integrate cutting-edge AI models into your product and build fully managed SaaS platforms that automate operations and scale effortlessly.</p>
        <ul className="feature-list">
          <li>OpenAI & Gemini API integration</li>
          <li>Custom LLM workflows & chatbots</li>
          <li>AI-powered automation tools</li>
          <li>SaaS product development (Django + Stripe)</li>
          <li>Async task processing with Celery</li>
          <li>Data pipelines & analytics</li>
        </ul>
        <a href="contact" className="btn btn-primary">Get a Quote</a>
      </div>
      <div className="sbc-visual" style={{ background: 'linear-gradient(135deg,#0B1610 0%,#091a11 100%)', flexDirection: 'column', alignItems: 'flex-start', padding: '32px', gap: '12px' }}>
        <div style={{ background: 'rgba(10,138,79,0.12)', border: '1px solid rgba(10,138,79,0.25)', borderRadius: '12px', padding: '16px 20px', width: '100%', fontFamily: 'monospace', fontSize: '0.78rem', color: '#6ee4a8', lineHeight: '1.9' }}>
          <div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: '6px', fontSize: '0.7rem' }}>// AI Integration</div>
          <div><span style={{ color: '#569cd6' }}>const</span> ai = <span style={{ color: '#dcdcaa' }}>new OpenAI</span>({'{'} apiKey {'}'})</div>
          <div><span style={{ color: '#569cd6' }}>const</span> res = <span style={{ color: '#c586c0' }}>await</span> ai.chat({'{'}</div>
          <div>&nbsp;&nbsp;model: <span style={{ color: '#ce9178' }}>'gpt-4o'</span>,</div>
          <div>&nbsp;&nbsp;messages: [{'{'} role: <span style={{ color: '#ce9178' }}>'user'</span>, content {'}'}]</div>
          <div>{'}'}</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ background: 'rgba(10,138,79,0.2)', border: '1px solid rgba(10,138,79,0.4)', color: '#6ee4a8', padding: '4px 10px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: '700' }}>OpenAI</span>
          <span style={{ background: 'rgba(10,138,79,0.2)', border: '1px solid rgba(10,138,79,0.4)', color: '#6ee4a8', padding: '4px 10px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: '700' }}>Gemini</span>
          <span style={{ background: 'rgba(10,138,79,0.2)', border: '1px solid rgba(10,138,79,0.4)', color: '#6ee4a8', padding: '4px 10px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: '700' }}>LangChain</span>
        </div>
      </div>
    </div>

    <div className="service-big-card reverse anim-fade-up">
      <div className="sbc-content">
        <div className="sbc-num">04 — Marketing</div>
        <h2>Digital Marketing</h2>
        <p>Performance-driven marketing strategies that bring qualified traffic, generate leads, and grow your revenue online.</p>
        <ul className="feature-list">
          <li>Search Engine Optimisation (SEO)</li>
          <li>Google Ads & PPC management</li>
          <li>Social Media Marketing</li>
          <li>Content marketing & blogging</li>
          <li>Email marketing campaigns</li>
          <li>Monthly analytics & reporting</li>
        </ul>
        <a href="contact" className="btn btn-primary">Get a Quote</a>
      </div>
      <div className="sbc-visual dark" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '100%', maxWidth: '220px' }}>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#6ee4a8', fontFamily: 'var(--font-display)' }}>3×</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', fontWeight: '600', marginTop: '2px' }}>Traffic Growth</div>
          </div>
          <div style={{ background: 'rgba(10,138,79,0.2)', border: '1px solid rgba(10,138,79,0.4)', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#6ee4a8', fontFamily: 'var(--font-display)' }}>↑82%</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', fontWeight: '600', marginTop: '2px' }}>Conversion</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#6ee4a8', fontFamily: 'var(--font-display)' }}>Top 3</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', fontWeight: '600', marginTop: '2px' }}>Google Rank</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#6ee4a8', fontFamily: 'var(--font-display)' }}>4.9★</div>
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', fontWeight: '600', marginTop: '2px' }}>Client ROI</div>
          </div>
        </div>
        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>SEO · Ads · Social · Content</div>
      </div>
    </div>

  </div>
</section>

{/*  ADDITIONAL SERVICES  */}
<section className="section" style={{ background: 'var(--off-white)' }}>
  <div className="container">
    <div className="section-header centered anim-fade-up">
      <div className="label">Also Available</div>
      <h2 className="section-title">More Ways We Help</h2>
    </div>
    <div className="grid-4">
      <div className="service-grid-card anim-fade-up d1">
        <div className="sgc-icon" id="sgc-design"></div>
        <div className="sgc-title">UI/UX Design</div>
        <div className="sgc-desc">Wireframes, prototypes, and pixel-perfect design systems in Figma.</div>
      </div>
      <div className="service-grid-card anim-fade-up d2">
        <div className="sgc-icon" id="sgc-cloud"></div>
        <div className="sgc-title">Cloud & DevOps</div>
        <div className="sgc-desc">AWS deployment, Docker containers, and CI/CD pipelines.</div>
      </div>
      <div className="service-grid-card anim-fade-up d3">
        <div className="sgc-icon" id="sgc-security"></div>
        <div className="sgc-title">Security Audit</div>
        <div className="sgc-desc">Vulnerability assessment and security hardening for your web products.</div>
      </div>
      <div className="service-grid-card anim-fade-up d4">
        <div className="sgc-icon" id="sgc-analytics"></div>
        <div className="sgc-title">Analytics Setup</div>
        <div className="sgc-desc">Google Analytics 4, custom dashboards, and conversion tracking.</div>
      </div>
      <div className="service-grid-card anim-fade-up d1">
        <div className="sgc-icon" id="sgc-ecom"></div>
        <div className="sgc-title">E-Commerce</div>
        <div className="sgc-desc">Full-stack online stores with payment integration and inventory management.</div>
      </div>
      <div className="service-grid-card anim-fade-up d2">
        <div className="sgc-icon" id="sgc-video"></div>
        <div className="sgc-title">Video & Animation</div>
        <div className="sgc-desc">Explainer videos, motion graphics, and brand animations.</div>
      </div>
      <div className="service-grid-card anim-fade-up d3">
        <div className="sgc-icon" id="sgc-brand"></div>
        <div className="sgc-title">Brand Identity</div>
        <div className="sgc-desc">Logo design, brand guidelines, and complete visual identity kits.</div>
      </div>
      <div className="service-grid-card anim-fade-up d4">
        <div className="sgc-icon" id="sgc-support"></div>
        <div className="sgc-title">Maintenance & Support</div>
        <div className="sgc-desc">Ongoing updates, bug fixes, and performance monitoring post-launch.</div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Services;
