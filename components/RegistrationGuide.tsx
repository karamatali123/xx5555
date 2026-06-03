import Image from "next/image";
import { AFFILIATE } from "@/lib/constants";
import AffiliateLink from "@/components/seo/AffiliateLink";
import SectionHeading from "./SectionHeading";

const REGISTRATION_IMAGE = {
  src: "/screenshots/xx555-login.png",
  alt: "XX555 Game registration and login guide — install APK, register with Pakistani mobile number, OTP verification, and sign in steps",
  width: 1408,
  height: 768,
};

const REGISTER_STEPS = [
  "Install and open XX555 Game APK.",
  "Tap Register on the welcome screen.",
  "Enter your Pakistani mobile number.",
  "Create a password and confirm it.",
  "Add referral code if you have one.",
  "Complete OTP verification when prompted.",
];

const LOGIN_STEPS = [
  "Open the XX555 app.",
  "Tap Login.",
  "Enter your registered mobile number.",
  "Enter your password and sign in.",
];

export default function RegistrationGuide() {
  return (
    <section
      id="registration-login"
      className="scroll-mt-20 bg-slate-50 py-14"
      aria-labelledby="registration-login-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="registration-login-heading"
          title="Registration Process & XX555 Login"
        />

        <figure className="mt-6 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
          <Image
            src={REGISTRATION_IMAGE.src}
            alt={REGISTRATION_IMAGE.alt}
            width={REGISTRATION_IMAGE.width}
            height={REGISTRATION_IMAGE.height}
            className="h-auto w-full max-w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="sr-only">
            Step-by-step infographic for XX555 Game registration and login in
            Pakistan
          </figcaption>
        </figure>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Registration</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              {REGISTER_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900">XX555 Login</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              {LOGIN_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <AffiliateLink
            href={AFFILIATE.register}
            className="rounded-xl bg-accent-500 px-6 py-3 font-bold text-slate-900"
            ariaLabel="Register on XX555 Game"
          >
            Register
          </AffiliateLink>
          <AffiliateLink
            href={AFFILIATE.login}
            className="rounded-xl border border-brand-600 px-6 py-3 font-semibold text-brand-700"
            ariaLabel="XX555 login page"
          >
            Login
          </AffiliateLink>
        </div>
      </div>
    </section>
  );
}
