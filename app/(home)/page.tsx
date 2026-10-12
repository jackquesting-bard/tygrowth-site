import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ArrowDown, ArrowRight, Plus } from "lucide-react";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import {
  CommunityCircuit,
  CtaCircuit,
  HeroCircuit,
  HeroCircuitMobile,
  IconAgents,
  IconAutomation,
  IconOpsSystems,
  NodeDot,
  SproutMark,
  SproutNode,
  type NodeKind,
} from "@/components/home/motifs";
import {
  BOOKING_URL,
  LINKEDIN_SYSTEMS_URL,
  btnLime,
  btnPrimary,
  textLink,
} from "@/components/home/shared";

/* =====================================================================
   OFFER DETAILS
   Edit these in one place. Any value written in [BRACKETS] is treated as
   a placeholder and shows on the page with a lime highlight.
   ===================================================================== */
const PRICE_INSTALL = "$25,000";
const PRICE_PILOT = "$10,000";
const INSTALL_SLOTS = "4";
const DAY_30_SYSTEMS = "Your CRM cleaned up, client onboarding, lead follow-up, and weekly reporting";
const HOURS_BACK = "10";
const DAY_180_TARGET = "15 hours a week back, and your team runs it without you";
const CASE_RESULT = "2,446 contacts opted in to email and ready for her next campaign.";
const COMMUNITY_URL = "https://tally.so/r/XxVB6O";

/* Pull quote under the Simply Jess case card. The block hides itself if this is empty. */
const JESS_QUOTE =
  "My problem was always not getting the content. My problem was executing the content and going into social media. So by us doing this and getting into a systematic flow… I mean, game changer.";
const SHOW_TESTIMONIAL = JESS_QUOTE.trim() !== "";

/* Logos: true shows the image from /public/logos/. false shows the name as styled text instead. */
const HAS_SIMPLY_JESS_LOGO = true; // /logos/logo-simply-jess-agency.png
const HAS_BECKS_LOGO = false; // /logos/logo-becksthesocial.png (not uploaded yet)

/* Where each Trusted by logo links to. */
const CLIENT_LINKS = {
  simplyJess: "https://simplyjessagency.com/",
  visualsByJess: "https://visualsbyjess.com/",
  becks: "https://www.instagram.com/becksthesocial/",
};

/* The guarantee promise. Used word for word in the hero, the guarantee section, and the FAQ. */
const GUARANTEE =
  "If we miss the targets we set at kickoff, I keep working at no extra cost until we hit them.";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-ops-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ops-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { absolute: "TY Growth | 6-Month Ops Install for Agency Owners" },
  description:
    "Your agency's back office built and running in 30 days, with a guarantee. GoHighLevel, automation, and AI agents for agency owners.",
  icons: { icon: "/icons/sprout.svg" },
};

/* ---------- Small helpers ---------- */

const container = "mx-auto max-w-6xl px-5 md:px-6";
const h2Class =
  "font-ops-heading text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] text-ops-ink text-balance md:text-[42px]";
const h3Class =
  "font-ops-heading text-[20px] font-bold leading-snug tracking-[-0.02em] text-ops-ink md:text-[22px]";
const cardSurface =
  "rounded-2xl bg-ops-card shadow-[0_1px_2px_rgba(11,43,35,0.04),0_12px_32px_-18px_rgba(11,43,35,0.18)]";
const cardClass = `${cardSurface} border border-ops-line/60`;
const smallBody = "text-[16px] leading-[1.65] text-ops-text md:text-[17px]";

/* Recolors the black logo files to ops-ink (#0B2B23). */
const logoTint =
  "[filter:brightness(0)_saturate(100%)_invert(12%)_sepia(80%)_saturate(300%)_hue-rotate(115deg)]";

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`text-[13px] font-semibold uppercase leading-none tracking-[0.12em] text-ops-moss ${className}`}
    >
      {children}
    </p>
  );
}

/** Renders a fill-in value. Anything still in [BRACKETS] gets a lime highlight. */
function Fill({ value }: { value: string }) {
  if (!value.startsWith("[")) return <>{value}</>;
  return (
    <mark className="rounded-[4px] bg-ops-lime/70 px-1 text-ops-ink box-decoration-clone">{value}</mark>
  );
}

const NewTab = () => <span className="sr-only"> (opens in a new tab)</span>;

function LogoLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-md transition-opacity duration-200 hover:opacity-70"
    >
      {children}
      <span className="sr-only"> ({label}, opens in a new tab)</span>
    </a>
  );
}

