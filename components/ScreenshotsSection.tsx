import InternalLink from "@/components/seo/InternalLink";
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
          description="Visual preview of the XX555 app — key features infographic and registration/login walkthrough."
        />

        <p className="mb-6 text-slate-700">
          These screenshots show what Pakistani players see after installing the
          XX555 APK. The first image lists all major features including JazzCash,
          Easypaisa, and game categories. The second walks through{" "}
          <InternalLink href="#registration-login">registration and XX555 login</InternalLink>{" "}
          step by step. Swipe or use the arrows to browse.
        </p>

        <ScreenshotsCarousel />
      </div>
    </section>
  );
}
