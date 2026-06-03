import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
};

export default function ScreenshotImage({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: Props) {
  return (
    <figure
      className={`m-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-card ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="h-auto w-full object-cover object-top"
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        decoding="async"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
      />
      {caption && (
        <figcaption className="px-4 py-2 text-center text-xs text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
