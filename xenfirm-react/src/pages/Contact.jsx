import { useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { company, products, services } from "../data/company";
import { PageHero } from "../components/Sections";
import { sendEnquiry } from "../lib/enquiry";
const faqs = [
  [
    "How is the project priced?",
    "We agree scope, milestones, payment terms and any third-party costs in a written proposal. There is no single price that fits every project.",
  ],
  [
    "Who owns custom software?",
    "Ownership and handover are defined in the project agreement. Third-party components keep their own licences. XenFirm products are offered under their separate product licence terms.",
  ],
  [
    "What happens after launch?",
    "Maintenance, hosting responsibilities, support hours and response targets are agreed for your project. Ask us to include ongoing support in the proposal.",
  ],
  [
    "Can I try your products?",
    "NowSuite and Linkora are coming soon. Public demos and pricing have not been announced. Send a product enquiry to discuss availability.",
  ],
];
export default function Contact() {
  const [params] = useSearchParams();
  const requestedProduct = products.find(
    (p) => p.slug === params.get("product"),
  );
  const requestedService = services.find(
    (s) => s.slug === params.get("service"),
  );
  const initialInterest = requestedProduct
    ? `Product: ${requestedProduct.name}`
    : requestedService?.title || "";
  const [status, setStatus] = useState("idle");
  const sending = useRef(false);
  async function submit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    sending.current = true;
    setStatus("sending");
    try {
      await sendEnquiry(new FormData(form));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }
  return (
    <>
      <PageHero
        eyebrow="Contact XenFirm"
        title={
          requestedProduct
            ? `Let’s talk about ${requestedProduct.name}.`
            : "What would you like to build?"
        }
      >
        Tell us about your goals, existing systems or product questions. We’ll
        use your details to respond to your enquiry.
      </PageHero>
      <section className="section">
        <div className="container detail-grid">
          <aside className="contact-aside">
            <span className="eyebrow">Start a conversation</span>
            <h2>
              Good work starts
              <br />
              with a clear brief.
            </h2>
            <p>
              Share the problem you want to solve and what a useful result would
              look like.
            </p>
            <dl>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
              <dt>WhatsApp</dt>
              <dd>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with XenFirm ↗
                </a>
              </dd>
            </dl>
            <p className="section-note">
              Please don’t include passwords, payment details or confidential
              documents in this form.
            </p>
          </aside>
          <div className="xf-card enquiry-card">
            <h2>
              {requestedProduct
                ? "Product enquiry"
                : "Tell us about your project"}
            </h2>
            <p>Fields marked * are required.</p>
            <form onSubmit={submit} aria-busy={status === "sending"}>
              <div className="form-pair">
                <label className="form-group" htmlFor="name">
                  Your name *
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={120}
                    className="form-control"
                  />
                </label>
                <label className="form-group" htmlFor="email">
                  Email *
                  <input
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    maxLength={254}
                    className="form-control"
                  />
                </label>
              </div>
              <div className="form-pair">
                <label className="form-group" htmlFor="company">
                  Company
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    maxLength={160}
                    className="form-control"
                  />
                </label>
                <label className="form-group" htmlFor="phone">
                  Phone (optional)
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={30}
                    className="form-control"
                  />
                </label>
              </div>
              <label className="form-group" htmlFor="interest">
                What do you need? *
                <select
                  key={initialInterest}
                  id="interest"
                  name="interest"
                  defaultValue={initialInterest}
                  required
                  className="form-control"
                >
                  <option value="" disabled>
                    Select a service or product
                  </option>
                  <optgroup label="IT services">
                    {services.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Product enquiries">
                    {products.map((p) => (
                      <option key={p.slug}>Product: {p.name}</option>
                    ))}
                  </optgroup>
                  <option>Other / Not sure yet</option>
                </select>
              </label>
              <label className="form-group" htmlFor="message">
                Your requirements *
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  className="form-control"
                  placeholder="What are you trying to achieve? Include any useful timeline or budget context."
                />
              </label>
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">Leave this empty</label>
                <input
                  id="website"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <label className="consent-row">
                <input type="checkbox" name="privacyAcknowledged" required />{" "}
                <span>
                  I have read the <Link to="/privacy">privacy notice</Link> and
                  agree to be contacted about this enquiry. *
                </span>
              </label>
              <button
                className="btn btn-primary btn-lg"
                disabled={status === "sending"}
                type="submit"
              >
                {status === "sending" ? "Sending…" : "Send enquiry ↗"}
              </button>
              <div aria-live="polite" aria-atomic="true">
                {status === "sent" && (
                  <p className="form-success" role="status">
                    Your enquiry was sent successfully. Thank you for contacting
                    XenFirm.
                  </p>
                )}
                {status === "error" && (
                  <p className="form-error" role="alert">
                    We couldn’t send your enquiry. Your details are still here.
                    Please retry or{" "}
                    <a href={`mailto:${company.email}`}>email us directly</a>.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container prose">
          <h2>Before we get started.</h2>
          {faqs.map(([q, a]) => (
            <details className="xf-faq" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
