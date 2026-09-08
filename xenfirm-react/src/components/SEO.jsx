import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metadataFor } from "../data/metadata";
export default function SEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = metadataFor(pathname);
    document.title = meta.title;
    function set(selector, attributes) {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement(
          selector.startsWith("link") ? "link" : "meta",
        );
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
    }))
      set(`meta[property="og:${key}"]`, {
        property: `og:${key}`,
        content: value,
      });
  }, [pathname]);
  return null;
}
