import Link from "next/link";
import LegalPageLayout from "@/components/LegalPageLayout";
import {
  formatPolicyDate,
  PAGE_LAST_UPDATED,
  subPageMetadata,
} from "@/lib/seo/subpage-metadata";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export const metadata = subPageMetadata(
  "Privacy Policy — XX555 Pakistan Guide",
  "How XX555 Pakistan Guide collects, uses, and protects your data. Cookie policy, affiliate disclosure, and your privacy rights.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  const effectiveDate = formatPolicyDate(PAGE_LAST_UPDATED);
  const siteHost = SITE_URL.replace(/^https?:\/\//, "");

  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        <strong>Effective date:</strong> {effectiveDate}
      </p>

      <p>
        This Privacy Policy explains how <strong>{SITE_NAME}</strong> (
        {siteHost}) collects, uses, and protects information when you visit our
        website. We publish independent guides about XX555 Game for players in
        Pakistan. We are not the official XX555 operator.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide</h3>
      <p>
        If you contact us by email, we receive your name, email address, and
        message content. We use this only to respond to your inquiry.
      </p>
      <h3>Automatically collected information</h3>
      <p>
        Like most websites, our hosting provider may log standard technical
        data: IP address, browser type, device type, pages visited, and
        referring URL. We do not require account registration to read our guides.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To operate and improve our website and content</li>
        <li>To respond to contact requests and support questions</li>
        <li>To monitor site security and prevent abuse</li>
        <li>To understand aggregate traffic patterns (not to identify individuals)</li>
      </ul>

      <h2>3. Cookies and Analytics</h2>
      <p>
        We may use essential cookies required for basic site functionality. If
        we add analytics tools (such as Google Analytics), we will update this
        policy. You can disable cookies in your browser settings at any time.
      </p>

      <h2>4. Affiliate Links Disclosure</h2>
      <p>
        Our site contains affiliate links to third-party websites, including the
        official XX555 download and registration pages. When you click these
        links, you leave our site and are subject to the third party&apos;s
        privacy policy. We may earn a commission at no extra cost to you. We
        label sponsored outbound links with <code>rel=&quot;sponsored&quot;</code> where
        applicable.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        We do not sell your personal information. Data may be processed by:
      </p>
      <ul>
        <li>Web hosting and CDN providers</li>
        <li>Email services when you contact us</li>
        <li>Third-party gaming platforms when you follow affiliate links</li>
      </ul>
      <p>
        We are not responsible for how XX555 or other external sites handle your
        data after you leave {siteHost}.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        Contact emails are kept only as long as needed to resolve your request,
        unless a longer period is required by law. Server logs are retained
        according to our hosting provider&apos;s standard schedule.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Depending on applicable law, you may request access to, correction of,
        or deletion of personal data we hold about you. To make a request, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        This website is intended for adults aged 18 and over. We do not
        knowingly collect information from anyone under 18. Gambling content is
        not suitable for minors.
      </p>

      <h2>9. Security</h2>
      <p>
        We use HTTPS and follow reasonable security practices. No method of
        transmission over the internet is 100% secure; we cannot guarantee
        absolute security.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The effective date
        at the top will change when we do. Continued use of the site after
        changes means you accept the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        Questions about this Privacy Policy? Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or visit our{" "}
        <Link href="/contact-us">Contact Us</Link> page.
      </p>
    </LegalPageLayout>
  );
}
