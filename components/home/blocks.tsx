import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { inter, jakarta } from "./fonts";
import { HomeHeader } from "./HomeHeader";
import { HomeFooter } from "./HomeFooter";
import { CtaCircuit, NodeDot, SproutMark, type NodeKind } from "./motifs";
import { BOOKING_URL, btnLime, btnPrimary, textLink } from "./shared";

/* =====================================================================
   Building blocks shared by the home page and the Services pages,
   so every page looks and reads the same.
   ===================================================================== */

export const container = "mx-auto max-w-6xl px-5 md:px-6";
export const h1Class =
  "font-ops-heading text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] text-ops-ink text-balance sm:text-[40px] md:text-[52px] lg:text-[56px]";
export const h2Class =
  "font-ops-heading text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] text-ops-ink text-balance md:text-[42px]";
export const h3Class =
  "font-ops-heading text-[20px] font-bold leading-snug tracking-[-0.02em] text-ops-ink md:text-[22px]";
export const cardSurface =
  "rounded-2xl bg-ops-card shadow-[0_1px_2px_rgba(11,43,35,0.04),0_12px_32px_-18px_rgba(11,43,35,0.18)]";
export const cardClass = `${cardSurface} border border-ops-line/60`;
export const smallBody = "text-[16px] leading-[1.65] text-ops-text md:text-[17px]";
export const sectionClass = "scroll-mt-20 border-t border-ops-line/60 py-16 md:py-24";

/** Page wrapper: theme, fonts, grain, header and footer. */
export function OpsPage({ children, after }: { children: ReactNode; after?: ReactNode }) {
  return (
    <div
      className={`theme-ops ${jakarta.variable} ${inter.variable} relative min-h-screen font-ops-body text-[17px] leading-[1.6] antialiased selection:bg-ops-lime selection:text-ops-ink md:text-[18px]`}
    >
      <div aria-hidden="true" className="ops-grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05]" />
      <HomeHeader />
      <main>{children}</main>
      {after}
      <HomeFooter />
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`text-[13px] font-semibold uppercase leading-none tracking-[0.12em] text-ops-moss ${className}`}
    >
      {children}
    </p>
  );
}

export const NewTab = () => <span className="sr-only"> (opens in a new tab)</span>;

