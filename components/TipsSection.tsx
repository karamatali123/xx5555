import SectionHeading from "./SectionHeading";

const TIPS = [
  "Start with the minimum deposit and test a small withdrawal first.",
  "Read bonus terms before you play with welcome credits.",
  "Pick games you understand — slots are high risk, cards need skill.",
  "Set a daily budget and stop when you reach your limit.",
  "Use referral codes only from people you trust.",
  "Keep the APK updated from the official download page.",
  "Never share your login or wallet PIN with anyone.",
];

export default function TipsSection() {
  return (
    <section
      id="tips"
      className="scroll-mt-20 bg-slate-50 py-14"
      aria-labelledby="tips-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="tips-heading"
          title="Tips and Tricks to Win at XX555 Com"
        />

        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          {TIPS.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-slate-600">
          No strategy guarantees profit. Treat XX555 as entertainment, not
          fixed income.
        </p>
      </div>
    </section>
  );
}
