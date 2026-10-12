"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./motifs";
import { BOOKING_URL, btnPrimaryBase } from "./shared";

const NAV = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#guarantee", label: "Guarantee" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export function HomeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-ops-cream transition-colors duration-200 ${
        scrolled || open ? "border-ops-line/70" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 md:h-[72px] md:px-6">
        <Link href="/" className="rounded-md" aria-label="TYGrowth.com home">
          <Wordmark />
        </Link>

        <div className="flex items-center gap-1.5 md:gap-3 lg:gap-8">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-sm text-[15px] font-medium text-ops-text transition-colors hover:text-ops-moss"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnPrimaryBase} whitespace-nowrap px-3.5 py-2 text-[13px] sm:px-4 sm:text-sm md:px-6 md:py-3 md:text-base`}
          >
            Book a fit call
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-ops-ink transition-colors hover:bg-ops-ink/5 lg:hidden"
            aria-expanded={open}
            aria-controls="home-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <nav
        id="home-mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-ops-line/50 lg:hidden"
      >
        <ul className="mx-auto max-w-6xl px-5 py-3">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-md py-3 text-base font-medium text-ops-ink"
              >
                <span aria-hidden="true" className="size-2 rounded-full bg-ops-node" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
