import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

const STEPS = [
  "Log in to your XX555 account with your registered mobile number.",
  "Tap Wallet or the Deposit button on the home screen.",
  "Select JazzCash or Easypaisa as your payment method.",
  "Enter the deposit amount — minimum is usually around 200 PKR.",
  "You will be redirected or shown a payment request in your wallet app.",
  "Approve the transaction with your wallet PIN or fingerprint.",
  "Return to XX555 — your balance should update within 1–3 minutes.",
];

const TROUBLESHOOTING = [
  {
    problem: "Deposit not credited after payment",
    fix: "Wait 5 minutes, then screenshot the JazzCash/Easypaisa receipt and contact in-app support with your transaction ID.",
  },
  {
    problem: "Payment failed in wallet app",
    fix: "Check your wallet balance and daily transfer limit. JazzCash accounts need sufficient funds plus any fee.",
  },
  {
    problem: "Name mismatch error",
    fix: "The CNIC name on your wallet must match your XX555 profile. Update one side before retrying.",
  },
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
          Funding your account is required before playing high-stakes tables or
          claiming some bonuses. After{" "}
          <InternalLink href="#registration-login">XX555 login</InternalLink>,
          both JazzCash and Easypaisa are supported for instant deposits during
          normal operating hours. Always use a wallet registered in your own name.
        </p>

        <h3 className="text-lg font-bold text-slate-900">Step-by-step deposit</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          {STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h3 className="mt-8 text-lg font-bold text-slate-900">
          Common deposit problems
        </h3>
        <div className="mt-3 space-y-3">
          {TROUBLESHOOTING.map((item) => (
            <div
              key={item.problem}
              className="rounded-lg border border-slate-200 bg-white p-3"
            >
              <strong className="text-slate-900">{item.problem}</strong>
              <p className="mt-1 text-sm text-slate-600">{item.fix}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-slate-600">
          Ready to cash out? Continue to the{" "}
          <InternalLink href="#withdrawal">withdrawal guide</InternalLink> or
          check the <InternalLink href="#faq">FAQ</InternalLink> for minimum
          limits.
        </p>
      </div>
    </section>
  );
}
