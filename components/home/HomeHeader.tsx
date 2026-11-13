"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Wordmark } from "./motifs";
import { BOOKING_URL, SERVICES, btnPrimaryBase } from "./shared";

// "/#…" so the links still work from other pages (e.g. /agent-ready).
const NAV = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
];

const navLink = "rounded-sm text-[15px] font-medium text-ops-text transition-colors hover:text-ops-moss";

export function HomeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open && !servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, servicesOpen]);

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
              <li ref={servicesRef} className="relative">
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`${navLink} inline-flex items-center gap-1`}
                >
                  Services
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id="services-menu"
                  hidden={!servicesOpen}
                  className="absolute left-1/2 top-full mt-4 w-[340px] -translate-x-1/2 rounded-2xl border border-ops-line/70 bg-ops-card p-2 shadow-[0_1px_2px_rgba(11,43,35,0.06),0_18px_40px_-16px_rgba(11,43,35,0.3)]"
                >
                  <ul>
                    {SERVICES.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-ops-cream"
                        >
                          <span className="block font-ops-heading text-[15.5px] font-bold text-ops-ink">
                            {s.label}
                          </span>
                          <span className="mt-0.5 block text-[13.5px] leading-snug text-ops-text/80">{s.blurb}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={navLink}>
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
        <div className="mx-auto max-w-6xl px-5 py-3">
          <p className="pt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ops-moss">Services</p>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md py-3 text-base font-medium text-ops-ink"
                >
                  <span aria-hidden="true" className="size-2 rounded-full bg-ops-node" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-1 border-t border-ops-line/50 pt-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md py-3 text-base font-medium text-ops-ink"
                >
                  <span aria-hidden="true" className="size-2 rounded-full border border-ops-ink" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
