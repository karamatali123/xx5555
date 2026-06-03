import InternalLink from "@/components/seo/InternalLink";

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
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          <strong>XX555 Game Download APK</strong> is a free Android earning app
          built for Pakistani players who want slots, cards, and live tables with
          local payments. After you install the file and complete{" "}
          <InternalLink href="#registration-login">XX555 login</InternalLink>,
          you can deposit from 200 PKR using JazzCash or Easypaisa, play popular
          titles listed in our{" "}
          <InternalLink href="#available-games">games section</InternalLink>, and
          request a{" "}
          <InternalLink href="#withdrawal">XX555 JazzCash withdrawal</InternalLink>{" "}
          or{" "}
          <InternalLink href="#withdrawal">Easypaisa withdrawal</InternalLink> when
          you meet the minimum limit.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          This <strong>XX555 Pakistan</strong> guide covers download steps, UI
          features, deposit and withdrawal help, and an honest{" "}
          <InternalLink href="#pros-cons">XX555 review</InternalLink>. For quick
          answers, see the <InternalLink href="#faq">FAQ</InternalLink> below.
        </p>
      </div>
    </section>
  );
}
