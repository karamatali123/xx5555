import AffiliateLink from "@/components/seo/AffiliateLink";
import { AFFILIATE } from "@/lib/constants";
import Logo from "./Logo";

const NAV = [
  { href: "#table-of-contents", label: "Contents" },
  { href: "#key-features", label: "Features" },
  { href: "#available-games", label: "Games" },
  { href: "#download", label: "Download" },
  { href: "#deposit", label: "Deposit" },
  { href: "#withdrawal", label: "Withdraw" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo priority />
        <nav aria-label="Page sections" className="hidden gap-5 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <AffiliateLink
          href={AFFILIATE.download}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          ariaLabel="Download XX555 APK"
        >
          Download
        </AffiliateLink>
      </div>
    </header>
  );
}
