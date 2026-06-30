import Link from "next/link";
import { SITE_URL, TRUST_DISCLAIMER } from "@/lib/constants";
import Logo from "./Logo";

const TRUST_LINKS = [
  { href: "/about-us", label: "About Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

const GUIDE_LINKS = [
  { href: "/#download", label: "Download APK" },
  { href: "/#registration-login", label: "Login Guide" },
  { href: "/#deposit", label: "Deposit" },
  { href: "/#withdrawal", label: "Withdrawal" },
  { href: "/#faq", label: "FAQ" },
] as const;

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo className="mb-4 h-8 w-auto" />
            <p className="text-sm leading-relaxed">{TRUST_DISCLAIMER}</p>
            <p className="mt-3 text-sm">
              Independent guide — not affiliated with XX555.Com.pk. 18+ only.
              Gamble responsibly.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              XX555 Guide
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {GUIDE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Legal &amp; Trust
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {TRUST_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
          © {year} XX555 Pakistan Guide · {SITE_URL.replace(/^https?:\/\//, "")}
        </p>
      </div>
    </footer>
  );
}
