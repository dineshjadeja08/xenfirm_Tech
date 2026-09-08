import { Link } from "react-router-dom";
import { services, products } from "../data/company";
export function PageHero({ eyebrow, title, children }) {
  return (
    <header className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </header>
  );
}
export function ServiceCards({ limit }) {
  return (
    <div className="grid-3">
      {services.slice(0, limit).map((s, i) => (
        <article className="xf-card" key={s.slug}>
          <span className="card-number">
            {String(i + 1).padStart(2, "0")} / {s.category}
          </span>
          <h3>{s.title}</h3>
          <p>{s.summary}</p>
          <Link className="text-link" to={`/services/${s.slug}`}>
            Explore {s.title.toLowerCase()} <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
export function ProductCards() {
  return (
    <div className="grid-2">
      {products.map((p) => (
        <article className="xf-card product-card" key={p.slug}>
          <span className="status-badge">{p.status}</span>
          <h3>{p.name}</h3>
          <p>{p.summary}</p>
          <Link className="text-link" to={`/products/${p.slug}`}>
            Product information <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
export function CTA() {
  return (
    <section className="cta-band">
      <div className="container">
        <span className="eyebrow">Your next step</span>
        <h2>Let’s work on what’s next.</h2>
        <p>Tell us what you need to build, connect or improve.</p>
        <div className="btn-group">
          <Link className="btn btn-primary btn-lg" to="/contact">
            Discuss your project ↗
          </Link>
          <Link className="btn btn-outline-light btn-lg" to="/products">
            Explore products
          </Link>
        </div>
      </div>
    </section>
  );
}
