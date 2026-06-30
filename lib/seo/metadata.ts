import type { Metadata } from "next";
import {
  APK_VERSION,
  LOGO,
  OG_IMAGE,
  PAGE_LAST_UPDATED,
  SITE_URL,
} from "@/lib/constants";

const canonical = SITE_URL.replace(/\/$/, "") || SITE_URL;
const ogImage = `${canonical}${OG_IMAGE}`;

const title =
  `XX555 Game Download APK ${APK_VERSION} — Login, JazzCash & Review (Pakistan 2026)`;

const description =
  "Complete XX555 Game guide for Pakistan: official APK download (V1.1.10), login & registration, JazzCash/Easypaisa deposit from 200 PKR, withdrawal steps, games list, honest review & 15 FAQs. Updated June 2026.";

export const pageMetadata: Metadata = {
  title,
  description,
  keywords: [
    "XX555 Game",
    "XX555 Game Download APK",
    "XX555 APK download",
    "XX555 Login",
    "XX555 register",
    "XX555 Pakistan",
    "XX555 JazzCash deposit",
    "XX555 Easypaisa withdrawal",
    "XX555 review",
    "XX555 Aviator",
    "XX555 earning app",
    "XX555 bonus",
    "XX555 game list",
  ],
  authors: [{ name: "XX555 Pakistan Guide", url: canonical }],
  creator: "XX555 Pakistan Guide",
  publisher: "XX555 Game Pakistan",
  formatDetection: { email: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical,
    languages: { "en-PK": canonical },
  },
  openGraph: {
    type: "article",
    locale: "en_PK",
    url: canonical,
    siteName: "XX555 Game Pakistan",
    title,
    description,
    publishedTime: "2026-01-15T00:00:00+05:00",
    modifiedTime: `${PAGE_LAST_UPDATED}T00:00:00+05:00`,
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1920,
        height: 1080,
        alt: "XX555 Game APK features — download, JazzCash, Easypaisa, slots and Aviator for Pakistan",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: LOGO.src,
    apple: LOGO.src,
  },
  category: "games",
};

export { canonical, title, description, ogImage };
