import { Link, useLocation } from "react-router-dom";
import { PageHero } from "../components/Sections";
import { company } from "../data/company";
export default function Policies() {
  const privacy = useLocation().pathname === "/privacy";
  return (
    <>
      <PageHero
        eyebrow="Website information"
        title={privacy ? "Privacy notice" : "Website terms"}
      >
        {privacy
          ? "How information submitted through this website is used."
          : "Information about using the XenFirm website and enquiring about our work."}
      </PageHero>
      <section className="section">
        <article className="container prose">
          <p>Last updated: 8 September 2026</p>
          {privacy ? (
            <>
              <h2>Information you provide</h2>
              <p>
                Project enquiries can include your name, email, company, phone
                number, requirements and selected service or product. Training
                and career forms may collect application details. Provide only
                the information needed for your request.
              </p>
              <h2>How it is used</h2>
              <p>
                We use the information you submit to respond to your request,
                discuss requirements and handle related follow-up. Submitting a
                project enquiry does not subscribe you to marketing messages.
              </p>
              <h2>Services involved</h2>
              <p>
                Website forms use Formspree to process submissions. Our hosting
                and communication providers may process technical or message
                data when providing their services. WhatsApp and LinkedIn links
                take you to services with their own privacy policies. Email
                enquiries are handled through our email service.
              </p>
              <h2>Retention and your requests</h2>
              <p>
                To ask what enquiry information we hold, request a correction or
                request deletion, contact us using the email below. We will
                review your request and explain any information that needs to be
                retained for an ongoing engagement or applicable record-keeping
                requirements.
              </p>
              <h2>Browser and technical data</h2>
              <p>
                Hosting providers may process request information to deliver and
                protect the website. Fonts are loaded from Google Fonts.
                Certificate verification pages display the certificate
                information associated with the identifier requested.
              </p>
              <h2>Questions</h2>
              <p>
                For questions about information submitted through this website,
                email <a href={`mailto:${company.email}`}>{company.email}</a>.
              </p>
            </>
          ) : (
            <>
              <h2>Website information and availability</h2>
              <p>
                This website introduces XenFirm services, products and training.
                Service descriptions are starting points for discussion.
                Upcoming products are identified as coming soon; no release
                date, pricing or feature commitment is implied.
              </p>
              <h2>Project agreements</h2>
              <p>
                A website enquiry does not create a paid engagement. Scope,
                pricing, payment milestones, delivery, acceptance,
                confidentiality, ownership and support are agreed separately in
                writing before work starts.
              </p>
              <h2>Custom software and product licensing</h2>
              <p>
                Custom project ownership and handover follow the project
                agreement, including any exclusions for third-party software.
                XenFirm software products have separate licensing and data terms
                when offered. Access to a product does not imply ownership of
                its source code.
              </p>
              <h2>Project examples</h2>
              <p>
                Illustrative concepts are labelled and should not be read as
                completed client work. Published project overviews describe
                their stated scope and do not promise the same results for
                another business.
              </p>
              <h2>External links</h2>
              <p>
                Third-party websites and services operate under their own terms.
                Contact us if a link or statement on this website appears
                incorrect.
              </p>
              <h2>Contact</h2>
              <p>
                Email <a href={`mailto:${company.email}`}>{company.email}</a> or{" "}
                <Link to="/contact">send an enquiry</Link>.
              </p>
            </>
          )}
        </article>
      </section>
    </>
  );
}
