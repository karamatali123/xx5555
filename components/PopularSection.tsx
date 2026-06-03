import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

const REASONS = [
  "JazzCash and Easypaisa work without a bank account.",
  "Low deposit from about 200 PKR.",
  "Many games in one small APK.",
  "Referral income from WhatsApp sharing.",
  "Fast rounds fit mobile users in cities like Karachi and Lahore.",
  "Welcome bonus for new players in 2026.",
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

        <p className="mb-4 text-slate-700">
          <strong>XX555 Pakistan</strong> growth comes from simple onboarding and
          wallet payments. See <InternalLink href="#download">how to download</InternalLink>{" "}
          and <InternalLink href="#faq">common questions</InternalLink>.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          {REASONS.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
