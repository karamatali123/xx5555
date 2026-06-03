import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

const STEPS = [
  "Log in to your XX555 account.",
  "Go to Wallet or tap Deposit.",
  "Select JazzCash or Easypaisa.",
  "Enter amount (minimum ~200 PKR).",
  "Approve payment in your wallet app with PIN.",
  "Balance updates in the app after success.",
];

export default function DepositSection() {
  return (
    <section
      id="deposit"
      className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-14"
      aria-labelledby="deposit-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="deposit-heading"
          title="XX555 Game Deposit Process"
        />

        <p className="mb-4 text-slate-700">
          Funding your account is required before high-stakes tables. After{" "}
          <InternalLink href="#registration-login">XX555 login</InternalLink>,
          follow these steps for JazzCash or Easypaisa deposits.
        </p>

        <ol className="list-decimal space-y-2 pl-5 text-slate-700">
          {STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <p className="mt-4 text-sm text-slate-600">
          Use the same wallet name as your XX555 profile. Next:{" "}
          <InternalLink href="#withdrawal">withdrawal guide</InternalLink>.
        </p>
      </div>
    </section>
  );
}
