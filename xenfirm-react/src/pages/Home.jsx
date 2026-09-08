import { Link } from "react-router-dom";
import { ServiceCards, ProductCards, CTA } from "../components/Sections";
export default function Home() {
  return (
    <>
      <section className="xf-hero">
        <div className="container">
          <div className="hero-heading">
            <span className="eyebrow">
              XenFirm Technologies / Services + Products
            </span>
            <h1>
              Software that works.
              <br />
              <em>For the way you work.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                Custom applications, connected systems and practical software
                products. We help growing businesses turn everyday challenges
                into better ways of working.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary btn-lg" to="/contact">
                  Discuss your project ↗
                </Link>
                <Link className="text-link" to="/products">
                  Explore our products →
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-paths">
            <Link to="/services">
              <span>01 / IT SERVICES</span>
              <strong>Built around your business.</strong>
              <p>Design, engineering, integrations and ongoing care.</p>
              <span className="path-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link to="/products">
              <span>02 / SOFTWARE PRODUCTS</span>
              <strong>From our product workshop.</strong>
              <p>Explore what we’re developing and discuss your needs.</p>
              <span className="path-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className="principles-strip">
        <div className="container">
          <span>Clear project scope</span>
          <span>Milestone-based delivery</span>
          <span>Documented handover</span>
          <span>Support planned upfront</span>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / Our services</span>
              <h2>
                Good software starts with
                <br />
                the right problem.
              </h2>
            </div>
            <Link className="text-link" to="/services">
              All services ↗
            </Link>
          </div>
          <ServiceCards limit={6} />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / Our products</span>
              <h2>Ideas we’re building into products.</h2>
            </div>
            <p>
              Follow our product direction. Availability and next steps are
              clearly marked for each product.
            </p>
          </div>
          <ProductCards />
          <p className="section-note">
            Looking for training?{" "}
            <Link to="/upskill">Explore XenFirm Upskill →</Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / Selected work</span>
              <h2>A closer look at the work.</h2>
            </div>
            <Link className="text-link" to="/case-studies">
              Project overviews & concepts ↗
            </Link>
          </div>
          <article className="featured-project">
            <div>
              <span className="eyebrow">
                Business website / Client project overview
              </span>
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
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">04 / Working together</span>
              <h2>Clarity at every step.</h2>
            </div>
            <p>
              A shared scope, regular checkpoints and a practical handover keep
              the project understandable.
            </p>
          </div>
          <div className="grid-4 process-grid">
            {[
              [
                "Discover",
                "Understand your users, goals and existing workflows.",
              ],
              [
                "Define",
                "Agree the deliverables, budget, milestones and acceptance criteria.",
              ],
              [
                "Build & review",
                "Design, develop and test with progress reviews.",
              ],
              [
                "Launch & care",
                "Plan deployment, documentation and the support you need.",
              ],
            ].map(([title, text], i) => (
              <article key={title}>
                <span className="card-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
