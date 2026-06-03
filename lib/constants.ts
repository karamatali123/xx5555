export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://xx555.net.pk";

/** Official affiliate / referral link */
export const AFFILIATE_URL =
  process.env.NEXT_PUBLIC_XX555_AFFILIATE_URL ??
  "http://www.xx55511.com/?r=jsi6829";

export const AFFILIATE = {
  download:
    process.env.NEXT_PUBLIC_XX555_DOWNLOAD_URL ?? AFFILIATE_URL,
  login: process.env.NEXT_PUBLIC_XX555_LOGIN_URL ?? AFFILIATE_URL,
  register: process.env.NEXT_PUBLIC_XX555_REGISTER_URL ?? AFFILIATE_URL,
};

export const APK_VERSION = "V1.1.10";

export const LOGO = {
  src: "/xx555-logo.png",
  alt: "XX555.com official logo",
  width: 180,
  height: 56,
} as const;

export const TRUST_DISCLAIMER =
  "XX555 is not regulated by SECP or SBP. You can lose deposited money. Only play with funds you can afford to lose.";
