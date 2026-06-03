import { TABLE_OF_CONTENTS } from "@/lib/toc";

export default function TableOfContents() {
  return (
    <nav
      id="table-of-contents"
      className="scroll-mt-20 border-b border-slate-200 bg-slate-50 py-12"
      aria-labelledby="toc-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <details
          className="group rounded-xl border border-slate-200 bg-white shadow-card"
          open
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-semibold text-slate-900 marker:content-none hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-600 md:px-5 md:py-5">
            <span>
              <span id="toc-heading" className="block text-lg md:text-xl">
                Table of Contents
              </span>
              <span className="mt-1 block text-sm font-normal text-slate-500">
                {TABLE_OF_CONTENTS.length} sections — tap to expand or collapse
              </span>
            </span>
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700 transition group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>

          <ol className="divide-y divide-slate-100 border-t border-slate-100 px-2 pb-2 md:px-3 md:pb-3">
            {TABLE_OF_CONTENTS.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-800"
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-800"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </nav>
  );
}
