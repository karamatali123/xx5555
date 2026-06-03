import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/lib/constants";

type Props = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "h-9 w-auto md:h-10", priority }: Props) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="XX555 home">
      <Image
        src={LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        className={className}
        priority={priority}
      />
    </Link>
  );
}
