import type { MetadataRoute } from "next";
import { PAGE_LAST_UPDATED } from "@/lib/constants";
import { absoluteUrl } from "@/lib/site-url";

/** Paths only — URLs built via absoluteUrl() so host always matches GSC property */
const SITEMAP_PAGES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about-us", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact-us", priority: 0.6, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(PAGE_LAST_UPDATED);

  return SITEMAP_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
