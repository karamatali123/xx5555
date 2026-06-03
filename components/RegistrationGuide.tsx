import { AFFILIATE } from "@/lib/constants";
import AffiliateLink from "@/components/seo/AffiliateLink";
import SectionHeading from "./SectionHeading";

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
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="registration-login-heading"
          title="Registration Process & XX555 Login"
        />

        <h3 className="text-lg font-bold text-slate-900">Registration</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          {REGISTER_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h3 className="mt-8 text-lg font-bold text-slate-900">XX555 Login</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          {LOGIN_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

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
