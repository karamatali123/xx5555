import { GAMES } from "@/lib/games";
import InternalLink from "@/components/seo/InternalLink";
import SectionHeading from "./SectionHeading";

export default function GamesSection() {
  return (
    <section
      id="available-games"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-14"
      aria-labelledby="available-games-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="available-games-heading"
          title="Available Games at XX555 App"
          description="Every major game category inside the XX555 lobby, with what to expect before you bet real PKR."
        />

        <p className="mb-6 text-slate-700">
          The XX555 app organizes titles by type so you can switch between quick
          slots and longer card sessions. Providers such as JILI and Pragmatic
          Play power many slot and live tables. After{" "}
          <InternalLink href="#deposit">depositing</InternalLink>, start with
          low-stakes tables to learn each game before increasing your bet size.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {GAMES.map((game) => (
            <article
              key={game.name}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-slate-900">{game.name}</h3>
                <span className="shrink-0 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-800">
                  {game.category}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {game.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-600">
          Game availability can change with APK updates. If a title is missing,
          download the latest build from our{" "}
          <InternalLink href="#download">XX555 Game Download APK</InternalLink>{" "}
          section. For strategy advice, see{" "}
          <InternalLink href="#tips">tips and tricks</InternalLink>.
        </p>
      </div>
    </section>
  );
}
