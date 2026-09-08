# XenFirm website upgrade

The website now separates custom IT services from upcoming software products. The existing React/Vite architecture, certificate verification and Upskill application flow are retained.

## Implemented

- A responsive homepage, simpler navigation and consistent green branding.
- Eight individual service pages with deliverables and enquiry handoff.
- Product catalogue and detail pages for NowSuite and Linkora, explicitly marked coming soon. No invented features, release dates or prices.
- A limited Guru Rooster Farm project overview based on existing site content, plus a clearly labelled illustrative commerce concept. Unsubstantiated clients, quantitative results, testimonials and headline statistics removed from the main marketing pages.
- About/team page using the people already in the repository. Removed unsupported company experience statistics and fixed-benefit promises on Careers.
- Central business contact configuration, using the existing homepage/footer WhatsApp number 9080824626 consistently. Corrected GitHub destination.
- Accessible enquiry labels, product/service preselection, acknowledgement, honeypot, timeout, duplicate-submission guard and persistent success/error messages. Existing Formspree endpoint retained.
- Privacy notice, website terms, and a distinction between project ownership and product licensing.
- Per-page static HTML, titles, descriptions, canonical and Open Graph text metadata, robots file and sitemap. No new social image created.
- Redirects for legacy /pages URLs, static direct routes, certificate deep-link rewrite and a custom 404 page. Certificate routes are excluded from indexing.
- Visible content without animation dependencies, focus indicators, reduced motion and mobile navigation controls.

## Local validation

From `xenfirm-react`:

```sh
npm ci
npm run build
npm test
```

Build creates `dist`, including HTML for each public route and `404.html`. It also creates an intermediate `.prerender` directory and removes it after rendering. Do not publish intermediate server output.

Tests cover enquiry success/failure with a mocked transport, metadata, built route content, internal links and deployment configuration. They do not send messages. Browser/mobile visual QA and real inbox delivery were not exercised in this change.

The committed lockfile had a missing optional dependency; it has been repaired without changing dependency ranges.

## Vercel settings

Configuration is supplied for both existing project arrangements:

- If Root Directory is `xenfirm-react`, use its `vercel.json`, build with `npm run build`, output `dist`.
- If Root Directory is the repository root, use the root `vercel.json`; it installs and builds in `xenfirm-react` and serves `xenfirm-react/dist`.

All public pages are emitted as route/index.html. Keep this build step; a plain `vite build` does not generate the route documents or metadata. Old URLs redirect to canonical paths. Certificate identifier requests use the React application entry, while unknown paths receive the custom 404 response.

After the preview deploy, verify direct visits and refreshes to `/contact`, `/services/web-development`, `/products/nowsuite`, `/pages/contact`, a known `/verify/<id>` and an unknown path. Check response statuses and keyboard/mobile behaviour. No changes have been merged or intentionally deployed to production by this task.

## Business facts and content to confirm before launch

- Confirm that 9080824626 is the correct XenFirm business WhatsApp number and `hello@xenfirm.com` is monitored.
- Confirm ownership and delivery of the existing Formspree enquiry endpoint (`xvzvekbk`) and training/career endpoint (`myklarlg`). Enable provider-side spam controls as needed; client-side honeypots do not replace them.
- Verify the Guru Rooster Farm overview and permission to name the client. Add actual project screenshots, approved testimonials and evidence for any measurable outcomes. No synthetic screenshots or invented results were added.
- Confirm the team names, currently offered services, Careers openings and existing Upskill commercial details. Existing training pricing and certificate records were retained.
- Supply NowSuite/Linkora descriptions, actual screenshots, release status, demos, pricing, documentation and licensing/support details when ready. Until then they remain enquiries for upcoming products.
- Review privacy wording against actual retention, hosting/email providers and record-keeping practices. The website terms do not replace project or product agreements.
- Run a real enquiry delivery test with authorised test contact details, and mobile/keyboard/browser review on the deployment preview.

## Content maintenance

`src/data/company.js` is the source for business contact information, services, upcoming products and project summaries. `src/data/metadata.js` holds canonical aliases and public route metadata. New detail records in the existing collections are included in static generation automatically. Add new standalone page routes to `pageMeta` and the React route tree, then rebuild.
