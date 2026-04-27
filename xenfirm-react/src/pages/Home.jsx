import React from 'react';
import { Link } from 'react-router-dom';

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const MobileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const BrainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);
const TrendingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);
const PaletteIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.477-1.123-.29-.288-.478-.686-.478-1.124a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);
const CloudIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const LockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12 19.79 19.79 0 0 1 1.56 3.44 2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.43a16 16 0 0 0 6.16 6.16l.87-1.3a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const services = [
  { Icon: GlobeIcon,    title: 'Web Development',     desc: 'Custom, high-performance websites and web apps built with React, Django, and Next.js that convert visitors into customers.' },
  { Icon: MobileIcon,  title: 'Mobile Applications',  desc: 'Native iOS & Android apps and cross-platform solutions using React Native and Flutter, built for scale and performance.' },
  { Icon: BrainIcon,   title: 'AI & SaaS Solutions',  desc: 'LLM integrations, AI-powered automation, and fully managed SaaS products. We bring intelligence to your business.' },
  { Icon: TrendingIcon,title: 'Digital Marketing',    desc: 'Data-driven SEO, Google Ads, social media, and content marketing campaigns engineered for measurable ROI.' },
  { Icon: PaletteIcon, title: 'UI/UX Design',         desc: 'Research-backed, pixel-perfect interfaces and brand identities. Every screen designed with purpose.' },
  { Icon: CloudIcon,   title: 'Cloud & DevOps',       desc: 'AWS, Docker, CI/CD pipelines, and infrastructure automation. We make your product fast, secure, and always-on.' },
];

const reasons = [
  { Icon: CheckCircleIcon, title: 'On-time delivery, every time',  sub: 'We respect your deadlines' },
  { Icon: LockIcon,        title: 'Full source code ownership',    sub: 'You own everything we build' },
  { Icon: ChatIcon,        title: 'Transparent communication',     sub: 'Weekly updates, always in the loop' },
  { Icon: BrainIcon,       title: 'AI-native development',         sub: 'Intelligence built into every product' },
  { Icon: PhoneIcon,       title: 'Post-launch support included',  sub: "We don't disappear after delivery" },
];

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '10+', label: 'Expert Team' },
  { number: '99%', label: 'Client Satisfaction' },
];

const process = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We deeply understand your business goals, target audience, and competitive landscape before touching any design or code.' },
  { num: '02', title: 'Design & Prototype',   desc: 'UI/UX wireframes and interactive prototypes that visualize your product before a single line of production code is written.' },
  { num: '03', title: 'Build & Test',         desc: 'Agile sprints with weekly demos, automated tests, and rigorous QA to ensure production-grade quality every release.' },
  { num: '04', title: 'Launch & Support',     desc: 'Seamless deployment, monitoring, and ongoing support so your product keeps performing at its best long after go-live.' },
];

const testimonials = [
  { stars: '★★★★★', text: '"Working with XenFirm Technologies was a great experience. They created a clean and modern website for our farm and helped us improve our online presence. Highly recommended."', initials: 'GR', name: 'Guru Rooster Farm', role: 'Sustainable Agriculture' },
  { stars: '★★★★★', text: '"Xenfirm built our entire e-commerce platform in just 6 weeks. The code quality and design were outstanding. Highly recommend them to any business looking for reliable IT partners."', initials: 'RK', name: 'Rajesh Kumar', role: 'Founder, ShopEasy India' },
  { stars: '★★★★★', text: '"The AI integration they built for our CRM has saved us 20 hours per week. The team was professional, communicative, and genuinely invested in our success."',                       initials: 'PM', name: 'Priya Menon',   role: 'CTO, GrowthLab' },
  { stars: '★★★★★', text: '"Our organic traffic tripled in 4 months after Xenfirm took over our digital marketing. Their SEO and content strategy is data-driven and results-focused."',                    initials: 'AV', name: 'Arjun Venkat',  role: 'CEO, AgroSmart Solutions' },
];

