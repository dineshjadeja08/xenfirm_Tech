import { Link } from "react-router-dom";
import { PageHero, CTA } from "../components/Sections";
const team = [
  [
    "Dinesh",
    "Founder",
    "Software development, technical direction and business operations.",
  ],
  ["Deepan", "Co-founder", "Sales, marketing and client relationships."],
  [
    "Yuganesh",
    "Development team lead",
    "Engineering coordination and software delivery.",
  ],
];
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About XenFirm"
        title="Builders with a business perspective."
      >
        XenFirm Technologies brings IT services and software product development
        together to help growing businesses work better.
      </PageHero>
      <section className="section">
        <div className="container detail-grid">
          <div className="prose">
            <h2>Two ways to work with us.</h2>
            <p>
              We build custom software around a client’s requirements, and
              develop our own products for recurring business needs. Each has a
              clear scope, commercial model and support arrangement.
            </p>
            <p>
              Our work starts with understanding the people who will use the
              software and the problem it needs to solve.
            </p>
            <Link className="text-link" to="/services">
              Explore our services ↗
            </Link>
          </div>
          <aside className="xf-card">
            <h2>What to expect</h2>
            <ul className="plain-list">
              <li>A written scope before development</li>
              <li>Agreed milestones and progress reviews</li>
              <li>Testing and documented handover</li>
              <li>Support hours and responsibilities set upfront</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">The people</span>
              <h2>Meet the team.</h2>
            </div>
          </div>
          <div className="grid-3">
            {team.map(([name, role, bio]) => (
              <article key={name} className="xf-card">
                <span className="eyebrow">{role}</span>
                <h3>{name}</h3>
                <p>{bio}</p>
              </article>
            ))}
          </div>
          <div className="company-links">
            <Link to="/careers">Careers →</Link>
            <Link to="/upskill">XenFirm Upskill →</Link>
            <Link to="/verify">Certificate verification →</Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
