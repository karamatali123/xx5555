import SectionHeading from "./SectionHeading";

const PROS = [
  "Real money games with JazzCash and Easypaisa",
  "Many game types in one APK",
  "Refer and earn program",
  "Low minimum deposit and withdrawal",
  "Daily bonuses and promotions",
];

const CONS = [
  "Not available on Google Play Store",
  "Gambling risk — you can lose money",
  "Bonus wagering can delay withdrawals",
  "Fake APK copies exist online",
  "Not regulated like a bank or broker",
];

export default function ReviewSection() {
  return (
    <section
      id="pros-cons"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-14"
      aria-labelledby="pros-cons-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading id="pros-cons-heading" title="Pros and Cons" />

        <h3 className="text-lg font-bold text-green-900">Pros</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
          {PROS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <h3 className="mt-8 text-lg font-bold text-red-900">Cons</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
          {CONS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
