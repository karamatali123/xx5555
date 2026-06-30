import { AFFILIATE } from "@/lib/constants";
import AffiliateLink from "@/components/seo/AffiliateLink";
import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

export default function ConclusionSection() {
  return (
    <section
      id="conclusion"
      className="scroll-mt-20 bg-slate-50 py-14"
      aria-labelledby="conclusion-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading id="conclusion-heading" title="Conclusion" />

        <p className="leading-relaxed text-slate-700">
          <strong>XX555 Game</strong> is one of the most-searched earning apps
          in Pakistan because it combines local JazzCash and Easypaisa payments
          with a broad game library in a single lightweight APK. This guide
          walked you through the full journey:{" "}
          <InternalLink href="#download">XX555 Game Download APK</InternalLink>{" "}
          installation,{" "}
          <InternalLink href="#registration-login">XX555 login</InternalLink> and
          registration,{" "}
          <InternalLink href="#deposit">deposit</InternalLink>,{" "}
          <InternalLink href="#available-games">available games</InternalLink>,{" "}
          <InternalLink href="#withdrawal">Easypaisa and JazzCash withdrawal</InternalLink>
          , and an honest{" "}
          <InternalLink href="#pros-cons">pros and cons review</InternalLink>.
        </p>

        <p className="mt-4 leading-relaxed text-slate-700">
          Before you deposit, remember that XX555 is real-money gambling — not a
          savings product or guaranteed income source. Start small, verify your
          wallet details, and read the{" "}
          <InternalLink href="#faq">15 FAQs</InternalLink> if anything is
          unclear. If you decide to proceed, use only the official download link
          below to avoid fake APK clones.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <AffiliateLink
            href={AFFILIATE.download}
            className="rounded-xl bg-brand-600 px-6 py-3 font-bold text-white hover:bg-brand-700"
            ariaLabel="Download XX555 Game APK now"
          >
            Download XX555 Game APK →
          </AffiliateLink>
          <AffiliateLink
            href={AFFILIATE.register}
            className="rounded-xl border border-brand-600 px-6 py-3 font-semibold text-brand-700"
            ariaLabel="Register XX555 account"
          >
            Register Now
          </AffiliateLink>
        </div>
      </div>
    </section>
  );
}
