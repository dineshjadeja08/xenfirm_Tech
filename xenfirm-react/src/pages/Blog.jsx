import { PageHero, CTA } from "../components/Sections";
export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="XenFirm insights"
        title="A better brief. A better start."
      >
        Practical questions to work through before commissioning business
        software.
      </PageHero>
      <section className="section">
        <article className="container prose">
          <h2>Start with the workflow</h2>
          <p>
            Describe who will use the software, what they do today and where the
            process gets difficult. A clear problem helps separate essential
            features from ideas that can wait.
          </p>
          <h2>Define what success looks like</h2>
          <p>
            Choose an observable result: fewer manual steps, a clearer booking
            process or less duplicate data entry. Agree how the result will be
            checked before development starts.
          </p>
          <h2>List your existing systems</h2>
          <p>
            Include the tools, data sources and third-party accounts the project
            needs to connect. Identify who can provide access and whether there
            are recurring costs.
          </p>
          <h2>Plan for life after launch</h2>
          <p>
            Discuss maintenance, backups, documentation and support alongside
            the build. Clarify who owns each responsibility and what is included
            in the proposal.
          </p>
        </article>
      </section>
      <CTA />
    </>
  );
}