function BookButton({ className = "", variant = "primary" }: { className?: string; variant?: "primary" | "lime" }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === "lime" ? btnLime : btnPrimary} ${className}`}
    >
      Book a fit call
      <NewTab />
    </a>
  );
}

/** Node list joined by one thin circuit line. Vertical on mobile, horizontal from lg up. */
type TimelineItem = { label: string; title: ReactNode; body?: ReactNode; node: NodeKind };

function Timeline({ items, colsClass }: { items: TimelineItem[]; colsClass: string }) {
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

function BulletList({ items, node = "sage" }: { items: ReactNode[]; node?: NodeKind }) {
  return (
    <ul className="grid gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <NodeDot kind={node} className="mt-[7px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Pull quote card under the case study. */
function PullQuote({
  quote,
  name,
  detail,
  showLogo = false,
}: {
  quote: string;
  name: string;
  detail: string;
  showLogo?: boolean;
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
        {showLogo && HAS_SIMPLY_JESS_LOGO && (
          <Image
            src="/logos/logo-simply-jess-agency.png"
            alt="Simply Jess Agency logo"
            width={643}
            height={194}
            className={`h-8 w-auto ${logoTint}`}
          />
        )}
      </figcaption>
    </figure>
  );
}

/* ---------- Content ---------- */

const PROBLEMS = [
  "Onboarding lives in your head instead of in a process.",
  "Contacts and customer data are spread across five tools.",
  "Follow-ups and reports go out when you remember them.",
  "Your content calendar runs on group chats and reminders.",
];

const PHASES = [
  {
    label: "Month 1",
    title: "Audit and build",
    body: "We map your week. I set up or fix GoHighLevel: pipelines, onboarding, forms, follow-ups, contact imports, and reporting. Live by day 30.",
    Icon: IconOpsSystems,
  },
  {
    label: "Months 2-3",
    title: "Automate and add AI",
    body: "AI agents take over repetitive work like content calendars, client reports, lead replies, and data cleanup. One new automation every month.",
    Icon: IconAgents,
  },
  {
    label: "Months 4-6",
    title: "Run and hand off",
    body: "A call every two weeks, a monthly report on what’s running and the hours saved, then SOPs and video walkthroughs so your team runs it without me.",
    Icon: IconAutomation,
  },
];

const TARGETS: TimelineItem[] = [
  {
    label: "Day 30",
    title: "Systems live by day 30",
    body: (
      <>
        <Fill value={DAY_30_SYSTEMS} /> built, tested, and running.
      </>
    ),
    node: "ink",
  },
  {
    label: "Day 90",
    title: (
      <>
        <Fill value={HOURS_BACK} /> hours a week off your plate by day 90
      </>
    ),
    body: (
      <>
        At kickoff we log where your week goes. By day 90, <Fill value={HOURS_BACK} /> hours of that work is
        automated, handled by an AI agent, or documented for your team.
      </>
    ),
    node: "ring",
  },
  {
    label: "Day 180",
    title: <Fill value={DAY_180_TARGET} />,
    body: "Every core process is automated, handled by an AI agent, or documented in SOPs your team uses without calling you.",
    node: "lime",
  },
];

const STEPS: TimelineItem[] = [
  {
    label: "Step 01",
    title: "Fit call (20 minutes)",
    body: "We see if your agency is a fit. If it’s not, I’ll tell you.",
    node: "ink",
  },
  {
    label: "Step 02",
    title: "Kickoff and time audit",
    body: "We log where your week goes and write down the targets.",
    node: "ring",
  },
  {
    label: "Step 03",
    title: "Build",
    body: "I build inside the tools you already use. You see progress as it happens.",
    node: "sage",
  },
  {
    label: "Step 04",
    title: "Reviews every two weeks",
    body: "A short call and a monthly report on what’s running and the hours saved.",
    node: "ring",
  },
  {
    label: "Step 05",
    title: "Hand off or keep running",
    body: "I train your team with simple docs, or I stay on and run it for you.",
    node: "lime",
  },
];

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "Is this software or a service?",
    a: "A service. I build and run the systems inside tools you already use or that we pick together.",
  },
  {
    q: "Do I need GoHighLevel already?",
    a: "No. I can set it up, or work with what you have.",
  },
  {
    q: "What do you need from me?",
    a: "Logins and data in the first week, quick approvals, and a 30-minute call every two weeks.",
  },
  {
    q: "What if we miss a target?",
    a: `${GUARANTEE} That applies as long as you’ve kept up your side.`,
  },
  {
    q: "Do you guarantee revenue?",
    a: "No. The guarantee covers the work: systems live, hours back, and the targets we set at kickoff.",
  },
  {
    q: "What happens after 6 months?",
    a: "Your team runs it with the docs and walkthroughs, or I stay on monthly to run it.",
  },
  {
    q: "Can you build this for my clients?",
    a: "Yes, ask on the fit call.",
  },
  {
    q: "You’re early. Why trust you?",
    a: (
      <>
        I am early, and that’s why the guarantee exists and why I only take <Fill value={INSTALL_SLOTS} /> at a
        time. You work with me directly.
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <div
      className={`theme-ops ${jakarta.variable} ${inter.variable} relative min-h-screen font-ops-body text-[17px] leading-[1.6] antialiased selection:bg-ops-lime selection:text-ops-ink md:text-[18px]`}
    >
      <div aria-hidden="true" className="ops-grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05]" />

      <HomeHeader />

      <main>
        {/* HERO */}
        <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="ops-hero-gradient pointer-events-none absolute inset-y-0 left-0 hidden w-[35%] lg:block"
          />
          <div
            aria-hidden="true"
            className="ops-corner-glow pointer-events-none absolute -left-10 -top-10 h-[360px] w-[360px] lg:hidden"
          />
          <HeroCircuit className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" />

          <div className="relative mx-auto max-w-6xl px-5 pb-6 pt-14 md:px-6 md:pt-20 lg:pb-40 lg:pt-24">
            <div className="lg:ml-[34%] lg:max-w-[740px]">
              <div className="flex items-end gap-3">
                <SproutNode className="-mb-[7px] -ml-5 h-11 w-[38px] shrink-0 lg:hidden" />
                <Eyebrow>6-Month Ops Install for Agency Owners</Eyebrow>
              </div>

              <div className="relative mt-5 lg:mt-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-full top-0 mr-3 hidden items-end lg:flex"
                >
                  <span className="mb-[8px] h-[1.5px] w-[50vw] bg-gradient-to-r from-transparent via-ops-line/60 to-ops-line" />
                  <SproutNode className="h-14 w-12 shrink-0" />
                </div>
                <h1
                  id="hero-heading"
                  className="font-ops-heading text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] text-ops-ink text-balance sm:text-[40px] md:text-[52px] lg:text-[56px]"
                >
                  Your agency’s back office, built and running in 30 days.{" "}
                  <span className="text-ops-moss">Guaranteed.</span>
                </h1>
              </div>

              <p className="mt-6 max-w-[36rem] text-ops-text">
                I set up your onboarding, follow-up, reporting, and content systems in GoHighLevel and AI, then run
                them with you for 6 months. {GUARANTEE}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <BookButton />
                <a href="#guarantee" className={textLink}>
                  See the guarantee
                  <ArrowDown className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <HeroCircuitMobile className="relative block h-[110px] w-full lg:hidden" />
        </section>

        {/* PROOF STRIP */}
        <section id="clients" aria-labelledby="clients-heading" className="scroll-mt-20">
          <div className={container}>
            <div className="border-y border-ops-line/60 py-10 text-center md:py-12">
              <h2
                id="clients-heading"
                className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ops-moss"
              >
                Trusted by
              </h2>
              <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-7 md:gap-x-20">
                <li>
                  <LogoLink href={CLIENT_LINKS.simplyJess} label="website">
                    {HAS_SIMPLY_JESS_LOGO ? (
                      <Image
                        src="/logos/logo-simply-jess-agency.png"
                        alt="Simply Jess Agency logo"
                        width={643}
                        height={194}
                        className={`h-10 w-auto md:h-12 ${logoTint}`}
                      />
                    ) : (
                      <span
                        role="img"
                        aria-label="Simply Jess Agency logo"
                        className="block font-ops-heading text-[22px] font-semibold tracking-[-0.01em] text-ops-text md:text-[26px]"
                      >
                        Simply Jess Agency
                      </span>
                    )}
                  </LogoLink>
                </li>
                <li>
                  <LogoLink href={CLIENT_LINKS.visualsByJess} label="website">
                    <Image
                      src="/logos/logo-visuals-by-jess.png"
                      alt="Visuals By Jess logo"
                      width={245}
                      height={388}
                      className={`h-14 w-auto ${logoTint}`}
                    />
                  </LogoLink>
                </li>
                <li>
                  <LogoLink href={CLIENT_LINKS.becks} label="Instagram">
                    {HAS_BECKS_LOGO ? (
                      <Image
                        src="/logos/logo-becksthesocial.png"
                        alt="BecksTheSocial logo"
                        width={400}
                        height={120}
                        className={`h-10 w-auto md:h-12 ${logoTint}`}
                      />
                    ) : (
                      <span
                        role="img"
                        aria-label="BecksTheSocial logo"
                        className="block font-ops-heading text-[22px] font-semibold tracking-[-0.01em] text-ops-text md:text-[26px]"
                      >
                        BecksTheSocial
                      </span>
                    )}
                  </LogoLink>
                </li>
              </ul>
              <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-relaxed text-ops-text/80">
                I run ops and systems for Simply Jess Agency and manage social media for BecksTheSocial.
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section aria-labelledby="problem-heading" className="py-16 md:py-24">
          <div className={container}>
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <Eyebrow>The problem</Eyebrow>
                <h2 id="problem-heading" className={`mt-4 ${h2Class}`}>
                  You started an agency to do the work. Now you run the back office.
                </h2>
              </div>
              <p className="text-ops-text lg:col-span-6 lg:pt-9">
                Every new client adds another login, another spreadsheet, and another follow-up you have to
                remember. Your CRM, inbox, project board, and calendar each hold part of the picture, and you end up
                being the glue between them. That glue work eats the hours you meant to spend on clients and growth.
              </p>
            </div>

            <ul className="mt-14 grid gap-x-12 gap-y-9 md:grid-cols-2">
              {PROBLEMS.map((item, i) => (
                <li key={item} className="relative border-t border-ops-line/80 pt-6">
                  <NodeDot kind={i % 2 === 0 ? "ring" : "sage"} className="absolute -top-[6.5px] left-0" />
                  <p className="font-medium text-ops-ink">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* THE OFFER */}
        <section id="offer" aria-labelledby="offer-heading" className="scroll-mt-20 border-t border-ops-line/60 py-16 md:py-24">
          <div className={container}>
            <div className="max-w-3xl">
              <Eyebrow>The offer</Eyebrow>
              <h2 id="offer-heading" className={`mt-4 ${h2Class}`}>
                The 6-Month Agency Ops Install
              </h2>
              <p className="mt-3 font-ops-heading text-[20px] font-semibold leading-snug tracking-[-0.01em] text-ops-moss md:text-[24px]">
                Systems that run without you in the middle.
              </p>
              <p className="mt-5 max-w-2xl text-ops-text">
                One engagement. I build the systems, run them with you, then hand them off.
              </p>
            </div>

            <ol className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
              {PHASES.map(({ label, title, body, Icon }) => (
                <li key={label} className={`${cardClass} flex flex-col p-7 md:p-8`}>
                  <Icon className="h-10 w-[88px]" />
                  <Eyebrow className="mt-7">{label}</Eyebrow>
                  <h3 className={`mt-3 ${h3Class}`}>{title}</h3>
                  <p className={`mt-3 ${smallBody}`}>{body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-[14px] text-ops-text/80">
              Not included: software subscriptions, SMS and email usage fees, ad spend.
            </p>
          </div>
        </section>

        {/* GUARANTEE */}
        <section
          id="guarantee"
          aria-labelledby="guarantee-heading"
          className="scroll-mt-20 border-y border-ops-line/60 bg-ops-card py-16 md:py-24"
        >
          <div className={container}>
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <Eyebrow>The guarantee</Eyebrow>
                <h2 id="guarantee-heading" className={`mt-4 ${h2Class}`}>
                  Six months. Clear targets. If we miss them, I keep going for free.
                </h2>
              </div>
              <p className="font-medium text-ops-ink lg:col-span-5 lg:pt-9">You do your part. {GUARANTEE}</p>
            </div>

            <div className="mt-14 md:mt-16">
              <Timeline items={TARGETS} colsClass="lg:grid-cols-3" />
            </div>

            <div className="mt-14 grid overflow-hidden rounded-2xl border border-ops-line/70 bg-ops-cream md:grid-cols-2">
              <div className="p-7 md:p-9">
                <h3 className={h3Class}>Your part</h3>
                <div className={`mt-5 ${smallBody}`}>
                  <BulletList
                    node="ring"
                    items={[
                      "Data and logins within 5 business days",
                      "Approvals within 2 business days",
                      "A 30-minute call every two weeks",
                      "Using the systems instead of working around them",
                    ]}
                  />
                </div>
              </div>
              <div className="border-t border-ops-line/70 p-7 md:border-l md:border-t-0 md:p-9">
                <h3 className={h3Class}>My part</h3>
                <div className={`mt-5 ${smallBody}`}>
                  <BulletList
                    node="ink"
                    items={[
                      "Build to the targets we wrote down at kickoff",
                      "Report progress every month",
                      "Keep working at no extra cost if we miss a target while you’ve kept up your side",
                    ]}
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-[14px] leading-relaxed text-ops-text/80">
              This guarantee covers the work, not your revenue. Targets are set in writing at kickoff, and the signed
              agreement controls.
            </p>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" aria-labelledby="results-heading" className="scroll-mt-20 py-16 md:py-24">
          <div className={container}>
            <Eyebrow>Results</Eyebrow>
            <h2 id="results-heading" className={`mt-4 ${h2Class}`}>
              What I’ve built so far
            </h2>

            <article className={`${cardClass} mt-12 overflow-hidden`}>
              <div className="grid lg:grid-cols-[1fr_340px]">
                <div className="p-7 md:p-10">
                  <h3 className="font-ops-heading text-[24px] font-extrabold tracking-[-0.02em] text-ops-ink md:text-[28px]">
                    Simply Jess Agency
                  </h3>
                  <p className="mt-1 text-ops-text/80">An events and creative agency</p>
                  <div className={`mt-7 ${smallBody}`}>
                    <BulletList
                      items={[
                        "GoHighLevel setup and contact consolidation",
                        "A content calendar and posting workflow",
                        "Caption and content automation",
                      ]}
                    />
                  </div>
                </div>
                <div className="ops-dark relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-ops-forest to-ops-ink px-7 pb-8 pt-16 md:px-10 md:pb-10">
                  <CommunityCircuit glowId="ops-case-glow" className="absolute left-0 top-6 h-7 w-[220px] opacity-60" />
                  <p className="font-ops-heading text-[52px] font-extrabold leading-none tracking-[-0.02em] text-ops-cream md:text-[60px]">
                    3,000+
                  </p>
                  <p className="mt-3 text-ops-cream/85">contacts brought into one CRM</p>
                </div>
              </div>
              <p className="border-t border-ops-line/60 px-7 py-5 text-ops-text md:px-10">
                <span className="font-semibold text-ops-ink">Results:</span> <Fill value={CASE_RESULT} />
              </p>
            </article>

            {SHOW_TESTIMONIAL && (
              <div className="mt-8">
                <PullQuote quote={JESS_QUOTE} name="Jess Marquez" detail="Simply Jess Agency" showLogo />
              </div>
            )}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          aria-labelledby="how-heading"
          className="scroll-mt-20 border-t border-ops-line/60 py-16 md:py-24"
        >
          <div className={container}>
            <div className="max-w-2xl">
              <Eyebrow>How it works</Eyebrow>
              <h2 id="how-heading" className={`mt-4 ${h2Class}`}>
                Five steps. You stay in control the whole time.
              </h2>
            </div>
            <div className="mt-14 md:mt-16">
              <Timeline items={STEPS} colsClass="lg:grid-cols-5" />
            </div>
          </div>
        </section>

        {/* PRICE AND PILOT */}
        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="scroll-mt-20 border-t border-ops-line/60 py-16 md:py-24"
        >
          <div className={container}>
            <Eyebrow>Pricing</Eyebrow>
            <h2 id="pricing-heading" className={`mt-4 ${h2Class}`}>
              Price and pilot
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
              <article className={`${cardSurface} relative border border-ops-ink/30 p-7 md:p-9`}>
                <SproutMark className="absolute right-6 top-6 size-7" />
                <h3 className={h3Class}>6-Month Install</h3>
                <p className="mt-5 font-ops-heading text-[40px] font-extrabold leading-none tracking-[-0.02em] text-ops-ink md:text-[48px]">
                  <Fill value={PRICE_INSTALL} />
                </p>
                <p className={`mt-5 ${smallBody}`}>Everything in the offer, plus the guarantee.</p>
              </article>
              <article className={`${cardClass} p-7 md:p-9`}>
                <h3 className={h3Class}>2-Month Pilot</h3>
                <p className="mt-5 font-ops-heading text-[40px] font-extrabold leading-none tracking-[-0.02em] text-ops-ink md:text-[48px]">
                  <Fill value={PRICE_PILOT} />
                </p>
                <p className={`mt-5 ${smallBody}`}>
                  $5,000 to start, $5,000 at day 30. Credited in full toward the 6-month install if you continue. If
                  you stop, you keep everything built.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section aria-labelledby="fit-heading" className="border-t border-ops-line/60 pb-10 pt-16 md:pb-12 md:pt-24">
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
                <p className="mt-4 text-ops-text">
                  Agency owners with steady clients who are the glue between their CRM, inbox, project board, and
                  calendar, and who will spend 30 minutes every two weeks on the build.
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-ops-line p-7 md:p-9">
                <div className="flex items-center gap-3">
                  <NodeDot kind="ring" />
                  <h3 className={h3Class}>Not for</h3>
                </div>
                <p className="mt-4 text-ops-text">
                  Anyone looking for ad management or lead generation alone, anyone who won’t share logins and data,
                  and anyone who wants a guaranteed revenue number.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SCARCITY + CTA */}
        <section aria-labelledby="slots-heading" className="pb-16 md:pb-24">
          <div className={container}>
            <div
              className={`${cardClass} flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-9`}
            >
              <div className="flex gap-4">
                <NodeDot kind="lime" className="ops-pulse mt-2.5 hidden sm:block" />
                <div>
                  <h2
                    id="slots-heading"
                    className="font-ops-heading text-[24px] font-extrabold leading-tight tracking-[-0.02em] text-ops-ink md:text-[28px]"
                  >
                    I take <Fill value={INSTALL_SLOTS} /> installs at a time.
                  </h2>
                  <p className="mt-2 text-ops-text">If a spot is open, the next step is a 20-minute fit call.</p>
                </div>
              </div>
              <BookButton className="shrink-0 self-start md:self-auto" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 border-t border-ops-line/60 py-16 md:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
            <div className="lg:col-span-4">
              <Eyebrow>FAQ</Eyebrow>
              <h2 id="faq-heading" className={`mt-4 ${h2Class}`}>
                Common questions
              </h2>
            </div>
            <div className="border-t border-ops-line/70 lg:col-span-8">
              {FAQS.map(({ q, a }) => (
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
                  <p className="pb-6 pr-12 text-ops-text">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          aria-labelledby="cta-heading"
          className="ops-dark relative overflow-hidden bg-gradient-to-br from-ops-forest via-[#1f3d31] to-ops-ink"
        >
          <CtaCircuit className="pointer-events-none absolute inset-0 h-full w-full" />
          <div className="relative mx-auto max-w-3xl px-5 py-20 text-center md:px-6 md:py-28">
            <h2
              id="cta-heading"
              className="font-ops-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-ops-cream md:text-[52px]"
            >
              See if your agency’s a fit.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ops-cream/85">
              Book a 20-minute call. We’ll walk through your week, and you’ll leave knowing the first thing I can
              take off your plate. If it’s not a fit, I’ll tell you.
            </p>
            <BookButton variant="lime" className="mt-10" />
          </div>
        </section>

        {/* FREE AGENCY-OWNER GROUP */}
        <section id="community" aria-labelledby="community-heading" className="scroll-mt-20 py-16 md:py-20">
          <div className={container}>
            <div className={`${cardClass} mx-auto max-w-3xl px-6 pb-12 pt-8 text-center md:px-12 md:pb-14 md:pt-10`}>
              <CommunityCircuit className="mx-auto h-7 w-[220px]" />
              <Eyebrow className="mt-6">Free community</Eyebrow>
              <h2
                id="community-heading"
                className="mx-auto mt-4 max-w-xl font-ops-heading text-[26px] font-extrabold leading-[1.18] tracking-[-0.02em] text-ops-ink text-balance md:text-[34px]"
              >
                Want to join a free group with other Marketing Agency Owners?
              </h2>
              <p className="mt-4 text-ops-text">Sign up here to request a seat. Limited spots available.</p>
              <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className={`mt-8 ${btnPrimary}`}>
                Request a seat
                <NewTab />
              </a>
            </div>
            <p className="mt-6 text-center text-[15px] text-ops-text">
              Founder, not an agency owner?{" "}
              <Link href={LINKEDIN_SYSTEMS_URL} className={textLink}>
                See LinkedIn Content Systems
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
