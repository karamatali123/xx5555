import nextDynamic from "next/dynamic";
import JsonLd from "@/components/seo/JsonLd";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/content/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UserInterfaceSection from "@/components/UserInterfaceSection";
import GamesSection from "@/components/GamesSection";
import DownloadGuide from "@/components/DownloadGuide";
import RegistrationGuide from "@/components/RegistrationGuide";
import DepositSection from "@/components/DepositSection";
import WithdrawalSection from "@/components/WithdrawalSection";
import TipsSection from "@/components/TipsSection";
import ReviewSection from "@/components/ReviewSection";
import PopularSection from "@/components/PopularSection";
import ConclusionSection from "@/components/ConclusionSection";
import FaqSection from "@/components/FaqSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import StickyCta from "@/components/StickyCta";
import SiteHeader from "@/components/SiteHeader";
import { pageMetadata } from "@/lib/seo/metadata";

export const dynamicParams = false;
export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = pageMetadata;

const ScreenshotsSection = nextDynamic(
  () => import("@/components/ScreenshotsSection"),
  {
    loading: () => (
      <div className="mx-auto max-w-4xl px-4 py-14" aria-hidden="true">
        <div className="h-64 animate-pulse rounded-xl bg-slate-200" />
      </div>
    ),
  },
);

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="pb-24 md:pb-0">
        <HeroSection />
        <IntroSection />
        <FeaturesSection />
        <UserInterfaceSection />
        <GamesSection />
        <DownloadGuide />
        <RegistrationGuide />
        <DepositSection />
        <WithdrawalSection />
        <TipsSection />
        <ReviewSection />
        <PopularSection />
        <ScreenshotsSection />
        <ConclusionSection />
        <FaqSection />
        <DisclaimerSection />
      </main>
      <StickyCta />
    </>
  );
}
