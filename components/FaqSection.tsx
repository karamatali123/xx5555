import { FAQS } from "@/lib/faqs";
import SectionHeading from "./SectionHeading";

/** Server-rendered accordion — no client JS, SEO-friendly for crawlers */
export default function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 border-t border-slate-200 bg-white py-14"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="faq-heading"
          title="FAQs"
          description="Common questions about XX555 Game Download APK, login, and payments in Pakistan."
        />

        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200">
          {FAQS.map((faq, index) => (
            <details
              key={faq.question}
              className="group"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-semibold text-slate-900 marker:content-none hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-600">
                <span>{faq.question}</span>
                <span
                  className="shrink-0 text-brand-600 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-4 pb-4 text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
