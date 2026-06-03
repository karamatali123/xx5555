import { GAMES } from "@/lib/games";
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
          description="Popular game types inside the XX555 lobby."
        />

        <ul className="grid gap-3 sm:grid-cols-2">
          {GAMES.map((game) => (
            <li
              key={game}
              className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-medium text-slate-800"
            >
              {game}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
