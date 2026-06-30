/**
 * Canonical site URL — must match your Google Search Console property exactly.
 * Live site: https://xx555.org.pk
 */
const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://xx555.org.pk";

/** Normalize to https + no trailing slash + consistent host */
export function getCanonicalSiteUrl(url: string = RAW_SITE_URL): string {
  let normalized = url.trim().replace(/\/$/, "");

  if (!normalized.startsWith("http")) {
    normalized = `https://${normalized}`;
  }

  try {
    const parsed = new URL(normalized);
    parsed.protocol = "https:";
    parsed.pathname = "";
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return "https://xx555.org.pk";
  }
}

export function absoluteUrl(path: string = ""): string {
  const base = getCanonicalSiteUrl();
  if (!path || path === "/") return `${base}/`;

  let cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Trailing slash for pages (matches next.config trailingSlash: true)
  if (!cleanPath.endsWith("/") && !/\.[a-z0-9]+$/i.test(cleanPath)) {
    cleanPath = `${cleanPath}/`;
  }

  return `${base}${cleanPath}`;
}

export const CANONICAL_SITE_URL = getCanonicalSiteUrl();
