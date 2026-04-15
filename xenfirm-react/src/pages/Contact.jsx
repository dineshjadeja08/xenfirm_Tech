import React, { useState } from 'react';

const faqs = [
  { q: 'How long does a typical project take?',       a: 'Project timelines vary depending on scope. A simple website takes 2–4 weeks, a web application 6–12 weeks, and a full SaaS product 3–6 months. We\'ll give you a detailed timeline during the discovery phase.' },
  { q: 'Do you provide ongoing maintenance after launch?', a: 'Yes! All our packages include a minimum of 1 month of post-launch support. We also offer ongoing monthly maintenance and retainer plans to keep your product running smoothly.' },
  { q: 'Who owns the code once the project is complete?',  a: 'You do — 100%. Upon final payment, all source code, assets, and intellectual property are transferred to you. We don\'t retain any rights to what we build for you.' },
  { q: 'Do you work with clients outside India?',          a: 'Absolutely! We work with clients worldwide. We\'re experienced with remote collaboration using tools like Slack, Notion, and Zoom, and are comfortable with different time zones.' },
  { q: 'What\'s your payment structure?',                  a: 'We typically work on a milestone-based payment structure: 40% upfront, 30% at the midpoint, and 30% upon final delivery. For ongoing retainers, we bill monthly in advance.' },
];

const contactInfoItems = [
  { icon: '✉️', label: 'Email',          value: <a href="mailto:hello@xenfirm.com">hello@xenfirm.com</a> },
  { icon: '💬', label: 'WhatsApp',       value: <a href="https://wa.me/919876543210" target="_blank" rel="noopener">Chat on WhatsApp</a> },
  { icon: '🕐', label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM IST' },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    try {
      const res = await fetch('https://formspree.io/f/xvzvekbk', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (res.ok) {
        setStatus('sent');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="label">Get In Touch</div>
          <h1>Let's Build Something<br/>Great Together</h1>
          <p>Tell us about your project and we'll get back to you within 24 hours with a free consultation and estimate.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start' }} className="contact-grid-resp">
            {/* Info */}
            <div className="anim-fade-up">
              <h2 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Contact Information</h2>
              <p style={{ marginBottom: '32px' }}>Reach out through any of these channels — we respond fast.</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {contactInfoItems.map(({ icon, label, value }, i) => (
                  <div key={label} style={{ display: 'flex', gap: '18px', padding: '24px 0', borderBottom: i < contactInfoItems.length - 1 ? '1px solid var(--gray-100)' : 'none' }}>
                    <div style={{ width: '48px', height: '48px', background: 'var(--green-pale)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{label}</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--black)' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="anim-fade-up d2" style={{ background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--gray-100)', padding: '44px', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ marginBottom: '6px' }}>Send Us a Message</h3>
              <p style={{ fontSize: '0.88rem', marginBottom: '28px' }}>We'll respond within 24 hours — usually much faster.</p>

              {status === 'sent' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--green-pale)', border: '1.5px solid var(--green-mid)', borderRadius: 'var(--radius-md)', padding: '16px 20px', marginBottom: '20px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--green-dark)' }}>
                  ✅ Message sent! We'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#FFF5F5', border: '1.5px solid #FCA5A5', borderRadius: 'var(--radius-md)', padding: '16px 20px', marginBottom: '20px', fontSize: '0.9rem', fontWeight: 600, color: '#B91C1C' }}>
                  ❌ Something went wrong. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group"><label className="form-label">First Name *</label><input className="form-control" type="text" name="firstName" required /></div>
                  <div className="form-group"><label className="form-label">Last Name *</label><input className="form-control" type="text" name="lastName" required /></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group"><label className="form-label">Email Address *</label><input className="form-control" type="email" name="email" required /></div>
                  <div className="form-group"><label className="form-label">Phone Number</label><input className="form-control" type="tel" name="phone" /></div>
                </div>
                <div className="form-group"><label className="form-label">Company / Business Name</label><input className="form-control" type="text" name="company" /></div>
                <div className="form-group">
                  <label className="form-label">Service You're Interested In *</label>
                  <select className="form-control" name="service" required defaultValue="">
                    <option value="" disabled></option>
                    {['Web Development','Mobile App Development','AI & SaaS Solutions','Digital Marketing','UI/UX Design','Cloud & DevOps','Other / Not Sure Yet'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group"><label className="form-label">Tell Us About Your Project *</label><textarea className="form-control" name="message" required /></div>
                <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
                <p style={{ fontSize: '0.75rem', color: 'var(--gray-400)', textAlign: 'center', marginTop: '12px' }}>🔒 Your information is secure and never shared.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="section-header centered anim-fade-up">
            <div className="label">FAQ</div>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="anim-fade-up">
            {faqs.map(({ q, a }, i) => (
              <div key={q} style={{ padding: '20px 0', borderBottom: '1px solid var(--gray-100)', cursor: 'pointer' }} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', fontWeight: 700, color: 'var(--black)' }}>
                  {q}
                  <span style={{ fontSize: '18px', color: 'var(--green)', fontWeight: 700, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s ease', flexShrink: 0, marginLeft: '16px' }}>+</span>
                </div>
                {openFaq === i && (
                  <div style={{ fontSize: '0.88rem', color: 'var(--gray-600)', lineHeight: 1.7, marginTop: '12px' }}>{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid-resp { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
};

export default Contact;
