import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

const STEPS = [
  "Log in and open Wallet → Withdraw from the home screen or Personal Center.",
  "Choose JazzCash or Easypaisa as the payout method.",
  "Enter the mobile number linked to your wallet (must match XX555 profile).",
  "Type the withdrawal amount — minimum is typically around 300 PKR.",
  "Review the summary and tap Confirm.",
  "Wait for SMS confirmation from XX555 and check your wallet for the transfer.",
];

const TIPS = [
  "Complete bonus wagering requirements before withdrawing promotional balance.",
  "First withdrawal may take longer while the account is verified.",
  "Withdraw during business hours for fastest JazzCash/Easypaisa processing.",
  "Keep your wallet active — dormant accounts sometimes reject incoming transfers.",
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
          Pakistani players rely on <strong>XX555 JazzCash withdrawal</strong>{" "}
          and <strong>XX555 Easypaisa withdrawal</strong> to move winnings from
          the app back to their everyday wallet. Most successful payouts arrive
          within minutes, though bonus-tied balances and first-time withdrawals
          can take up to 24 hours. Complete any active promotion rules from the{" "}
          <InternalLink href="#key-features">bonus section</InternalLink> first.
        </p>

        <h3 className="text-lg font-bold text-slate-900">How to withdraw</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          {STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h3 className="mt-8 text-lg font-bold text-slate-900">
          Withdrawal tips for Pakistan
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          {TIPS.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>

        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Most common rejection reason:</strong> wallet number or CNIC
          name does not match your XX555 account. Double-check both before
          confirming. See <InternalLink href="#faq">FAQ</InternalLink> for more
          help.
        </p>
      </div>
    </section>
  );
}
