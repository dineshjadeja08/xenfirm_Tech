import { Link } from "react-router-dom";
import { PageHero, ProductCards } from "../components/Sections";
export default function Products() {
  return (
    <>
      <PageHero eyebrow="XenFirm products" title="Our product workshop.">
        Explore upcoming XenFirm software. We publish availability clearly so
        you know what’s ready and what’s still ahead.
      </PageHero>
      <section className="section">
        <div className="container">
          <ProductCards />
          <div className="featured-project product-note">
            <div>
              <h2>Skills are part of the journey, too.</h2>
              <p>
                XenFirm Upskill is our training offering, separate from our
                software products.
              </p>
            </div>
            <Link className="btn btn-primary" to="/upskill">
              Explore Upskill ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
