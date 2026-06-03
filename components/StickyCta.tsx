import AffiliateLink from "@/components/seo/AffiliateLink";
import { AFFILIATE } from "@/lib/constants";

export default function StickyCta() {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden"
      aria-label="Quick download actions"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <AffiliateLink
          href={AFFILIATE.download}
          className="flex-1 rounded-lg bg-brand-600 py-2.5 text-center text-sm font-semibold text-white"
          ariaLabel="Download XX555 Game APK"
        >
          Download APK
        </AffiliateLink>
        <AffiliateLink
          href={AFFILIATE.login}
          className="flex-1 rounded-lg border border-brand-600 py-2.5 text-center text-sm font-semibold text-brand-700"
          ariaLabel="XX555 login"
        >
          Login
        </AffiliateLink>
        <AffiliateLink
          href={AFFILIATE.register}
          className="flex-1 rounded-lg bg-accent-500 py-2.5 text-center text-sm font-semibold text-slate-900"
          ariaLabel="Register on XX555"
        >
          Register
        </AffiliateLink>
      </div>
    </aside>
  );
}
