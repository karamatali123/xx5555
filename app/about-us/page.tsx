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
  "About Us — XX555 Pakistan Guide",
  "Who we are: an independent editorial team helping Pakistani players with XX555 Game APK download, login, JazzCash deposits, and withdrawals.",
  "/about-us",
);

export default function AboutUsPage() {
  const updated = formatPolicyDate(PAGE_LAST_UPDATED);

  return (
    <LegalPageLayout title="About Us">
      <p>
        <strong>Last updated:</strong> {updated}
      </p>

      <p>
        <strong>{SITE_NAME}</strong> ({SITE_URL.replace(/^https?:\/\//, "")})
        is an independent informational website for Pakistani players who want
        clear, practical help with <strong>XX555 Game Download APK</strong>,{" "}
        <strong>XX555 login</strong>, JazzCash and Easypaisa payments, and
        responsible play.
      </p>

      <h2>Our Mission</h2>
      <p>
        Search results for XX555 are often filled with short, repetitive pages
        that do not explain deposits, withdrawals, or risks. We built this guide
        to give players in Pakistan a single, honest resource — step-by-step
        instructions, a full FAQ, pros and cons review, and safety warnings about
        fake APK files.
      </p>

      <h2>What We Are — and What We Are Not</h2>
      <ul>
        <li>
          <strong>We are</strong> an editorial guide published by {SITE_NAME}.
        </li>
        <li>
          <strong>We are not</strong> XX555.Com.pk, the app developer, or an
          official customer-support channel.
        </li>
        <li>
          <strong>We do not</strong> process deposits, withdrawals, or account
          recovery for XX555 players.
        </li>
        <li>
          <strong>We may earn</strong> a commission when you use our affiliate
          download or register links, at no extra cost to you. This is disclosed
          on our <Link href="/privacy-policy">Privacy Policy</Link> page.
        </li>
      </ul>

      <h2>How We Create Content</h2>
      <p>
        Our articles are written for Pakistani Android users. We focus on:
      </p>
      <ul>
        <li>Official APK download and installation steps</li>
        <li>Registration and XX555 login with +92 mobile numbers</li>
        <li>JazzCash and Easypaisa deposit and withdrawal guides</li>
        <li>Game categories available in the XX555 lobby</li>
        <li>Responsible gambling and legal context for Pakistan</li>
      </ul>
      <p>
        Content is reviewed and updated when APK versions or payment flows
        change. The current app version covered is <strong>V1.1.10</strong>.
      </p>

      <h2>Editorial Standards</h2>
      <p>
        We aim for accuracy, transparency, and player safety. We clearly state
        that XX555 is real-money gambling with financial risk. We warn against
        clone APKs and never promise guaranteed earnings. If you find an error,
        please <Link href="/contact-us">contact us</Link> so we can correct it.
      </p>

      <h2>Responsible Gambling</h2>
      <p>
        XX555 is not regulated by SECP or SBP. Only play with money you can
        afford to lose. If gambling affects your wellbeing, seek help from a
        qualified counsellor or support service in your area.
      </p>

      <h2>Contact</h2>
      <p>
        For editorial questions, corrections, or privacy requests, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or use our{" "}
        <Link href="/contact-us">Contact Us</Link> page.
      </p>
    </LegalPageLayout>
  );
}
