/** Screenshots served from /public/screenshots/ */
export const SCREENSHOTS = {
  features: {
    src: "/screenshots/xx555-features.png",
    alt: "XX555 Game key features infographic — JazzCash, Easypaisa, slots, Aviator, bonuses, and live tables for Pakistan",
    caption: "Key features of XX555 Game APK for Pakistani players",
  },
  login: {
    src: "/screenshots/xx555-login.png",
    alt: "XX555 Game registration and login step-by-step guide with Pakistani mobile number and OTP verification",
    caption: "Registration and XX555 login process illustrated",
  },
} as const;

export const DOWNLOAD_STEP_IMAGES = [SCREENSHOTS.features, SCREENSHOTS.login] as const;

export type ScreenshotSlide = {
  src: string;
  alt: string;
  caption: string;
};

export const GALLERY_IMAGES: ScreenshotSlide[] = [
  SCREENSHOTS.features,
  SCREENSHOTS.login,
];
