"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { GALLERY_IMAGES } from "@/lib/screenshots";

export default function ScreenshotsCarousel() {
  const total = GALLERY_IMAGES.length;
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % total) + total) % total);
    },
    [total],
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="XX555 Game app screenshots"
    >
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-card">
        <div
          className="relative aspect-video w-full"
          aria-live="polite"
          aria-atomic="true"
        >
          {GALLERY_IMAGES.map((shot, i) => (
            <figure
              key={shot.src}
              className={`absolute inset-0 m-0 transition-opacity duration-300 ${
                i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 896px) 100vw, 896px"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
              {shot.caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-center text-sm text-white">
                  {shot.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 md:left-4"
        aria-label="Previous screenshot"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 md:right-4"
        aria-label="Next screenshot"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm font-medium text-slate-600" aria-hidden="true">
          {index + 1} / {total}
        </p>
        <div
          className="flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Screenshot slides"
        >
          {GALLERY_IMAGES.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to screenshot ${i + 1}: ${shot.caption ?? shot.alt}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-brand-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