const Home = () => (
  <>
    {/* HERO */}
    <section className="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-inner">
        <div>
          <div className="hero-tag anim-fade-up"><span className="hero-tag-dot"></span>Leading IT Company</div>
          <h1 className="anim-fade-up d1">Turning Ideas<br/>Into <em>Digital</em><br/>Reality</h1>
          <p className="hero-desc anim-fade-up d2">We engineer high-quality web applications, mobile apps, AI-powered SaaS products, and digital marketing strategies for businesses that want to grow.</p>
          <div className="hero-btns anim-fade-up d3" style={{ marginBottom: '24px' }}>
            <Link to="/pages/contact" className="btn btn-primary btn-lg">Start Your Project</Link>
            <Link to="/pages/portfolio" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.12)' }}>View Our Work</Link>
          </div>
          <div className="anim-fade-up d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px', fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
            {['Free Consultation', 'No Hidden Costs', '24/7 Dedicated Support'].map(t => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: 'var(--green-light)' }}>✓</span> {t}
              </span>
            ))}
          </div>
          <div className="hero-trust anim-fade-up d4">
            <div className="hero-trust-avatars">
              {['R','A','K','M'].map(l => <div key={l} className="avatar">{l}</div>)}
            </div>
            <div className="hero-trust-text"><strong>30+ happy clients</strong><br/>across India &amp; worldwide</div>
          </div>
        </div>
        <div className="hero-visual anim-fade-up d2" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0', minHeight: '400px' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'var(--green)', filter: 'blur(130px)', opacity: 0.12, zIndex: 1, pointerEvents: 'none' }}></div>
          <img 
            src="/home-hero-dev.png" 
            alt="Business Developer" 
            style={{ 
              position: 'relative', 
              zIndex: 3, 
              width: '100%', 
              maxWidth: '600px', 
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
            }} 
          />
        </div>
      </div>
    </section>

    {/* CLIENTS */}
    <section className="clients">
      <div className="container">
        <p className="clients-label">Trusted by growing businesses</p>
        <div className="clients-logos" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <img src="/assets/img/logoclient1.png" alt="Client" />
          <img src="/assets/img/logoclient3.png" alt="Client" />
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="section-header centered anim-fade-up">
          <div className="label">What We Do</div>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-desc">End-to-end digital solutions built with the latest technology and delivered with precision.</p>
        </div>
        <div className="grid-3">
          {services.map(({ Icon, title, desc }, i) => (
            <div key={title} className={`card anim-fade-up d${(i % 3) + 1}`}>
              <div className="service-icon-box"><Icon /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Link to="/pages/services" className="card-link">Learn more <ArrowIcon /></Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/pages/services" className="btn btn-outline btn-lg">View All Services</Link>
        </div>
      </div>
    </section>

    {/* STATS */}
    <section className="section-green">
      <div className="container">
        <div className="grid-4">
          {stats.map(({ number, label }, i) => (
            <div key={label} className={`stat-card anim-fade-up d${i + 1}`}>
              <div className="stat-number" style={{ color: 'white' }}>{number}</div>
              <div className="stat-label" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: '72px', alignItems: 'center' }}>
          <div className="anim-fade-up">
            <div className="label">How We Work</div>
            <h2 className="section-title">Our Proven Process</h2>
            <p className="section-desc" style={{ marginBottom: '36px' }}>From first conversation to final launch — a transparent, structured approach that ensures quality at every step.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {process.map(({ num, title, desc }) => (
                <div key={num} className="process-step">
                  <div className="step-num-badge">{num}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="anim-fade-up d2" style={{ background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: '32px', border: '1px solid var(--gray-100)' }}>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>Why choose Xenfirm?</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>Serving clients globally</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {reasons.map(({ Icon, title, sub }) => (
                <div key={title} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-100)' }}>
                  <div className="icon-box icon-box-pale" style={{ width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0 }}><Icon /></div>
                  <div>
                    <div style={{ fontSize: '0.855rem', fontWeight: 600, color: 'var(--black)' }}>{title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', marginTop: '1px' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="section-header centered anim-fade-up">
          <div className="label">Client Stories</div>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="grid-3">
          {testimonials.map(({ stars, text, initials, name, role }, i) => (
            <div key={name} className={`testimonial-card anim-fade-up d${i + 1}`}>
              <div className="stars">{stars}</div>
              <p className="testimonial-text">{text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{initials}</div>
                <div><div className="author-name">{name}</div><div className="author-role">{role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-band">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="anim-fade-up">Ready to Build Something Great?</h2>
        <p className="anim-fade-up d1">Get a free consultation and project estimate from our team. No obligations.</p>
        <div className="btn-group anim-fade-up d2">
          <Link to="/pages/contact" className="btn btn-primary btn-lg">Get Free Consultation</Link>
          <Link to="/pages/services" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.12)' }}>Explore Services</Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
