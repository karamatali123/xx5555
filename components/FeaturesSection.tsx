import Image from "next/image";
import SectionHeading from "./SectionHeading";

const FEATURES_IMAGE = {
  src: "/screenshots/xx555-features.png",
  alt: "Key features of XX555 Game — real money gameplay, JazzCash and Easypaisa, live tables, bonuses, and more for Pakistan",
  width: 1920,
  height: 1080,
};

const FEATURES = [
  {
    title: "Real Money Gameplay",
    body: "Play with real PKR balance and withdraw winnings to your wallet.",
  },
  {
    title: "Multiple Game Options",
    body: "Slots, cards, casino, Aviator, and more in one app.",
  },
  {
    title: "Refer and Earn Program",
    body: "Invite friends with your code and earn referral rewards.",
  },
  {
    title: "Live Multiplayer Tables",
    body: "Join live tables for Teen Patti, poker, and casino games.",
  },
  {
    title: "Bonus and Rewards System",
    body: "Welcome bonus, daily login, VIP perks, and promo events.",
  },
  {
    title: "24/7 Customer Support",
    body: "In-app chat support for account and payment help.",
  },
  {
    title: "Fair Play System",
    body: "RNG-based games with published rules per table.",
  },
  {
    title: "Local Payment Support",
    body: "JazzCash and Easypaisa for fast deposits and withdrawals.",
  },
  {
    title: "Fast Game Rounds",
    body: "Quick rounds on slots and Aviator for short sessions.",
  },
  {
    title: "Multiple Betting Limits",
    body: "Low and high stakes tables for all budgets.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="key-features"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-14"
      aria-labelledby="key-features-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <div className="min-w-0 flex-1">
            <SectionHeading
              id="key-features-heading"
              title="Key Features of XX555 Game"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {FEATURES.map((f) => (
                <article
                  key={f.title}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-4"
                >
                  <h3 className="font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.body}</p>
                </article>
              ))}
            </div>
          </div>

          <figure className="w-full shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-card lg:sticky lg:top-24 lg:max-w-md lg:flex-1">
            <Image
              src={FEATURES_IMAGE.src}
              alt={FEATURES_IMAGE.alt}
              width={FEATURES_IMAGE.width}
              height={FEATURES_IMAGE.height}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 448px"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="sr-only">
              Infographic listing all key features of XX555 Game for Pakistani
              players
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
