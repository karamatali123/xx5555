import { getJsonLdGraph } from "@/lib/seo/schema";

export default function JsonLd() {
  const graph = getJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
