import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { publicRoutes, metadataFor, aliases } from "../src/data/metadata.js";
import { company } from "../src/data/company.js";
import { sendEnquiry } from "../src/lib/enquiry.js";
test("enquiries use the configured destination and preserve failure state", async () => {
  const data = new FormData();
  data.set("name", "Test");
  await sendEnquiry(data, async (url, options) => {
    assert.equal(url, company.enquiryEndpoint);
    assert.equal(options.method, "POST");
    assert.equal(options.body, data);
    return { ok: true };
  });
  await assert.rejects(
    sendEnquiry(data, async () => ({ ok: false })),
    /could not be sent/,
  );
  await assert.rejects(
    sendEnquiry(data, async () => {
      throw new Error("Network failure");
    }),
    /Network failure/,
  );
  data.set("_gotcha", "spam");
  let called = false;
  await assert.rejects(
    sendEnquiry(data, async () => {
      called = true;
      return { ok: true };
    }),
    /empty/,
  );
  assert.equal(called, false);
});
test("metadata covers public pages and excludes certificate results and unknown pages from indexing", () => {
  for (const route of publicRoutes) {
    const meta = metadataFor(route);
    assert.equal(meta.noindex, false, route);
    assert.equal(meta.canonical, company.origin + route);
  }
  assert.equal(metadataFor("/verify/private-id").noindex, true);
  assert.equal(metadataFor("/services/missing").noindex, true);
  for (const [alias, to] of Object.entries(aliases))
    assert.equal(metadataFor(alias).canonical, company.origin + to);
});
test("built routes contain real content, correct metadata and resolvable internal links", async () => {
  for (const route of publicRoutes) {
    const html = await readFile(
      `dist${route === "/" ? "" : route}/index.html`,
      "utf8",
    );
    assert.match(html, /<h1[ >]/, route);
    assert.match(html, /<meta name="description"/, route);
    assert.match(html, /<meta property="og:site_name" content="XenFirm Technologies"/, route);
    assert.match(html, /<meta name="twitter:card" content="summary"/, route);
    assert.ok(html.includes(`href="${metadataFor(route).canonical}"`), route);
    for (const match of html.matchAll(/href="(\/[^"#?]*)[^"]*"/g)) {
      const target = match[1];
      if (target.startsWith("/assets/") || target === "/favicon.svg") continue;
      assert.ok(
        publicRoutes.includes(target) ||
          aliases[target] ||
          target === "/verify",
        `${route} links to unknown ${target}`,
      );
    }
  }
  const config = JSON.parse(await readFile("vercel.json", "utf8"));
  for (const [from, to] of Object.entries(aliases))
    assert.ok(
      config.redirects.some((r) => r.source === from && r.destination === to),
    );
  assert.ok(config.rewrites.some((r) => r.source === "/verify/:certificateId"));
  assert.match(await readFile("dist/404.html", "utf8"), /noindex/);
});
