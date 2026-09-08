import { Link, useParams } from "react-router-dom";
import { projects } from "../data/company";
import { PageHero, CTA } from "../components/Sections";
import NotFound from "./NotFound";
export default function Portfolio() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (slug && !project) return <NotFound />;
  if (project)
    return (
      <>
        <PageHero eyebrow={project.type} title={project.name}>
          {project.summary}
        </PageHero>
        <section className="section">
          <div className="container prose">
            <h2>The problem</h2>
            <p>{project.problem}</p>
            <h2>The approach</h2>
            <p>{project.approach}</p>
            <h2>Scope</h2>
            <ul>
              {project.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <h2>Outcome & evidence</h2>
            <p>{project.outcome}</p>
            <Link className="text-link" to="/case-studies">
              ← All project overviews
            </Link>
          </div>
        </section>
        <CTA />
      </>
    );
  return (
    <>
      <PageHero
        eyebrow="Work / Case studies & concepts"
        title="See the thinking behind the work."
      >
        Client project overviews and illustrative concepts, clearly identified.
        We share the scope and context without unsupported performance claims.
      </PageHero>
      <section className="section">
        <div className="container grid-2">
          {projects.map((p) => (
            <article className="xf-card" key={p.slug}>
              <span className="eyebrow">{p.type}</span>
              <h2>{p.name}</h2>
              <p>{p.summary}</p>
              <Link className="text-link" to={`/case-studies/${p.slug}`}>
                Read {p.type.toLowerCase()} ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
