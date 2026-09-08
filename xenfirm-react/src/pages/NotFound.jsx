import { Link } from "react-router-dom";
import { PageHero } from "../components/Sections";
export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404 / Page not found" title="This page isn’t here.">
        The link may have changed. Explore our services or return to the
        homepage.
      </PageHero>
      <section className="section">
        <div className="container company-links">
          <Link className="btn btn-primary" to="/">
            Back to home
          </Link>
          <Link className="text-link" to="/services">
            Explore services →
          </Link>
        </div>
      </section>
    </>
  );
}
