import Link from "next/link";
import { type ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800";

const variants = {
  primary: `${base} bg-teal-800 text-white hover:bg-teal-900`,
  secondary: `${base} border border-stone-300 bg-white text-stone-800 hover:border-stone-400 hover:bg-stone-50`,
  ghost: `${base} px-3 py-2 text-teal-900 hover:bg-teal-900/5`,
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = `${variants[variant]} ${className}`;

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
