export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://xx555.net.pk";

/** Official affiliate / referral link */
export const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_XX555_AFFILIATE_URL ??
  "https://www.xx55511.com/?r=jsi6829";

export const AFFILIATE = {
  download:
    process.env.NEXT_PUBLIC_XX555_DOWNLOAD_URL ?? AFFILIATE_URL,
  login: process.env.NEXT_PUBLIC_XX555_LOGIN_URL ?? AFFILIATE_URL,
  register: process.env.NEXT_PUBLIC_XX555_REGISTER_URL ?? AFFILIATE_URL,
};

export const APK_VERSION = "V1.1.10";
export const APK_SIZE = "7.11 MB";
export const MIN_ANDROID = "6.0";

/** Visible on page and in schema — update when content changes */
export const PAGE_PUBLISHED = "2026-01-15";
export const PAGE_LAST_UPDATED = "2026-06-03";

export const LOGO = {
  src: "/xx555-logo.svg",
  alt: "XX555 Game official logo",
  width: 180,
  height: 56,
} as const;

export const OG_IMAGE = "/screenshots/xx555-features.png";

/** Contact email for trust pages — override via env */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@xx555.net.pk";

export const SITE_NAME = "XX555 Pakistan Guide";

export const TRUST_DISCLAIMER =
  "XX555 is not regulated by SECP or SBP. You can lose deposited money. Only play with funds you can afford to lose.";
