import InternalLink from "@/components/seo/InternalLink";
import LastUpdated from "@/components/LastUpdated";
import SectionHeading from "./SectionHeading";

const PROS = [
  {
    title: "Local wallet payments",
    detail:
      "JazzCash and Easypaisa work for both deposits and withdrawals — no international card or bank account required.",
  },
  {
    title: "Wide game library",
    detail:
      "Aviator, slots, Teen Patti, live casino, and casual games like Ludo in one 7 MB APK instead of multiple apps.",
  },
  {
    title: "Low entry cost",
    detail:
      "Minimum deposit around 200 PKR and withdrawal from ~300 PKR suits players testing the platform with small amounts.",
  },
  {
    title: "Refer and earn",
    detail:
      "Share your referral code on WhatsApp and earn commission when friends register and play — popular in Karachi and Lahore.",
  },
  {
    title: "Fast mobile experience",
    detail:
      "Short game rounds (especially Aviator and slots) run well on 4G data without long loading screens.",
  },
];

const CONS = [
  {
    title: "Not on Google Play",
    detail:
      "You must sideload the APK and enable unknown sources — a friction point and a vector for fake clone apps if you use unofficial links.",
  },
  {
    title: "Gambling risk",
    detail:
      "Real PKR is at stake on every bet. The house always has an edge on slots and crash games — losses are common over time.",
  },
  {
    title: "Bonus wagering rules",
    detail:
      "Welcome and referral bonuses often require turnover before you can request a XX555 Easypaisa withdrawal or JazzCash cash-out.",
  },
  {
    title: "No government regulation",
    detail:
      "XX555 is not licensed by SECP or SBP. Disputes are handled through in-app support, not a financial ombudsman.",
  },
  {
    title: "Clone APK threat",
    detail:
      "Misspelled app names and Telegram file shares distribute malware. Always verify version V1.1.10 and file size 7.11 MB.",
  },
];

export default function ReviewSection() {
  return (
    <section
      id="pros-cons"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-14"
      aria-labelledby="pros-cons-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="pros-cons-heading"
          title="XX555 Game Review — Pros and Cons"
        />
        <LastUpdated className="mt-1" />

        <p className="mt-4 leading-relaxed text-slate-700">
          We evaluated XX555 based on payment speed, app usability, game variety,
          and common player complaints reported in Pakistan. This is an editorial
          review — not a paid endorsement. We recommend testing with a small{" "}
          <InternalLink href="#deposit">deposit</InternalLink>, playing one or
          two games, then attempting a small{" "}
          <InternalLink href="#withdrawal">withdrawal</InternalLink> before
          committing larger amounts.
        </p>

        <h3 className="mt-8 text-lg font-bold text-green-900">Pros</h3>
        <ul className="mt-3 space-y-3">
          {PROS.map((p) => (
            <li key={p.title} className="rounded-lg border border-green-100 bg-green-50/50 p-3">
              <strong className="text-slate-900">{p.title}</strong>
              <p className="mt-1 text-sm text-slate-600">{p.detail}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-lg font-bold text-red-900">Cons</h3>
        <ul className="mt-3 space-y-3">
          {CONS.map((c) => (
            <li key={c.title} className="rounded-lg border border-red-100 bg-red-50/50 p-3">
              <strong className="text-slate-900">{c.title}</strong>
              <p className="mt-1 text-sm text-slate-600">{c.detail}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-slate-600">
          Verdict: XX555 suits Pakistani Android users who already use JazzCash or
          Easypaisa and want varied games in one app. It is not suitable for
          anyone seeking guaranteed income or bank-level protection. Read the{" "}
          <InternalLink href="#faq">FAQ</InternalLink> for legal context and
          payment troubleshooting.
        </p>
      </div>
    </section>
  );
}
