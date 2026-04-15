import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { emoji: '🤖', bg: '#EFF6FF', category: 'AI & Tech', title: 'How We Integrated GPT-4o Into a Live CRM System', excerpt: 'A deep-dive into the technical challenges, architecture decisions, and performance outcomes of embedding OpenAI into a production SaaS product.', author: 'Dineshkumar C', date: 'Apr 10, 2026', read: '8 min read' },
  { emoji: '⚡', bg: '#F0FDF4', category: 'Web Dev',  title: 'Why We Choose Django + React for Most Projects', excerpt: 'The technical reasons behind our go-to stack — scalability, DX, and why this combination keeps winning for our clients.', author: 'Ravi Shankar', date: 'Mar 28, 2026', read: '6 min read' },
  { emoji: '📈', bg: '#FFF7ED', category: 'Marketing', title: 'How We Tripled Organic Traffic for AgroSmart in 4 Months', excerpt: 'A case study on the exact SEO strategy, content plan, and technical fixes that drove a 3x increase in organic sessions.', author: 'Arun Kumar',   date: 'Mar 15, 2026', read: '10 min read' },
  { emoji: '📱', bg: '#FEFCE8', category: 'Mobile',   title: 'React Native vs Flutter in 2026: Our Honest Take', excerpt: "After building with both, here's when we reach for React Native and when Flutter wins — with real project examples.", author: 'Ravi Shankar', date: 'Feb 22, 2026', read: '7 min read' },
  { emoji: '🔐', bg: '#FFF1F2', category: 'Security', title: 'The 10 Security Mistakes Most Startups Make', excerpt: 'Common vulnerabilities we see in code reviews and audits — and exactly how to fix them before they become a crisis.', author: 'Dineshkumar C', date: 'Feb 8, 2026', read: '9 min read' },
  { emoji: '🎨', bg: '#F5F3FF', category: 'Design',   title: 'Design Systems: Why Every Product Needs One', excerpt: 'How a proper design system speeds up development, improves consistency, and scales with your product — built with Figma and React.', author: 'Priya Lakshmi', date: 'Jan 30, 2026', read: '5 min read' },
];

const Blog = () => (
  <>
    <div className="page-hero">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="label">Xenfirm Blog</div>
        <h1>Insights, Guides &amp;<br/>Case Studies</h1>
        <p>Technical deep-dives, industry insights, and real-world case studies from the Xenfirm team.</p>
      </div>
    </div>

    <section className="section">
      <div className="container">
        <div className="grid-3">
          {posts.map(({ emoji, bg, category, title, excerpt, author, date, read }, i) => (
            <div key={title} className={`blog-card anim-fade-up d${(i % 3) + 1}`}>
              <div className="blog-img" style={{ background: bg }}>{emoji}</div>
              <div className="blog-body">
                <div className="blog-category">{category}</div>
                <div className="blog-title">{title}</div>
                <p className="blog-excerpt">{excerpt}</p>
                <div className="blog-meta">
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: 'white', flexShrink: 0 }}>{author[0]}</div>
                  <span>{author}</span>
                  <span>·</span>
                  <span>{date}</span>
                  <span>·</span>
                  <span>{read}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="section-dark">
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <div className="label" style={{ justifyContent: 'center' }}>Stay Updated</div>
        <h2 style={{ marginBottom: '12px' }}>Get Our Best Content</h2>
        <p style={{ marginBottom: '32px', color: 'rgba(255,255,255,0.5)' }}>Monthly insights on web dev, AI, and digital marketing — no spam, ever.</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <input type="email" placeholder="your@email.com" className="form-control" style={{ maxWidth: '300px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'white' }} />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-band">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="anim-fade-up">Have a Project in Mind?</h2>
        <p className="anim-fade-up d1">Let's turn your idea into a product that actually moves the needle.</p>
        <div className="btn-group anim-fade-up d2">
          <Link to="/pages/contact" className="btn btn-primary btn-lg">Get Free Consultation</Link>
        </div>
      </div>
    </section>
  </>
);

export default Blog;
