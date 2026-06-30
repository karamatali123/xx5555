import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

const TIPS = [
  {
    title: "Test payments before big deposits",
    detail:
      "Deposit 200–500 PKR first, play one low-stakes game, then request a small withdrawal. This confirms JazzCash or Easypaisa is linked correctly.",
  },
  {
    title: "Read bonus wagering terms",
    detail:
      "Welcome credits often require 3×–10× turnover before cash-out. Check the promotion page inside the app — see our deposit guide for details.",
  },
  {
    title: "Pick games that match your skill",
    detail:
      "Aviator and slots are luck-based with high variance. Teen Patti and Rummy reward pattern recognition — start in the games section’s card category.",
  },
  {
    title: "Set a daily PKR limit",
    detail:
      "Decide your maximum loss before opening the app. Stop when you hit it — chasing losses is the most common reason players lose more than planned.",
  },
  {
    title: "Use Aviator auto cash-out",
    detail:
      "Set a target multiplier (e.g. 1.5×) and stick to it. Manual timing during hot streaks leads to holding too long and losing the entire bet.",
  },
  {
    title: "Verify APK authenticity",
    detail:
      "Only install V1.1.10 (7.11 MB) from the official download link. Clone apps steal wallet credentials entered during fake login screens.",
  },
  {
    title: "Match wallet name to account",
    detail:
      "CNIC name on JazzCash/Easypaisa must match your XX555 profile. Mismatches are the top reason for failed withdrawals — see the FAQ.",
  },
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

        <p className="mb-6 text-slate-700">
          These tips are specific to how XX555 works in Pakistan — not generic
          gambling advice. No strategy guarantees profit; the house edge remains
          on every game. Use them to protect your bankroll and avoid common
          mistakes new <strong>XX555 Pakistan</strong> players report.
        </p>

        <div className="space-y-3">
          {TIPS.map((tip) => (
            <article
              key={tip.title}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <h3 className="font-bold text-slate-900">{tip.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {tip.detail}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-600">
          For payment help, see{" "}
          <InternalLink href="#deposit">deposit steps</InternalLink> and{" "}
          <InternalLink href="#withdrawal">withdrawal guide</InternalLink>.
          Treat XX555 as entertainment, not fixed income.
        </p>
      </div>
    </section>
  );
}
