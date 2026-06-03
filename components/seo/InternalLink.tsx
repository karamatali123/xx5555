import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function InternalLink({
  href,
  children,
  className = "font-medium text-brand-600 underline-offset-2 hover:underline",
}: Props) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
