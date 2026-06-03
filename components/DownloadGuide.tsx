import { AFFILIATE } from "@/lib/constants";
import AffiliateLink from "@/components/seo/AffiliateLink";
import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

const STEPS = [
  "Open the official XX555 website on your Android phone.",
  "Tap Download APK and save the file.",
  "Enable Install from Unknown Sources in Settings.",
  "Open the APK file and tap Install.",
  "Launch the app when installation finishes.",
];

export default function DownloadGuide() {
  return (
    <section
      id="download"
      className="scroll-mt-20 border-t border-slate-200 bg-white py-14"
      aria-labelledby="download-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="download-heading"
          title="XX555 Game Download APK"
        />

        <p className="mb-4 text-slate-700">
          The <strong>XX555 Game Download APK</strong> is not on Google Play.
          Use the official link below, then complete{" "}
          <InternalLink href="#registration-login">registration</InternalLink>.
        </p>

        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          {STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <p className="mt-6">
          <AffiliateLink
            href={AFFILIATE.download}
            className="inline-flex rounded-xl bg-brand-600 px-8 py-3 font-bold text-white hover:bg-brand-700"
            ariaLabel="Download XX555 Game APK for Pakistan"
          >
            Download XX555 APK
          </AffiliateLink>
        </p>
      </div>
    </section>
  );
}
