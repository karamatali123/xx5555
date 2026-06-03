import { AFFILIATE, APK_VERSION } from "@/lib/constants";
import { SCREENSHOTS } from "@/lib/screenshots";
import AffiliateLink from "@/components/seo/AffiliateLink";
import Logo from "./Logo";
import ScreenshotImage from "./ScreenshotImage";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-slate-900 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <Logo className="mb-6 h-11 w-auto md:h-12" priority />
            <h1
              id="hero-heading"
              className="text-2xl font-extrabold leading-tight md:text-4xl"
            >
              XX555 Game Download ({APK_VERSION}) New Earning App In Pakistan
              2026
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              Get the official <strong>XX555 Game Download APK</strong> for
              Android — free install, fast <strong>XX555 login</strong>, and
              real-money games for <strong>XX555 Pakistan</strong> players.
              Deposit with JazzCash, cash out with{" "}
              <strong>XX555 Easypaisa withdrawal</strong> or{" "}
              <strong>XX555 JazzCash withdrawal</strong> in minutes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <AffiliateLink
                href={AFFILIATE.download}
                className="rounded-xl bg-accent-500 px-6 py-3 font-bold text-slate-900 hover:bg-accent-400"
                ariaLabel="Download XX555 Game APK"
              >
                Download APK
              </AffiliateLink>
              <AffiliateLink
                href={AFFILIATE.login}
                className="rounded-xl border border-white/40 px-6 py-3 font-semibold hover:bg-white/10"
                ariaLabel="XX555 login"
              >
                Login
              </AffiliateLink>
              <AffiliateLink
                href={AFFILIATE.register}
                className="rounded-xl bg-brand-500 px-6 py-3 font-semibold hover:bg-brand-400"
                ariaLabel="Register XX555 account"
              >
                Register
              </AffiliateLink>
            </div>
          </div>

          <ScreenshotImage
            src={SCREENSHOTS.home.src}
            alt={SCREENSHOTS.home.alt}
            priority
            className="border-white/20"
          />
        </div>
      </div>
    </section>
  );
}
