import type { Metadata } from "next";
import { APK_VERSION, LOGO, SITE_URL } from "@/lib/constants";

const canonical = SITE_URL.replace(/\/$/, "") || SITE_URL;
const ogImage = `${canonical}/screenshots/xx555-home.png`;

const title =
  `XX555 Game Download APK (${APK_VERSION}) Pakistan 2026`;

const description =
  "Download XX555 Game APK for Pakistan. XX555 login, JazzCash & Easypaisa deposit, fast withdrawal, games, review & FAQ. Free Android app 2026.";

export const pageMetadata: Metadata = {
  title,
  description,
  keywords: [
    "XX555 Game",
    "XX555 Game Download APK",
    "XX555 APK",
    "XX555 Download",
    "XX555 Login",
    "XX555 Pakistan",
    "XX555 review",
    "XX555 Easypaisa withdrawal",
    "XX555 JazzCash withdrawal",
    "XX555 earning app",
    "XX555 bonus",
  ],
  authors: [{ name: "XX555 Pakistan Guide" }],
  creator: "XX555 Pakistan Guide",
  publisher: "XX555 Pakistan Guide",
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
    type: "website",
    locale: "en_PK",
    url: canonical,
    siteName: "XX555 Game Pakistan",
    title,
    description,
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1200,
        height: 630,
        alt: "XX555 Game Download APK Pakistan 2026 — app homepage screenshot",
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
