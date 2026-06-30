import type { MetadataRoute } from "next";
import { PAGE_LAST_UPDATED, SITE_URL } from "@/lib/constants";

const TRUST_PAGES = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about-us", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact-us", priority: 0.6, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "") || SITE_URL;
  const lastModified = new Date(PAGE_LAST_UPDATED);

  return TRUST_PAGES.map((page) => ({
    url: `${base}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