export function BookButton({
  className = "",
  variant = "primary",
  label = "Book a 20-minute call",
}: {
  className?: string;
  variant?: "primary" | "lime";
  label?: string;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === "lime" ? btnLime : btnPrimary} ${className}`}
    >
      {label}
      <NewTab />
    </a>
  );
}

/** Node list joined by one thin circuit line. Vertical on mobile, horizontal from lg up. */
export type TimelineItem = { label: string; title: ReactNode; body?: ReactNode; node: NodeKind };

export function Timeline({ items, colsClass }: { items: TimelineItem[]; colsClass: string }) {
  return (
    <ol className={`grid gap-10 lg:gap-x-8 ${colsClass}`}>
      {items.map((item, i) => (
        <li key={item.label} className="relative pl-10 lg:pl-0 lg:pt-12">
          {i < items.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute -bottom-10 left-[5.25px] top-3 w-[1.5px] bg-ops-line lg:-right-8 lg:bottom-auto lg:left-3 lg:top-[5.25px] lg:h-[1.5px] lg:w-auto"
            />
          )}
          <NodeDot
            kind={item.node}
            className={`absolute left-0 top-0.5 lg:top-0 ${item.node === "lime" ? "ops-pulse" : ""}`}
          />
          <Eyebrow>{item.label}</Eyebrow>
          <h3 className="mt-3 font-ops-heading text-[20px] font-bold leading-snug tracking-[-0.02em] text-ops-ink">
            {item.title}
          </h3>
          {item.body && <p className={`mt-3 ${smallBody}`}>{item.body}</p>}
        </li>
      ))}
    </ol>
  );
}

export function BulletList({ items, node = "sage" }: { items: ReactNode[]; node?: NodeKind }) {
  return (
    <ul className="grid gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <NodeDot kind={node} className="mt-[7px] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Lines with a node on the top border, used for problem lists. */
export function NodeLines({ items }: { items: ReactNode[] }) {
  return (
    <ul className="grid gap-x-12 gap-y-9 md:grid-cols-2">
      {items.map((item, i) => (
        <li key={i} className="relative border-t border-ops-line/80 pt-6">
          <NodeDot kind={i % 2 === 0 ? "ring" : "sage"} className="absolute -top-[6.5px] left-0" />
          <p className="font-medium text-ops-ink">{item}</p>
        </li>
      ))}
    </ul>
  );
}

/* Recolors black logo files to ops-ink (#0B2B23). */
export const logoTint =
  "[filter:brightness(0)_saturate(100%)_invert(12%)_sepia(80%)_saturate(300%)_hue-rotate(115deg)]";

export function PullQuote({
  quote,
  name,
  detail,
  logo,
}: {
  quote: string;
  name: string;
  detail: string;
  logo?: { src: string; alt: string; width: number; height: number };
}) {
  return (
    <figure className={`${cardClass} relative overflow-hidden px-7 py-10 md:px-14 md:py-14`}>
      <SproutMark className="absolute right-6 top-6 size-8 md:right-8 md:top-8 md:size-10" />
      <span
        aria-hidden="true"
        className="block font-ops-heading text-[64px] font-extrabold leading-[0.6] text-ops-line"
      >
        &ldquo;
      </span>
      <blockquote className="mt-4 font-ops-heading text-[22px] font-semibold leading-[1.4] tracking-[-0.01em] text-ops-ink md:text-[28px]">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mt-8 flex flex-col gap-4 border-t border-ops-line/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[16px] text-ops-text">
          <span className="font-semibold text-ops-ink">{name}</span>, {detail}
        </span>
        {logo && (
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={`h-8 w-auto self-start sm:self-auto ${logoTint}`}
          />
        )}
      </figcaption>
    </figure>
  );
}

/* ---------- Brand logos ---------- */

export type Brand = {
  name: string;
  /** Leave out when the brand has no public site; the logo then shows without a link. */
  href?: string;
  /** Single-color transparent PNG in /public/logos/brands/. Leave out to show the name as text. */
  logo?: { src: string; width: number; height: number };
  /** Tailwind height class, so wide and tall marks look the same size. */
  size?: string;
  /** Show the name next to the logo, for icon-only marks. */
  withName?: boolean;
};

export const BRANDS: Record<string, Brand> = {
  closir: {
    name: "Closir",
    href: "https://www.closir.com/",
    logo: { src: "/logos/brands/closir.png", width: 353, height: 112 },
    size: "h-8 md:h-9",
  },
  lexipol: {
    name: "Lexipol Media Group",
    href: "https://www.lexipol.com/",
    logo: { src: "/logos/brands/lexipol.png", width: 1045, height: 280 },
    size: "h-8 md:h-10",
  },
  nomedic: {
    name: "Nomedic",
    href: "https://nomedic.com/",
    logo: { src: "/logos/brands/nomedic.png", width: 439, height: 120 },
    size: "h-7 md:h-8",
  },
  trileader: {
    name: "TriLeader",
    href: "https://trileader.com/",
    logo: { src: "/logos/brands/trileader.png", width: 392, height: 270 },
    size: "h-12 md:h-14",
  },
  simplyJess: {
    name: "Simply Jess Agency",
    href: "https://simplyjessagency.com/",
    logo: { src: "/logos/brands/simply-jess.png", width: 643, height: 194 },
    size: "h-10 md:h-12",
  },
  visualsByJess: {
    name: "Visuals By Jess",
    href: "https://visualsbyjess.com/",
    logo: { src: "/logos/brands/visuals-by-jess.png", width: 245, height: 389 },
    size: "h-14 md:h-16",
  },
  becks: {
    name: "BecksTheSocial",
    href: "https://www.instagram.com/becksthesocial/",
  },
  easternFulfillment: {
    name: "Eastern Fulfillment",
    href: "https://www.easternfulfillment.com/",
    logo: { src: "/logos/brands/eastern-fulfillment.png", width: 214, height: 256 },
    size: "h-9 md:h-10",
    withName: true,
  },
  specops: {
    name: "SpecOps.AI",
    href: "https://specops.ai/",
    logo: { src: "/logos/brands/specops.png", width: 1208, height: 229 },
    size: "h-6 md:h-7",
  },
  successMappers: {
    name: "Success Mappers",
    href: "https://www.successmappers.com/",
    logo: { src: "/logos/brands/success-mappers.png", width: 272, height: 130 },
    size: "h-10 md:h-11",
  },
  backgammonCash: {
    name: "Backgammon Cash",
    href: "https://www.backgammon-cash.com/",
    logo: { src: "/logos/brands/backgammon-cash.png", width: 256, height: 256 },
    size: "h-10 md:h-11",
    withName: true,
  },
  luzMac: {
    name: "Luz Mac Stories",
    logo: { src: "/logos/brands/luz-mac-stories.png", width: 256, height: 256 },
    size: "h-10 md:h-11",
    withName: true,
  },
};

/** One brand: logo, logo plus name, or name only. Links out when the brand has a site. */
function BrandMark({ b, hidden = false }: { b: Brand; hidden?: boolean }) {
  const name = (
    <span className="block whitespace-nowrap font-ops-heading text-[20px] font-semibold tracking-[-0.01em] text-ops-text md:text-[22px]">
      {b.name}
    </span>
  );
  const inner = b.logo ? (
    <span className="flex items-center gap-3">
      <Image
        src={b.logo.src}
        alt={hidden ? "" : `${b.name} logo`}
        width={b.logo.width}
        height={b.logo.height}
        className={`w-auto ${b.size ?? "h-10"}`}
      />
      {b.withName && name}
    </span>
  ) : (
    <span role={hidden ? undefined : "img"} aria-label={hidden ? undefined : `${b.name} logo`}>
      {name}
    </span>
  );
  if (!b.href) return <span className="block">{inner}</span>;
  return (
    <a
      href={b.href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={hidden ? -1 : undefined}
      className="block rounded-md transition-opacity duration-200 hover:opacity-70"
    >
      {inner}
      {!hidden && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

/** Logos scrolling slowly right to left. Pauses on hover; sits still and wraps for reduced motion. */
export function LogoMarquee({ heading, brands }: { heading: string; brands: Brand[] }) {
  return (
    <div className="border-y border-ops-line/60 py-10 text-center md:py-12">
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ops-moss">{heading}</h2>
      <div className="ops-marquee mt-8">
        <ul className="ops-marquee-track flex w-max items-center">
          {brands.map((b) => (
            <li key={b.name} className="shrink-0 px-7 md:px-9">
              <BrandMark b={b} />
            </li>
          ))}
          {brands.map((b) => (
            <li key={`${b.name}-dup`} aria-hidden="true" data-dup className="shrink-0 px-7 md:px-9">
              <BrandMark b={b} hidden />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function LogoStrip({
  heading,
  brands,
  caption,
}: {
  heading: string;
  brands: Brand[];
  caption?: ReactNode;
}) {
  return (
    <div className="border-y border-ops-line/60 py-10 text-center md:py-12">
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ops-moss">{heading}</h2>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:gap-x-11">
        {brands.map((b) => (
          <li key={b.name}>
            <BrandMark b={b} />
          </li>
        ))}
      </ul>
      {caption && <p className="mx-auto mt-8 max-w-2xl text-[14px] leading-relaxed text-ops-text/80">{caption}</p>}
    </div>
  );
}

/* ---------- Hero used by the Services pages ---------- */

export function ServiceHero({
  id,
  eyebrow,
  title,
  children,
  actions,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="ops-corner-glow pointer-events-none absolute -left-10 -top-10 h-[360px] w-[360px]"
      />
      <div className={`relative ${container} pb-16 pt-14 md:pb-20 md:pt-20`}>
        <div className="max-w-[800px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 id={id} className={`mt-5 ${h1Class}`}>
            {title}
          </h1>
          <div className="mt-6 max-w-[38rem] text-ops-text">{children}</div>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">{actions ?? <BookButton />}</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ, fit and final CTA ---------- */

export function FaqSection({ faqs, id = "faq" }: { faqs: { q: string; a: ReactNode }[]; id?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={sectionClass}>
      <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
        <div className="lg:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id={`${id}-heading`} className={`mt-4 ${h2Class}`}>
            Common questions
          </h2>
        </div>
        <div className="border-t border-ops-line/70 lg:col-span-8">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-ops-line/70">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-md py-5 font-ops-heading text-[17px] font-semibold leading-snug tracking-[-0.01em] text-ops-ink md:text-[19px] [&::-webkit-details-marker]:hidden">
                {q}
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-ops-line text-ops-moss transition-transform duration-200 group-open:rotate-45"
                >
                  <Plus className="size-4" />
                </span>
              </summary>
              <div className="pb-6 pr-12 text-ops-text">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FitSection({ forText, notForText }: { forText: ReactNode; notForText: ReactNode }) {
  return (
    <section aria-labelledby="fit-heading" className={sectionClass}>
      <div className={container}>
        <Eyebrow>Fit</Eyebrow>
        <h2 id="fit-heading" className={`mt-4 ${h2Class}`}>
          Who it’s for
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
          <div className={`${cardClass} p-7 md:p-9`}>
            <div className="flex items-center gap-3">
              <NodeDot kind="lime" />
              <h3 className={h3Class}>For</h3>
            </div>
            <p className="mt-4 text-ops-text">{forText}</p>
          </div>
          <div className="rounded-2xl border border-dashed border-ops-line p-7 md:p-9">
            <div className="flex items-center gap-3">
              <NodeDot kind="ring" />
              <h3 className={h3Class}>Not for</h3>
            </div>
            <p className="mt-4 text-ops-text">{notForText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta({ title, body }: { title: ReactNode; body: ReactNode }) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="ops-dark relative overflow-hidden bg-gradient-to-br from-ops-forest via-[#1f3d31] to-ops-ink"
    >
      <CtaCircuit className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative mx-auto max-w-3xl px-5 py-20 text-center md:px-6 md:py-28">
        <h2
          id="cta-heading"
          className="font-ops-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ops-cream text-balance md:text-[52px]"
        >
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ops-cream/85">{body}</p>
        <BookButton variant="lime" className="mt-10" />
      </div>
    </section>
  );
}

/** "Learn more" style link used on service cards. */
export function MoreLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={textLink}>
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}
