import ScreenshotsCarousel from "./ScreenshotsCarousel";
import SectionHeading from "./SectionHeading";

export default function ScreenshotsSection() {
  return (
    <section
      id="screenshots"
      className="scroll-mt-20 border-b border-slate-200 bg-white py-14"
      aria-labelledby="screenshots-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          id="screenshots-heading"
          title="XX555 Game Screenshots"
          description="Swipe or use arrows to preview the XX555 app interface."
        />

        <ScreenshotsCarousel />
      </div>
    </section>
  );
}
