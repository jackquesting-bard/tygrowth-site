import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Wordmark } from "./motifs";
import { BOOKING_URL, EMAIL, LINKEDIN_SYSTEMS_URL, LINKEDIN_URL } from "./shared";

const linkClass =
  "inline-flex items-center gap-1 rounded-sm text-ops-text transition-colors hover:text-ops-moss hover:underline underline-offset-4";

export function HomeFooter() {
  return (
    <footer className="border-t border-ops-line/70 bg-ops-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 text-sm md:grid-cols-[1.4fr_1fr] md:px-6 md:py-14">
        <div>
          <Link href="/" className="inline-block rounded-md" aria-label="TYGrowth.com home">
            <Wordmark />
          </Link>
          <p className="mt-4 max-w-xs leading-relaxed text-ops-text/85">
            Ops, automation, and AI for social media agencies.
          </p>
          <p className="mt-2 text-ops-text/70">Celebration, FL</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid gap-3 md:justify-items-start">
            <li>
              <a href="#community" className={linkClass}>
                Free agency owner group
              </a>
            </li>
            <li>
              <Link href={LINKEDIN_SYSTEMS_URL} className={linkClass}>
                For founders: LinkedIn Content Systems
              </Link>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                LinkedIn
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className={linkClass}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Book a call
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-ops-line/50">
        <p className="mx-auto max-w-6xl px-5 py-6 text-[13px] text-ops-text/70 md:px-6">© TY Growth.</p>
      </div>
    </footer>
  );
}
