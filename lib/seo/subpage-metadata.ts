import type { Metadata } from "next";
import { PAGE_LAST_UPDATED, SITE_URL } from "@/lib/constants";

export function subPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonical = `${SITE_URL.replace(/\/$/, "")}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url: canonical,
      siteName: "XX555 Game Pakistan",
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function formatPolicyDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export { PAGE_LAST_UPDATED };
