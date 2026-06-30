import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    title: "Mobile wallet culture",
    detail:
      "Over 60 million JazzCash and Easypaisa accounts in Pakistan mean most adults can fund XX555 without a debit card or bank visit.",
  },
  {
    title: "Low minimum deposit",
    detail:
      "Starting from about 200 PKR removes the barrier that international casino sites create with $10–20 minimums and foreign payment methods.",
  },
  {
    title: "WhatsApp referral economy",
    detail:
      "Players in Karachi, Lahore, Faisalabad, and Peshawar share referral links in family and friend groups, creating organic growth without TV ads.",
  },
  {
    title: "One app, many games",
    detail:
      "Instead of installing separate apps for Aviator, slots, and Teen Patti, XX555 bundles them in a 7.11 MB APK that runs on mid-range Android phones.",
  },
  {
    title: "Short sessions on mobile data",
    detail:
      "Aviator rounds finish in seconds and slots load quickly — designed for commuters and students on limited data plans.",
  },
  {
    title: "2026 welcome promotions",
    detail:
      "New registrations often trigger deposit-match or login bonuses shown on the official site, giving first-time players extra balance to explore games.",
  },
];

export default function PopularSection() {
  return (
    <section
      id="why-popular"
      className="scroll-mt-20 border-t border-slate-200 bg-white py-14"
      aria-labelledby="why-popular-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="why-popular-heading"
          title="Why Is XX555 Game Popular in Pakistan?"
        />

        <p className="mb-6 text-slate-700">
          Search interest for <strong>XX555 Pakistan</strong> has grown because
          the app solves a specific local problem: real-money gaming with wallets
          people already carry on their phones. Unlike international platforms
          that require Visa cards or crypto, XX555 onboarding takes under five
          minutes after you complete the{" "}
          <InternalLink href="#download">APK download</InternalLink> and{" "}
          <InternalLink href="#registration-login">registration</InternalLink>.
        </p>

        <div className="space-y-4">
          {REASONS.map((reason) => (
            <article
              key={reason.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <h3 className="font-bold text-slate-900">{reason.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {reason.detail}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-600">
          Popularity does not equal safety or profitability. Treat XX555 as
          entertainment. Compare our{" "}
          <InternalLink href="#pros-cons">honest review</InternalLink> before
          your first <InternalLink href="#deposit">deposit</InternalLink>.
        </p>
      </div>
    </section>
  );
}
