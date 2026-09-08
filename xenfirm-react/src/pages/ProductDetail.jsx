import { Link, useParams } from "react-router-dom";
import { products } from "../data/company";
import { PageHero } from "../components/Sections";
import NotFound from "./NotFound";
export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  if (!product) return <NotFound />;
  return (
    <>
      <PageHero
        eyebrow={`Software products / ${product.status}`}
        title={product.name}
      >
        {product.summary}
      </PageHero>
      <section className="section">
        <div className="container detail-grid">
          <article className="prose">
            <h2>Product availability</h2>
            <p>
              {product.name} is coming soon. A public release date, feature list
              and pricing have not been announced.
            </p>
            <h2>Help shape what comes next</h2>
            <p>
              Tell us about the workflows you want to improve. We can discuss
              whether a future product or a custom software project is a better
              fit.
            </p>
            <h2>Demos, documentation and support</h2>
            <p>
              Public demos and product documentation are not available yet.
              Contact us with an availability question. Support and licensing
              terms will be provided with the released offering.
            </p>
          </article>
          <aside className="xf-card detail-aside">
            <span className="status-badge">{product.status}</span>
            <h2>Interested in {product.name}?</h2>
            <p>
              Send a product enquiry. This does not create a subscription or
              reserve paid access.
            </p>
            <Link
              className="btn btn-primary"
              to={`/contact?product=${product.slug}`}
            >
              Enquire about {product.name} ↗
            </Link>
            <Link className="text-link" to="/products">
              All products →
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
