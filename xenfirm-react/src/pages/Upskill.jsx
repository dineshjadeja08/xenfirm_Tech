import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApplyModal from '../components/ApplyModal';

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const MonitorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const AwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

const tracks = [
  {
    title: 'Frontend Development',
    subtitle: '(React)',
    desc: 'Build modern, responsive and interactive user interfaces.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    skills: ['HTML, CSS, JavaScript, ES6+', 'React.js & Hooks', 'State Management (Redux)', 'API Integration', 'Build & Deploy Real Projects']
  },
  {
    title: 'Backend Development',
    subtitle: '(Python/Django)',
    desc: 'Build powerful APIs and robust backend systems.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    skills: ['Python Fundamentals', 'Django Framework', 'REST APIs', 'Database (SQL)', 'Authentication & Deployment']
  },
  {
    title: 'UI/UX Design',
    subtitle: '(Figma)',
    desc: 'Design beautiful and user-friendly interfaces for real products.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    skills: ['UI Design Principles', 'Figma Essentials', 'Wireframing & Prototyping', 'Design Systems', 'Real App UI Design']
  }
];

const journey = [
  { week: 'WEEK 1', title: 'Learn & Setup', desc: 'Understand concepts, tools and project requirements.', icon: '📖' },
  { week: 'WEEK 2', title: 'Build & Implement', desc: 'Build real features with mentor support and regular feedback.', icon: '💻' },
  { week: 'WEEK 3', title: 'Improve & Deploy', desc: 'Refine, test and deploy your project. Final presentation & demo day.', icon: '🚀' },
  { week: 'FINAL', title: 'Certification', desc: 'Showcase your project, get feedback & earn your XenFirm Certificate.', icon: '🏆' }
];

