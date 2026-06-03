import { TRUST_DISCLAIMER } from "@/lib/constants";
import Logo from "./Logo";

export default function DisclaimerSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-900 py-10 text-slate-300">
      <div className="mx-auto max-w-3xl px-4 text-sm leading-relaxed">
        <Logo className="mb-4 h-8 w-auto" />
        <p>{TRUST_DISCLAIMER}</p>
        <p className="mt-3">
          Independent guide — not affiliated with XX555. 18+ only. Gamble
          responsibly.
        </p>
      </div>
    </section>
  );
}
