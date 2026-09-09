import { Link } from "react-router-dom";
import { services } from "../data/company";
import { CTA } from "../components/Sections";

const principles = [
  "Clear scope before development",
  "Milestone delivery and reviews",
  "Documented handover",
  "Support planned upfront",
];

const whyItems = [
  {
    title: "Written scope before development",
    text: "We agree what is being built, what success looks like and what is out of scope before implementation starts.",
  },
  {
    title: "Milestone reviews",
    text: "Work is reviewed at practical milestones so decisions stay visible and progress stays aligned with your priorities.",
  },
  {
    title: "Documented handover",
    text: "Each delivery includes handover notes so your team can run, extend and maintain the solution with confidence.",
  },
  {
    title: "Support hours agreed upfront",
    text: "Support coverage is defined before launch so your team knows escalation paths, response windows and ownership.",
  },
];

const process = [
  ["Discover", "Understand your users, goals and existing workflows."],
  ["Define", "Agree deliverables, budget, milestones and acceptance criteria."],
  ["Build & review", "Design, develop and test with milestone check-ins."],
  ["Launch & care", "Plan deployment, documentation and support continuity."],
];

const technologies = [
  "React",
  "JavaScript/TypeScript",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "Cloud deployment",
];

export default function Home() {
  return (
    <>
      <section className="xf-hero">
        <div className="container">
          <div className="hero-heading anim-fade-up">
            <span className="eyebrow">XenFirm Technologies / IT services</span>
            <h1>
              Software that works.
              <br />
              <em>For the way you work.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                Custom applications, connected systems and practical delivery for
                growing businesses that need dependable software outcomes.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary btn-lg" to="/contact">
                  Discuss your project ↗
                </Link>
                <Link className="btn btn-outline btn-lg" to="/services">
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="principles-strip" aria-label="Delivery principles">
        <div className="principles-track">
          {[...principles, ...principles].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / Services</span>
              <h2>Build, connect and improve with a clear delivery plan.</h2>
            </div>
            <Link className="text-link" to="/services">
              All services ↗
            </Link>
          </div>
          <div className="grid-3 service-grid">
            {services.slice(0, 6).map((service, index) => (
              <article
                className={`xf-card service-card anim-fade-up d${(index % 4) + 1}`}
                key={service.slug}
              >
                <span className="service-tag">{service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link className="service-link" to={`/services/${service.slug}`}>
                  <span>Explore service</span>
                  <span className="service-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / Why XenFirm</span>
              <h2>A delivery model built for predictable outcomes.</h2>
            </div>
          </div>
          <div className="grid-2">
            {whyItems.map((item, index) => (
              <article className={`xf-card anim-fade-up d${(index % 4) + 1}`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sm tech-band-wrap">
        <div className="container">
          <span className="eyebrow">03 / Technologies we work with</span>
          {/* Owner note: Update this list to match your currently delivered production stack. */}
          <div className="tech-band" role="list" aria-label="Technology stack">
            {technologies.map((item) => (
              <span role="listitem" key={item} className="tech-badge">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">04 / Process</span>
              <h2>Discover to launch, with shared checkpoints.</h2>
            </div>
          </div>
          <div className="process-timeline">
            {process.map(([title, text], index) => (
              <article
                className={`timeline-step anim-fade-up d${(index % 4) + 1}`}
                key={title}
              >
                <span className="card-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">05 / Selected work</span>
              <h2>A closer look at the work.</h2>
            </div>
            <Link className="text-link" to="/case-studies">
              Project overviews & concepts ↗
            </Link>
          </div>
          <article className="featured-project anim-fade-up">
            <div>
              <span className="eyebrow">Business website / Client project overview</span>
              <h3>Guru Rooster Farm</h3>
              <p>
                A clear online introduction for an agricultural business.
                Website design and development focused on presenting the farm
                and supporting its online presence.
              </p>
              <Link className="text-link" to="/case-studies/guru-rooster-farm">
                Read project overview ↗
              </Link>
            </div>
            <div className="project-scope">
              <span>PROJECT FOCUS</span>
              <ul>
                <li>Business presentation</li>
                <li>Website design & development</li>
                <li>Online presence</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <CTA />
    </>
  );
}
