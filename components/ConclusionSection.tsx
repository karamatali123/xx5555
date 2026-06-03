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
          <strong>XX555 Game</strong> remains a top choice for Android users in
          Pakistan who want local wallet support and varied games. This guide
          covered <InternalLink href="#download">XX555 Game Download APK</InternalLink>
          , <InternalLink href="#registration-login">XX555 login</InternalLink>
          , deposits, and{" "}
          <InternalLink href="#withdrawal">Easypaisa withdrawal</InternalLink> steps.
          Review the <InternalLink href="#pros-cons">pros and cons</InternalLink>{" "}
          before you deposit. Play responsibly.
        </p>

        <p className="mt-6">
          <AffiliateLink
            href={AFFILIATE.download}
            className="font-semibold text-brand-600 hover:text-brand-700"
            ariaLabel="Download XX555 Game APK now"
          >
            Download XX555 Game APK →
          </AffiliateLink>
        </p>
      </div>
    </section>
  );
}
