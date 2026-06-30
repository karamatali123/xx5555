import Link from "next/link";
import LegalPageLayout from "@/components/LegalPageLayout";
import { subPageMetadata } from "@/lib/seo/subpage-metadata";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata = subPageMetadata(
  "Contact Us — XX555 Pakistan Guide",
  "Get in touch with the XX555 Pakistan Guide team. Email us for content corrections, privacy requests, or general questions.",
  "/contact-us",
);

const CONTACT_TOPICS = [
  {
    title: "Content corrections",
    detail:
      "Found outdated APK version info, wrong payment limits, or a broken link? Let us know so we can update the guide.",
  },
  {
    title: "Privacy requests",
    detail:
      "Request access to or deletion of personal data we hold from your email correspondence.",
  },
  {
    title: "General questions",
    detail:
      "Questions about this website or how our guides work. Note: we cannot access your XX555 account or process payments.",
  },
  {
    title: "XX555 account support",
    detail:
      "For login issues, deposits, or withdrawals inside the app, contact XX555 in-app support or the official operator — we are an independent guide only.",
  },
];

export default function ContactUsPage() {
  const siteHost = SITE_URL.replace(/^https?:\/\//, "");

  return (
    <LegalPageLayout title="Contact Us">
      <p>
        We welcome messages from readers of <strong>{SITE_NAME}</strong>. Use
        the email below for questions about this website ({siteHost}). We
        typically respond within 2–3 business days.
      </p>

      <div className="not-prose my-8 rounded-xl border border-brand-200 bg-brand-50 p-6">
        <h2 className="text-lg font-bold text-slate-900">Email us</h2>
        <p className="mt-2">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=XX555%20Guide%20Inquiry`}
            className="text-xl font-semibold text-brand-700 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Click the address to open your email app, or copy it manually.
        </p>
      </div>

      <h2>What can we help with?</h2>
      <div className="not-prose space-y-3">
        {CONTACT_TOPICS.map((topic) => (
          <div
            key={topic.title}
            className="rounded-lg border border-slate-200 bg-white p-4"
          >
            <h3 className="font-bold text-slate-900">{topic.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{topic.detail}</p>
          </div>
        ))}
      </div>

      <h2>Before you email</h2>
      <ul>
        <li>
          Check our <Link href="/#faq">FAQ section</Link> on the homepage — many
          deposit, withdrawal, and login questions are answered there.
        </li>
        <li>
          Read <Link href="/about-us">About Us</Link> to understand we are not the
          official XX555 operator.
        </li>
        <li>
          See our <Link href="/privacy-policy">Privacy Policy</Link> for how we handle
          your data when you contact us.
        </li>
      </ul>

      <h2>Business &amp; legal</h2>
      <p>
        Website: <a href={SITE_URL}>{siteHost}</a>
        <br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>
        We do not offer phone or WhatsApp support for this guide. Please use
        email so we can keep a written record of your request.
      </p>
    </LegalPageLayout>
  );
}
