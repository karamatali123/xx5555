import { PAGE_LAST_UPDATED } from "@/lib/constants";

export default function LastUpdated({ className = "" }: { className?: string }) {
  const formatted = new Date(PAGE_LAST_UPDATED).toLocaleDateString("en-PK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <p className={`text-sm text-slate-500 ${className}`}>
      <time dateTime={PAGE_LAST_UPDATED}>Last updated: {formatted}</time>
      {" · "}
      <span>Editorial team — XX555 Pakistan Guide</span>
    </p>
  );
}
