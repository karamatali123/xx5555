type Props = {
  id?: string;
  title: string;
  description?: string;
  level?: "h2" | "h3";
};

export default function SectionHeading({
  id,
  title,
  description,
  level = "h2",
}: Props) {
  const Tag = level;
  const className =
    level === "h2"
      ? "text-2xl font-bold text-slate-900 md:text-3xl"
      : "text-lg font-bold text-slate-900";

  return (
    <header className="mb-6">
      <Tag id={id} className={className}>
        {title}
      </Tag>
      {description && (
        <p className="mt-2 text-slate-600">{description}</p>
      )}
    </header>
  );
}
