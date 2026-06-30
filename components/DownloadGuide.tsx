import { AFFILIATE, APK_SIZE, APK_VERSION, MIN_ANDROID } from "@/lib/constants";
import AffiliateLink from "@/components/seo/AffiliateLink";
import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    step: "Open the official XX555 download page on your Android phone (Chrome or Samsung Internet).",
    note: "Avoid third-party APK sites — they often bundle older or modified files.",
  },
  {
    step: "Tap Download APK and wait for the file to save (about " + APK_SIZE + ", version " + APK_VERSION + ").",
    note: "Check file size in your Downloads folder before installing.",
  },
  {
    step: "Go to Settings → Security → Install unknown apps, and allow your browser.",
    note: "On Android 8+, permission is per-app, not a global toggle.",
  },
  {
    step: "Open the APK from Downloads and tap Install. Grant storage permission if asked.",
    note: "Requires Android " + MIN_ANDROID + " or higher.",
  },
  {
    step: "Launch XX555 Game, then Register or Login with your Pakistani mobile number.",
    note: "See our registration infographic for the full walkthrough.",
  },
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
          The <strong>XX555 Game Download APK</strong> is not listed on Google
          Play because real-money gambling apps are restricted in the Play Store.
          You install it directly from the official site — the same method used
          by most earning apps in Pakistan. After install, complete{" "}
          <InternalLink href="#registration-login">XX555 login</InternalLink> or
          register with your +92 mobile number.
        </p>

        <ol className="space-y-4">
          {STEPS.map((item, i) => (
            <li key={item.step} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="font-semibold text-brand-700">Step {i + 1}.</span>{" "}
              <span className="text-slate-700">{item.step}</span>
              <p className="mt-1 text-sm text-slate-500">{item.note}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
          <strong>Security tip:</strong> If your phone warns the file is
          &ldquo;harmful,&rdquo; that is normal for sideloaded APKs. Verify you
          downloaded from the link below and that the version matches{" "}
          {APK_VERSION}. Never install XX555 from random Telegram channels.
        </p>

        <p className="mt-6">
          <AffiliateLink
            href={AFFILIATE.download}
            className="inline-flex rounded-xl bg-brand-600 px-8 py-3 font-bold text-white hover:bg-brand-700"
            ariaLabel="Download XX555 Game APK for Pakistan"
          >
            Download XX555 APK ({APK_VERSION})
          </AffiliateLink>
        </p>
      </div>
    </section>
  );
}
