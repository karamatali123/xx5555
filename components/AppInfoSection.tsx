import { APP_INFO } from "@/lib/app-info";

export default function AppInfoSection() {
  return (
    <section
      id="app-info"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-10"
      aria-labelledby="app-info-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <h2 id="app-info-heading" className="sr-only">
          XX555 App Information
        </h2>

        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-card">
          <div className="bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white md:px-5">
            XX555 Game — App Details
          </div>
          <dl className="divide-y divide-slate-200">
            {APP_INFO.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[minmax(7rem,35%)_1fr] sm:gap-4 sm:px-5"
              >
                <dt className="text-sm font-semibold text-slate-900">
                  {row.label}
                </dt>
                <dd className="text-sm text-slate-600">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
