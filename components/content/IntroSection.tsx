import InternalLink from "@/components/seo/InternalLink";
import LastUpdated from "@/components/LastUpdated";

export default function IntroSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-12"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <h2 id="about-heading" className="text-2xl font-bold text-slate-900 md:text-3xl">
          About XX555 Game in Pakistan
        </h2>
        <LastUpdated className="mt-2" />

        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          <strong>XX555 Game Download APK</strong> is a free Android app used by
          thousands of players across Pakistan who want slots, card games, Aviator,
          and live casino tables without a bank account. The app is distributed
          outside Google Play as a direct APK file (current build{" "}
          <strong>V1.1.10</strong>, about 7.11 MB). After you install it and
          complete <InternalLink href="#registration-login">XX555 login</InternalLink>
          , you fund your wallet with JazzCash or Easypaisa — the same mobile
          wallets used for everyday payments in Karachi, Lahore, Islamabad, and
          smaller cities.
        </p>

        <p className="mt-4 leading-relaxed text-slate-700">
          What makes XX555 different from generic casino apps is local payment
          integration. Deposits often start from <strong>200 PKR</strong>, and
          winnings can be sent back through{" "}
          <InternalLink href="#withdrawal">XX555 JazzCash withdrawal</InternalLink>{" "}
          or{" "}
          <InternalLink href="#withdrawal">XX555 Easypaisa withdrawal</InternalLink>{" "}
          once you meet the minimum cash-out limit (usually around 300 PKR).
          The lobby groups games into slots, fish shooting, live dealers, and
          card tables — see our detailed{" "}
          <InternalLink href="#available-games">games breakdown</InternalLink>{" "}
          for rules and tips per category.
        </p>

        <p className="mt-4 leading-relaxed text-slate-600">
          This independent <strong>XX555 Pakistan</strong> guide is written for
          players who search terms like &ldquo;XX555 Game Download APK,&rdquo;
          &ldquo;XX555 login,&rdquo; or &ldquo;XX555 review&rdquo; and need
          practical steps — not marketing copy. We cover{" "}
          <InternalLink href="#download">how to download safely</InternalLink>,{" "}
          <InternalLink href="#deposit">deposit troubleshooting</InternalLink>,{" "}
          withdrawal timing, an honest{" "}
          <InternalLink href="#pros-cons">pros and cons review</InternalLink>, and{" "}
          <InternalLink href="#faq">15 frequently asked questions</InternalLink>.
          Use the{" "}
          <InternalLink href="#table-of-contents">table of contents</InternalLink>{" "}
          to jump to any section.
        </p>

        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Important:</strong> XX555 is a real-money gambling app, not a
          regulated bank product. Only download from the official link in our{" "}
          <InternalLink href="#download">download section</InternalLink>. Fake
          APK copies with similar names circulate on Telegram — always verify the
          file size matches V1.1.10 before installing.
        </p>
      </div>
    </section>
  );
}
