import React, { useEffect, useState } from 'react';
import ApplyModal from '../components/ApplyModal';

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const openModal = (role = "") => {
    setSelectedRole(role);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    if (window.XF && window.XF.observe) window.XF.observe();
  }, []);

  return (
    <>
      <ApplyModal isOpen={isModalOpen} onClose={closeModal} initialTrack={selectedRole} context="Careers" />
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="label">Join Our Team</div>
          <h1>Build the Future<br />With Us</h1>
          <p>We're always looking for talented people who are passionate about technology, design, and making a real impact.</p>
        </div>
      </div>

      {/* WHY WORK HERE */}
      <section className="section">
        <div className="container">
          <div className="section-header centered anim-fade-up">
            <div className="label">Why Xenfirm</div>
            <h2 className="section-title">Perks &amp; Benefits</h2>
          </div>
          <div className="grid-4">
            <div className="perk-card anim-fade-up d1"><div className="perk-icon" data-icon="dollar"></div><div className="perk-title">Competitive Pay</div><p>Above-market salaries and performance bonuses tied to your impact.</p></div>
            <div className="perk-card anim-fade-up d2"><div className="perk-icon" data-icon="home"></div><div className="perk-title">Remote Friendly</div><p>Hybrid or fully remote options. Work from where you do your best thinking.</p></div>
            <div className="perk-card anim-fade-up d3"><div className="perk-icon" data-icon="book"></div><div className="perk-title">Learning Budget</div><p>₹15,000/year for courses, books, and conferences of your choice.</p></div>
            <div className="perk-card anim-fade-up d4"><div className="perk-icon" data-icon="rocket"></div><div className="perk-title">Fast Growth</div><p>Real ownership, fast promotions, and clear career paths. No corporate ladder.</p></div>
            <div className="perk-card anim-fade-up d1"><div className="perk-icon" data-icon="users"></div><div className="perk-title">Collaborative Culture</div><p>Flat hierarchy, open feedback, and a team that genuinely supports each other.</p></div>
            <div className="perk-card anim-fade-up d2"><div className="perk-icon" data-icon="heart"></div><div className="perk-title">Health Coverage</div><p>Group health insurance for you and your immediate family.</p></div>
            <div className="perk-card anim-fade-up d3"><div className="perk-icon" data-icon="monitor"></div><div className="perk-title">Latest Tools</div><p>MacBook, premium software subscriptions, and best-in-class dev setup.</p></div>
            <div className="perk-card anim-fade-up d4"><div className="perk-icon" data-icon="party"></div><div className="perk-title">Team Events</div><p>Quarterly off-sites, team lunches, hackathons, and celebration dinners.</p></div>
          </div>
        </div>
      </section>

      <style>{`
        .job-card { background: white; border-radius: var(--radius-lg); border: 1px solid var(--gray-100); padding: 28px 32px; box-shadow: var(--shadow-sm); transition: var(--transition); display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .job-card:hover { box-shadow: var(--shadow-lg); border-color: var(--green-mid); transform: translateX(4px); }
        .job-icon { width: 44px; height: 44px; background: var(--gray-50); border: 1px solid var(--gray-100); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--gray-500); flex-shrink: 0; }
        .job-info { flex: 1; }
        .job-title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--black); margin-bottom: 6px; }
        .job-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .job-tag { font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 100px; }
        .tag-type { background: var(--green-pale); color: var(--green-dark); }
        .tag-loc { background: var(--gray-50); color: var(--gray-600); }
        .tag-exp { background: #FFF8E6; color: #92600A; }
        .perk-card { padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--gray-100); background: white; text-align: center; transition: var(--transition); }
        .perk-card:hover { border-color: var(--green); background: var(--green-pale); }
        .perk-icon { width: 44px; height: 44px; background: var(--green-pale); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; color: var(--green); margin: 0 auto 14px; transition: var(--transition); }
        .perk-card:hover .perk-icon { background: var(--green); color: white; }
        .perk-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; margin-bottom: 8px; }
      `}</style>

      {/* OPEN ROLES */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="section-header centered anim-fade-up">
            <div className="label">Open Roles</div>
            <h2 className="section-title">Current Openings</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="job-card anim-fade-up d1">
              <div className="job-icon" id="ji-frontend"></div>
              <div className="job-info">
                <div className="job-title">Frontend Developer</div>
                <div className="job-tags">
                  <span className="job-tag tag-type">Full-Time</span>
                  <span className="job-tag tag-loc">📍 Bangalore</span>
                  <span className="job-tag tag-exp">0–1 Years</span>
                </div>
              </div>
              <button onClick={() => openModal("Frontend Developer")} className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '12px 24px' }}>Apply Now</button>
            </div>
            <div className="job-card anim-fade-up d2">
              <div className="job-icon" id="ji-seo"></div>
              <div className="job-info">
                <div className="job-title">SEO Specialist</div>
                <div className="job-tags">
                  <span className="job-tag tag-type">Full-Time</span>
                  <span className="job-tag tag-loc">📍 Bangalore</span>
                  <span className="job-tag tag-exp">0–1 Years</span>
                </div>
              </div>
              <button onClick={() => openModal("SEO Specialist")} className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '12px 24px' }}>Apply Now</button>
            </div>
            <div className="job-card anim-fade-up d3">
              <div className="job-icon" id="ji-intern"></div>
              <div className="job-info">
                <div className="job-title">Digital Marketing Intern</div>
                <div className="job-tags">
                  <span className="job-tag tag-type">Internship</span>
                  <span className="job-tag tag-loc">📍 Bangalore</span>
                  <span className="job-tag tag-exp">0–1 Years</span>
                </div>
              </div>
              <button onClick={() => openModal("Digital Marketing Intern")} className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '12px 24px' }}>Apply Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
