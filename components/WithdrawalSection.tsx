import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

const STEPS = [
  "Log in and open Wallet → Withdraw.",
  "Choose JazzCash or Easypaisa.",
  "Enter your registered wallet number.",
  "Type withdrawal amount (minimum ~300 PKR).",
  "Tap Confirm and wait for SMS or app notice.",
  "Check your mobile wallet for the transfer.",
];

export default function WithdrawalSection() {
  return (
    <section
      id="withdrawal"
      className="scroll-mt-20 py-14"
      aria-labelledby="withdrawal-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="withdrawal-heading"
          title="XX555 Game Withdrawal Process"
        />

        <p className="mb-4 text-slate-700">
          Pakistani players use <strong>XX555 JazzCash withdrawal</strong> and{" "}
          <strong>XX555 Easypaisa withdrawal</strong> to move winnings from the
          app to their mobile wallet. Complete any bonus rules from the{" "}
          <InternalLink href="#key-features">bonus section</InternalLink> first.
        </p>

        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          {STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Tip:</strong> Wrong wallet name is a common reason for failed
          payouts. See <InternalLink href="#faq">FAQ</InternalLink> for more help.
        </p>
      </div>
    </section>
  );
}
