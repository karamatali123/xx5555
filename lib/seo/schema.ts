import { FAQS } from "@/lib/faqs";
import {
  AFFILIATE,
  APK_VERSION,
  LOGO,
  OG_IMAGE,
  PAGE_LAST_UPDATED,
  PAGE_PUBLISHED,
  SITE_URL,
} from "@/lib/constants";

const pageUrl = SITE_URL.replace(/\/$/, "") || SITE_URL;
const ogImageUrl = `${pageUrl}${OG_IMAGE}`;

function howTo(
  id: string,
  name: string,
  description: string,
  steps: string[],
) {
  return {
    "@type": "HowTo",
    "@id": `${pageUrl}/#${id}`,
    name,
    description,
    step: steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
  };
}

export function getJsonLdGraph() {
  const organization = {
    "@type": "Organization",
    "@id": `${pageUrl}/#organization`,
    name: "XX555 Game Pakistan",
    url: pageUrl,
    logo: {
      "@type": "ImageObject",
      url: `${pageUrl}${LOGO.src}`,
      width: LOGO.width,
      height: LOGO.height,
    },
    description:
      "Independent guide for XX555 Game APK download, login, JazzCash and Easypaisa payments in Pakistan.",
  };

  const website = {
    "@type": "WebSite",
    "@id": `${pageUrl}/#website`,
    url: pageUrl,
    name: "XX555 Game Pakistan",
    publisher: { "@id": `${pageUrl}/#organization` },
    inLanguage: "en-PK",
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: pageUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "XX555 Game Download APK",
        item: `${pageUrl}/#download`,
      },
    ],
  };

  const softwareApplication = {
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}/#app`,
    name: "XX555 Game",
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
    },
    description:
      "XX555 Game Download APK for Pakistan with real-money slots, cards, Aviator, JazzCash and Easypaisa deposits, and mobile wallet withdrawals.",
    downloadUrl: AFFILIATE.download,
    softwareVersion: APK_VERSION.replace(/^V/i, ""),
    fileSize: "7.11 MB",
    screenshot: ogImageUrl,
    featureList: [
      "JazzCash deposits from 200 PKR",
      "Easypaisa and JazzCash withdrawals",
      "Aviator, slots, Teen Patti, live casino",
      "Refer and earn program",
      "Daily login bonuses",
    ],
    author: { "@id": `${pageUrl}/#organization` },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: `XX555 Game Download APK (${APK_VERSION}) — Pakistan Guide 2026`,
    description:
      "Complete XX555 Game guide: APK download, login, deposit, JazzCash withdrawal, Easypaisa withdrawal, games, review, and FAQ for Pakistani players.",
    isPartOf: { "@id": `${pageUrl}/#website` },
    about: { "@id": `${pageUrl}/#app` },
    breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    inLanguage: "en-PK",
    datePublished: PAGE_PUBLISHED,
    dateModified: PAGE_LAST_UPDATED,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImageUrl,
      width: 1920,
      height: 1080,
    },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const downloadHowTo = howTo(
    "howto-download",
    "How to Download XX555 Game APK",
    "Install the official XX555 Game APK on Android in Pakistan.",
    [
      "Open the official XX555 download page on your Android phone.",
      "Tap Download APK and save the file to your device.",
      "Go to Settings → Security and enable Install from Unknown Sources.",
      "Open the downloaded APK file and tap Install.",
      "Launch XX555 Game and complete registration or login.",
    ],
  );

  const depositHowTo = howTo(
    "howto-deposit",
    "How to Deposit on XX555 with JazzCash or Easypaisa",
    "Fund your XX555 wallet using Pakistani mobile payment apps.",
    [
      "Log in to your XX555 account.",
      "Open Wallet and tap Deposit.",
      "Select JazzCash or Easypaisa as the payment method.",
      "Enter the deposit amount (minimum about 200 PKR).",
      "Approve the transaction in your wallet app using your PIN.",
      "Wait for the balance to update inside XX555.",
    ],
  );

  const withdrawalHowTo = howTo(
    "howto-withdrawal",
    "How to Withdraw from XX555 to JazzCash or Easypaisa",
    "Cash out XX555 winnings to your Pakistani mobile wallet.",
    [
      "Log in and open Wallet → Withdraw.",
      "Choose JazzCash or Easypaisa.",
      "Enter your registered wallet mobile number.",
      "Type the withdrawal amount (minimum about 300 PKR).",
      "Tap Confirm and wait for SMS or in-app confirmation.",
      "Check your mobile wallet for the incoming transfer.",
    ],
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      breadcrumb,
      softwareApplication,
      webPage,
      faqPage,
      downloadHowTo,
      depositHowTo,
      withdrawalHowTo,
    ],
  };
}
