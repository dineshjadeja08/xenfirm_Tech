import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { company } from "../data/company";
import { metadataFor } from "../data/metadata";

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metadataFor(pathname);
    document.title = meta.title;

    function set(selector, attributes) {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement(selector.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
      }
      Object.entries(attributes).forEach(([k, v]) => el.setAttribute(k, v));
    }

    set('meta[name="description"]', {
      name: "description",
      content: meta.description,
    });
    set('meta[name="robots"]', {
      name: "robots",
      content: meta.noindex ? "noindex, follow" : "index, follow",
    });
    set('link[rel="canonical"]', { rel: "canonical", href: meta.canonical });

    for (const [key, value] of Object.entries({
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      type: "website",
      site_name: company.name,
    })) {
      set(`meta[property="og:${key}"]`, {
        property: `og:${key}`,
        content: value,
      });
    }

    set('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary",
    });

    if (typeof window === "undefined") return;
    if (document.getElementById("organization-jsonld")) return;

    const script = document.createElement("script");
    script.id = "organization-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: company.name,
      url: company.origin,
      email: company.email,
      sameAs: [company.linkedin, company.github],
    });
    document.head.appendChild(script);
  }, [pathname]);

  return null;
}
