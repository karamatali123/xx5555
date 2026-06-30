import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({ title, children }: Props) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="py-12 md:py-16">
        <article className="prose prose-slate mx-auto max-w-3xl px-4 prose-headings:text-slate-900 prose-a:text-brand-700">
          <h1>{title}</h1>
          {children}
          <p className="not-prose mt-10 text-sm text-slate-500">
            <Link href="/" className="font-medium text-brand-700 hover:underline">
              ← Back to XX555 Game guide
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
