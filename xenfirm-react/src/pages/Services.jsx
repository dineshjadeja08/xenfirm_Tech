import { PageHero, ServiceCards, CTA } from "../components/Sections";
export default function Services() {
  return (
    <>
      <PageHero eyebrow="IT services" title="Build. Connect. Improve.">
        Choose the support your business needs, from a new application to
        improving an existing system.
      </PageHero>
      <section className="section">
        <div className="container">
          <ServiceCards />
        </div>
      </section>
      <CTA />
    </>
  );
}
