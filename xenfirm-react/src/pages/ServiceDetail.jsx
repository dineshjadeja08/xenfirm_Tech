import { Link, useParams } from "react-router-dom";
import { services } from "../data/company";
import { PageHero } from "../components/Sections";
import NotFound from "./NotFound";
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound />;
  return (
    <>
      <PageHero
        eyebrow={`Services / ${service.category}`}
        title={service.title}
      >
        {service.summary}
      </PageHero>
      <section className="section">
        <div className="container detail-grid">
          <article className="prose">
            <h2>Who this is for</h2>
            <p>{service.audience}</p>
            <h2>What we can deliver</h2>
            <ul>
              {service.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <h2>How we scope the work</h2>
            <p>
              We start with your current workflow, users and constraints. Before
              development, we agree the deliverables, dependencies, milestones
              and acceptance criteria in a written proposal.
            </p>
            <h2>Handover and support</h2>
            <p>
              Documentation, access handover, ownership and post-launch support
              are defined in your agreement. Hosting costs and third-party
              subscriptions are identified separately.
            </p>
          </article>
          <aside className="xf-card detail-aside">
            <span className="eyebrow">Let’s make a plan</span>
            <h2>Tell us what you need.</h2>
            <p>Share your goals, current tools and preferred timeline.</p>
            <Link
              className="btn btn-primary"
              to={`/contact?service=${service.slug}`}
            >
              Discuss this service ↗
            </Link>
            <Link className="text-link" to="/case-studies">
              Explore our work →
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
