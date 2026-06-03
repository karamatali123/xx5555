/** Screenshots from /screenshorts — served under /screenshots/ */
export const SCREENSHOTS = {
  home: {
    src: "/screenshots/xx555-home.png",
    alt: "XX555.com homepage with Mystery Bonus promotion and game navigation Pakistan",
    caption: "XX555 Game official homepage — deposit, withdrawal, and game categories",
  },
  casino: {
    src: "/screenshots/xx555-casino.png",
    alt: "XX555 Game casino lobby with Evolution, Pragmatic Play and live dealers",
    caption: "Casino section with daily rebate offers on XX555",
  },
  mobileGames: {
    src: "/screenshots/xx555-mobile-games.png",
    alt: "XX555 Game mobile slots, fish, card games and lottery categories",
    caption: "Mobile game categories — slots, casino, fish, and card games",
  },
  personalCenter: {
    src: "/screenshots/xx555-personal-center.png",
    alt: "XX555 Game personal center with JazzCash wallet deposit withdrawal and rewards",
    caption: "Personal center — balance, deposit, withdrawal, and reward center",
  },
  rewards: {
    src: "/screenshots/xx555-rewards.png",
    alt: "XX555 Game rewards center daily login bonus and promotions Pakistan",
    caption: "Receive center — daily login rewards and promotional vouchers",
  },
} as const;

export const DOWNLOAD_STEP_IMAGES = [
  SCREENSHOTS.home,
  SCREENSHOTS.casino,
  SCREENSHOTS.mobileGames,
  SCREENSHOTS.personalCenter,
] as const;

export type ScreenshotSlide = {
  src: string;
  alt: string;
  caption: string;
};

export const GALLERY_IMAGES: ScreenshotSlide[] = [
  SCREENSHOTS.home,
  SCREENSHOTS.casino,
  SCREENSHOTS.mobileGames,
  SCREENSHOTS.personalCenter,
  SCREENSHOTS.rewards,
];
