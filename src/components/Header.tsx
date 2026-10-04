"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";
import { navLinks, site } from "@/lib/site-data";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-stone-200/80 bg-[#FAF8F5]/95"
          : "border-transparent bg-[#FAF8F5]"
      }`}
    >
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          <Link href="#" className="relative block h-10 w-36 shrink-0 sm:h-11 sm:w-40">
            <Image
              src={images.logo}
              alt={site.name}
              fill
              className="object-contain object-left"
              priority
              sizes="160px"
            />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-stone-700 hover:text-teal-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href={site.phoneHref}>{site.bookLabel}</ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-stone-300 bg-white text-stone-800 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-stone-200 bg-[#FAF8F5] lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-base font-medium text-stone-800"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-teal-800 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-900"
              onClick={() => setMenuOpen(false)}
            >
              {site.bookLabel}
            </a>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
