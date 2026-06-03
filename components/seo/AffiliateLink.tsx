import type { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export default function AffiliateLink({
  href,
  className,
  children,
  ariaLabel,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
