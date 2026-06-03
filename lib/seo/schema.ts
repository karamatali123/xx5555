import { FAQS } from "@/lib/faqs";
import { AFFILIATE, APK_VERSION, LOGO, SITE_URL } from "@/lib/constants";

const pageUrl = SITE_URL.replace(/\/$/, "") || SITE_URL;

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
      "Guide for XX555 Game APK download, login, and mobile wallet payments in Pakistan.",
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
      "XX555 Game Download APK for Pakistan with real-money games, XX555 login, JazzCash and Easypaisa deposits, and fast withdrawal support.",
    downloadUrl: AFFILIATE.download,
    softwareVersion: APK_VERSION.replace(/^V/i, ""),
    screenshot: `${pageUrl}/screenshots/xx555-home.png`,
    featureList: [
      "JazzCash deposits",
      "Easypaisa withdrawal",
      "Refer and earn",
      "Live multiplayer tables",
    ],
    author: { "@id": `${pageUrl}/#organization` },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: `XX555 Game Download APK (${APK_VERSION}) — Pakistan 2026`,
    description:
      "Complete XX555 Game Download APK guide for Pakistan: login, deposit, JazzCash withdrawal, Easypaisa withdrawal, games, and FAQ.",
    isPartOf: { "@id": `${pageUrl}/#website` },
    about: { "@id": `${pageUrl}/#app` },
    breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    inLanguage: "en-PK",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${pageUrl}/screenshots/xx555-home.png`,
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

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      breadcrumb,
      softwareApplication,
      webPage,
      faqPage,
    ],
  };
}