const Upskill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");

  const openModal = (track = "") => {
    setSelectedTrack(track);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="upskill-page">
      <ApplyModal isOpen={isModalOpen} onClose={closeModal} initialTrack={selectedTrack} context="Upskill" />
      {/* HERO SECTION */}
      <section className="page-hero" style={{ padding: '160px 0 100px' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div className="anim-fade-up">
              <div className="label" style={{ background: 'rgba(16,185,129,0.15)', color: 'var(--green-light)', borderColor: 'rgba(16,185,129,0.3)' }}>XENFIRM UPSKILL PROGRAM</div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px' }}>Learn by Building <br/><em style={{ color: 'var(--green)', fontStyle: 'normal' }}>Real Products.</em> <br/><span style={{ fontSize: '0.6em', opacity: 0.8 }}>Not Just Watching Videos.</span></h1>
              <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: 'rgba(255,255,255,0.6)' }}>Join the XenFirm Upskill Program for <strong style={{ color: 'var(--green-light)' }}>FREE</strong> and gain hands-on experience by working on <strong style={{ color: 'var(--green-light)' }}>real startup projects</strong> with live mentorship and industry-level guidance.</p>
              
              <div className="grid-2" style={{ gap: '20px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ color: 'var(--green)' }}><CodeIcon /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '0.95rem' }}>Real Projects</h4>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Work on live modules used in real apps</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ color: 'var(--green)' }}><UsersIcon /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '0.95rem' }}>Mentor Led</h4>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Learn directly from industry experts</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ color: 'var(--green)' }}><MonitorIcon /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '0.95rem' }}>Live Sessions</h4>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Interactive online sessions & doubt clarification</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ color: 'var(--green)' }}><AwardIcon /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '0.95rem' }}>Certificate</h4>
                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Earn a certificate & showcase your work</p>
                  </div>
                </div>
              </div>

              <div className="hero-btns" style={{ display: 'flex', gap: '15px' }}>
                <button onClick={() => openModal()} className="btn btn-primary btn-lg">Apply Now →</button>
                <a href="#program" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>Explore Program</a>
              </div>
              
              <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="hero-trust-avatars">
                  {['S', 'V', 'K', 'M'].map(l => <div key={l} className="avatar">{l}</div>)}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>100+ students are already upskilling with XenFirm</p>
              </div>
            </div>
            
            <div className="anim-fade-up d2" style={{ position: 'relative' }}>
              <div style={{ position: 'relative', zIndex: 2, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="Learning" style={{ width: '100%', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', padding: '15px 25px', borderRadius: '12px', border: '1px solid var(--green)' }}>
                   <div style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem' }}>LEARN BY <br/><span style={{ color: 'var(--green)' }}>BUILDING REAL PRODUCTS</span></div>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '200px', height: '200px', background: 'var(--green)', filter: 'blur(100px)', opacity: 0.2, zIndex: 1 }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'var(--black)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '40px 0' }}>
        <div className="container">
          <div className="grid-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>100+</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Students Trained</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>15+</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Real Projects Built</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>10+</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hiring Partners</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>98%</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Recommend Us</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="program" className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header centered anim-fade-up">
            <div className="label">CHOOSE YOUR TRACK</div>
            <h2 className="section-title">Master In-Demand Skills</h2>
            <p className="section-desc">Select a track that aligns with your career goals and start building.</p>
          </div>
          <div className="grid-3">
            {tracks.map((track, i) => (
              <div key={track.title} className="card anim-fade-up" style={{ padding: '40px' }}>
                <div style={{ width: '60px', height: '60px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                  <img src={track.icon} alt={track.title} style={{ width: '36px', height: '36px' }} />
                </div>
                <h3 style={{ marginBottom: '5px' }}>{track.title}</h3>
                <div style={{ color: 'var(--green)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '15px' }}>{track.subtitle}</div>
                <p style={{ fontSize: '0.9rem', marginBottom: '25px' }}>{track.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {track.skills.map(skill => (
                    <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--gray-600)' }}>
                      <span style={{ color: 'var(--green)', fontWeight: 800 }}>✓</span> {skill}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '30px' }}>
                  <button onClick={() => openModal(track.title)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--green)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>Apply for this Track →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section">
        <div className="container">
          <div className="section-header centered anim-fade-up">
            <div className="label">YOUR LEARNING JOURNEY</div>
            <h2 className="section-title">3 Weeks of Intensive Building</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px', position: 'relative', marginTop: '60px' }}>
            <div style={{ position: 'absolute', top: '40px', left: '50px', right: '50px', height: '2px', background: 'var(--gray-100)', zIndex: 0 }} className="hide-mobile"></div>
            {journey.map((item, i) => (
              <div key={item.week} className="anim-fade-up" style={{ flex: 1, minWidth: '200px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '80px', height: '80px', background: 'white', border: '1px solid var(--gray-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 24px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--green)', marginBottom: '8px' }}>{item.week}</div>
                <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', maxWidth: '200px', margin: '0 auto' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING & HIGHLIGHTS */}
      <section className="section" style={{ background: 'var(--black)', color: 'white' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '60px' }}>
            <div className="anim-fade-up">
              <h3 style={{ color: 'var(--green)', marginBottom: '30px' }}>PROGRAM HIGHLIGHTS</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  'Live online weekend sessions',
                  'Real product building experience',
                  'One-to-one mentor support',
                  'Community of passionate learners',
                  'Certificate of completion',
                  'Top performers get internship or paid opportunities'
                ].map(text => (
                  <li key={text} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <span style={{ width: '24px', height: '24px', background: 'var(--green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'white', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>{text}</span>
                  </li>
                ))}
              </ul>

              <h3 style={{ color: 'var(--green)', margin: '40px 0 20px' }}>WHO CAN JOIN?</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'College students & freshers',
                  'Aspiring developers & designers',
                  'Anyone eager to learn by building',
                  'Basic knowledge in any programming or design tool'
                ].map(text => (
                  <li key={text} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--green)' }}>●</span>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="anim-fade-up d2" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', padding: '48px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--green)', color: 'white', padding: '10px 30px', fontWeight: 800, fontSize: '0.8rem', transform: 'rotate(45deg) translate(25px, -15px)', width: '180px', textAlign: 'center' }}>100% FREE</div>
              
              <h3 style={{ marginBottom: '10px' }}>FREE UPSKILLING PROGRAM</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '30px' }}>No Registration Fee, No hidden charges</p>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px', marginBottom: '30px' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--green)' }}>FREE</span>
              </div>

              <div className="grid-2" style={{ gap: '20px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                   📅 3 Weeks Program
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                   💻 Live Sessions
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                   📁 Projects + Certificate
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                   👨‍🏫 Mentor Support
                </div>
              </div>

              <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px dashed var(--green)', borderRadius: '12px', padding: '20px', marginBottom: '30px' }}>
                <div style={{ color: 'var(--green)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '5px' }}>INTERNSHIP OPPORTUNITY</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>PAID INTERNSHIP <br/><span style={{ fontSize: '0.8rem', fontWeight: 400, opacity: 0.7 }}>Performance-based stipend after successful completion of building products during the internship period.</span></div>
              </div>

              <button onClick={() => openModal()} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', padding: '18px' }}>Apply for Free Now →</button>
              <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Limited seats per batch!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-band">
        <div className="container">
           <div style={{ width: '80px', height: '80px', background: 'var(--green)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px', fontSize: '2.5rem' }}>🎓</div>
           <h2>READY TO LEVEL UP YOUR SKILLS?</h2>
           <p>Build real. Learn deeper. Grow faster with XenFirm.</p>
           <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
             <button onClick={() => openModal()} className="btn btn-primary btn-lg">Apply for Next Batch</button>
             <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(255,255,255,0.05)', padding: '5px 25px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)' }}>
               <div style={{ width: '40px', height: '40px', background: 'var(--green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✉</div>
               <div style={{ textAlign: 'left' }}>
                 <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Questions? Email us:</div>
                 <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>upskill@xenfirm.com</div>
               </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Upskill;
