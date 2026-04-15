import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  { icon: '🎯', title: 'Client Success First',   desc: 'Your goals are our goals. We measure our success by the impact we create for your business.' },
  { icon: '⚡', title: 'Speed With Quality',     desc: 'Fast and good are not opposites. Our agile process delivers production-ready software without cutting corners.' },
  { icon: '🔍', title: 'Radical Transparency',   desc: 'No surprises, no hidden costs. We communicate openly about timelines, challenges, and progress.' },
  { icon: '🚀', title: 'Innovation Always',      desc: "We stay ahead of the curve — constantly learning and bringing the latest tech to our clients' products." },
  { icon: '🤝', title: 'Long-term Partnership',  desc: 'We build lasting relationships. Many of our clients have been with us since day one.' },
  { icon: '🌍', title: 'Impact With Purpose',    desc: 'We build products that create jobs, improve lives, and contribute positively to society.' },
];

const team = [
  { initials: 'D', bg: '#101418', name: 'Dineshkumar C', role: 'Founder & CEO',          bio: 'Python/Django architect with a vision to build AI-powered products that make a difference.' },
  { initials: 'R', bg: '#0A8A4F', name: 'Ravi Shankar',  role: 'Lead Frontend Dev',      bio: 'React & TypeScript specialist. Creates interfaces that users love.' },
  { initials: 'P', bg: '#495057', name: 'Priya Lakshmi', role: 'UI/UX Designer',          bio: 'Figma expert who turns complex problems into elegant, intuitive designs.' },
  { initials: 'A', bg: '#212529', name: 'Arun Kumar',    role: 'Digital Marketing Lead',  bio: 'SEO & performance ads strategist with a proven track record of 3x ROI campaigns.' },
];

const stack = ['Python','Django','React','TypeScript','Next.js','React Native','Flutter','PostgreSQL','Redis','Docker','AWS','OpenAI API','Gemini AI','Stripe','Tailwind CSS','Celery','GraphQL','Node.js'];

const About = () => (
  <>
    <div className="page-hero">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="label">About Xenfirm</div>
        <h1>Built by Builders,<br/>For Builders</h1>
        <p>We are a passionate team of engineers, designers, and digital strategists building products that matter.</p>
      </div>
    </div>

    {/* STORY */}
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="about-story-grid">
          <div className="anim-fade-up" style={{ background: 'var(--black)', borderRadius: 'var(--radius-lg)', padding: '36px', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[{ n: '50+', l: 'Projects', green: true }, { n: '30+', l: 'Clients' }, { n: '5+', l: 'Years' }].map(({ n, l, green }) => (
                <div key={l} style={{ flex: 1, background: green ? 'rgba(10,138,79,0.12)' : 'rgba(255,255,255,0.04)', border: `1px solid ${green ? 'rgba(10,138,79,0.25)' : 'rgba(255,255,255,0.07)'}`, borderRadius: 'var(--radius-md)', padding: '18px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Core Tech Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Python','Django','React','Next.js','Flutter','AWS','OpenAI','PostgreSQL','+10 more'].map(t => (
                  <span key={t} style={{ background: 'rgba(10,138,79,0.15)', border: '1px solid rgba(10,138,79,0.25)', color: 'rgba(255,255,255,0.65)', padding: '3px 10px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', borderRadius: 'var(--radius-md)', padding: '12px 16px' }}>
              <div style={{ width: '36px', height: '36px', background: 'var(--green-pale)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)', flexShrink: 0, fontSize: '1.2rem' }}>🏆</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: 'var(--black)' }}>Top IT Firm</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--green)', fontWeight: 500 }}>Global / Remote</div>
              </div>
            </div>
          </div>
          <div className="anim-fade-up d2">
            <div className="label">Our Story</div>
            <h2 className="section-title">Who We Are</h2>
            <p style={{ marginBottom: '18px' }}>Xenfirm Technologies was founded with a single, powerful mission: to bridge the gap between great ideas and great software. We believe every business — from a solo founder to a global enterprise — deserves world-class digital products.</p>
            <p style={{ marginBottom: '18px' }}>Our team combines deep technical expertise in Python, Django, React, and AI with a genuine passion for product thinking. We don't just write code — we design experiences, solve real business problems, and build long-term partnerships.</p>
            <p>With a track record of 50+ delivered projects and clients worldwide, Xenfirm is the trusted technology partner for businesses that want to grow fast and grow right.</p>
            <div style={{ display: 'flex', gap: '36px', marginTop: '36px', paddingTop: '28px', borderTop: '1px solid var(--gray-100)' }}>
              {[['50+','Projects'],['30+','Clients'],['5+','Yrs Exp']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--green)' }}>{n}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="section-header centered anim-fade-up">
          <div className="label">Our Core Values</div>
          <h2 className="section-title">What Drives Us</h2>
        </div>
        <div className="grid-3">
          {values.map(({ icon, title, desc }, i) => (
            <div key={title} className={`anim-fade-up d${(i % 3) + 1}`} style={{ padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-100)', background: 'white', transition: 'var(--transition)' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--green-pale)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', fontSize: '1.2rem' }}>{icon}</div>
              <h3 style={{ marginBottom: '8px' }}>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TEAM */}
    <section className="section">
      <div className="container">
        <div className="section-header centered anim-fade-up">
          <div className="label">The Team</div>
          <h2 className="section-title">The People Behind Xenfirm</h2>
        </div>
        <div className="grid-4">
          {team.map(({ initials, bg, name, role, bio }, i) => (
            <div key={name} className={`anim-fade-up d${i + 1}`} style={{ textAlign: 'center', padding: '28px 20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-100)', background: 'white', transition: 'var(--transition)' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: bg, margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'white' }}>{initials}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '3px' }}>{name}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--green)', fontWeight: 600, marginBottom: '8px' }}>{role}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray-400)', lineHeight: 1.6 }}>{bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TECH STACK */}
    <section className="section-dark">
      <div className="container">
        <div className="section-header centered anim-fade-up">
          <div className="label">Our Tech Stack</div>
          <h2 className="section-title">Technologies We Master</h2>
          <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>We pick the right tools for each job — proven, modern, and scalable.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '16px' }}>
          {stack.map(t => (
            <span key={t} style={{ display: 'inline-flex', alignItems: 'center', padding: '7px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.65)', cursor: 'default', transition: 'var(--transition)' }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--green)'; e.target.style.color = 'var(--green)'; e.target.style.background = 'rgba(16,185,129,0.08)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.color = 'rgba(255,255,255,0.65)'; e.target.style.background = 'rgba(255,255,255,0.04)'; }}
            >{t}</span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-band">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="anim-fade-up">Let's Build Something Together</h2>
        <p className="anim-fade-up d1">Get in touch and let's discuss how we can help your business grow.</p>
        <div className="btn-group anim-fade-up d2">
          <Link to="/pages/contact" className="btn btn-primary btn-lg">Get Free Consultation</Link>
          <Link to="/pages/services" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.12)' }}>Our Services</Link>
        </div>
      </div>
    </section>
  </>
);

export default About;
