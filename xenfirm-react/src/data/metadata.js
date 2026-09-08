import { company, services, products, projects } from "./company.js";
export const aliases = {
  "/portfolio": "/case-studies",
  "/blog": "/insights",
  ...Object.fromEntries(
    ["about", "services", "careers", "contact", "upskill"].map((p) => [
      `/pages/${p}`,
      `/${p}`,
    ]),
  ),
  "/pages/portfolio": "/case-studies",
  "/pages/blog": "/insights",
};
export const pageMeta = {
  "/": [
    "IT services & software products",
    "XenFirm builds custom applications, connects business systems and develops software products for growing businesses.",
  ],
  "/services": [
    "IT services",
    "Explore web development, custom software, API integrations, automation, product design and software maintenance from XenFirm.",
  ],
  "/products": [
    "Software products",
    "Explore NowSuite and Linkora, upcoming XenFirm products, and enquire about availability.",
  ],
  "/about": [
    "About XenFirm",
    "Meet the XenFirm team and learn how we approach IT services and software product development.",
  ],
  "/case-studies": [
    "Case studies & concepts",
    "Explore XenFirm client project overviews and clearly labelled illustrative software concepts.",
  ],
  "/contact": [
    "Contact XenFirm",
    "Discuss a software project, ask about our services or enquire about upcoming XenFirm products.",
  ],
  "/insights": [
    "Software project insights",
    "Practical questions to help scope your next business software project.",
  ],
  "/careers": [
    "Careers",
    "Explore career opportunities and apply to work with XenFirm Technologies.",
  ],
  "/upskill": [
    "XenFirm Upskill",
    "Explore technical training and learning opportunities through XenFirm Upskill.",
  ],
  "/privacy": [
    "Privacy notice",
    "How XenFirm uses information submitted through its website.",
  ],
  "/terms": [
    "Website terms",
    "Information about XenFirm website use, project enquiries and software licensing.",
  ],
};
export function metadataFor(pathname) {
  const path = aliases[pathname] || pathname;
  let meta = pageMeta[path];
  for (const [prefix, items, name] of [
    ["services", services, "title"],
    ["products", products, "name"],
    ["case-studies", projects, "name"],
  ]) {
    const item = items.find((item) => path === `/${prefix}/${item.slug}`);
    if (item) meta = [item[name], item.summary];
  }
  const isVerification = path === "/verify" || path.startsWith("/verify/");
  return {
    title: `${meta?.[0] || (isVerification ? "Certificate verification" : "Page not found")} | ${company.name}`,
    description: meta?.[1] || "XenFirm Technologies website.",
    canonical: company.origin + path,
    noindex: !meta,
  };
}
export const publicRoutes = [
  ...Object.keys(pageMeta),
  ...services.map((s) => `/services/${s.slug}`),
  ...products.map((p) => `/products/${p.slug}`),
  ...projects.map((p) => `/case-studies/${p.slug}`),
];
