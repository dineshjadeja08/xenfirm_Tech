import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { render } from "../.prerender/entry-server.js";
import { metadataFor, publicRoutes } from "../src/data/metadata.js";
const template = await readFile("dist/index.html", "utf8");
const escape = (value) =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
for (const route of [...publicRoutes, "/404", "/verify"]) {
  const meta = metadataFor(route);
  const head = `<title>${escape(meta.title)}</title><meta name="description" content="${escape(meta.description)}"><meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow"}"><link rel="canonical" href="${escape(meta.canonical)}"><meta property="og:title" content="${escape(meta.title)}"><meta property="og:description" content="${escape(meta.description)}"><meta property="og:url" content="${escape(meta.canonical)}"><meta property="og:type" content="website">`;
  const html = template
    .replace(/<title>.*?<\/title>/s, head)
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  const directory = route === "/" ? "dist" : `dist${route}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${publicRoutes.map((r) => `<url><loc>${metadataFor(r).canonical}</loc></url>`).join("")}</urlset>`,
);
await rm(".prerender", { recursive: true, force: true });
console.log(
  `Prerendered ${publicRoutes.length} public routes, verification entry and 404 page.`,
);
await writeFile("dist/404.html", await readFile("dist/404/index.html", "utf8"));
