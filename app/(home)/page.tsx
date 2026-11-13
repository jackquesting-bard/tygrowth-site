import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import AgentTools from "@/components/agent/AgentTools";
import AgentJsonLd from "@/components/agent/AgentJsonLd";
import AgentSection from "@/components/agent/AgentSection";
import {
  BRANDS,
  BookButton,
  Eyebrow,
  FaqSection,
  FinalCta,
  FitSection,
  LogoStrip,
  MoreLink,
  NodeLines,
  OpsPage,
  PullQuote,
  Timeline,
  cardClass,
  container,
  h1Class,
  h2Class,
  h3Class,
  sectionClass,
  smallBody,
  type TimelineItem,
} from "@/components/home/blocks";
import {
  HeroCircuit,
  HeroCircuitMobile,
  IconAgents,
  IconAutomation,
  IconOpsSystems,
  NodeDot,
  SproutMark,
  SproutNode,
} from "@/components/home/motifs";
import { SERVICES, textLink } from "@/components/home/shared";

/* =====================================================================
   HOME: Marketing partner for B2B firms without a marketing person.
   Built from what clients like a NetSuite partner firm and a fractional
   CFO firm said they needed. Service details live under /services.
   ===================================================================== */

const JESS_QUOTE =
  "My problem was always not getting the content. My problem was executing the content and going into social media. So by us doing this and getting into a systematic flow… I mean, game changer.";

export const metadata: Metadata = {
  title: { absolute: "TY Growth | Marketing Partner for B2B Firms Without a Marketing Person" },
  description:
    "A marketing partner for founder-led B2B firms that grow on referrals. I find your best-fit clients, keep you in front of them, and build the sales materials that close. About an hour a week of your time.",
  icons: { icon: "/icons/sprout.svg" },
};

const PROBLEMS = [
  "New work mostly comes from referrals, so growth stalls when those slow down.",
  "Your LinkedIn has gone quiet, and it’s usually the first place a referral checks you out.",
  "The company deck and service one-pagers don’t match how you sell today.",
  "You’ve tried a freelancer or agency, and the content could’ve been about any firm in your space.",
];

const ROLE = [
  {
    title: "Find your best-fit clients",
    body: "Who actually buys from you, why they buy, and what they ask before signing. Pulled from your past wins, sales calls and client stories, so everything else aims at the right people.",
    node: "ink" as const,
  },
  {
    title: "Stay in front of them",
    body: "LinkedIn for you and your company page, a monthly email to clients and referral partners, and blog posts when they help. Built from your stories and opinions, so you’re the first call when they’re ready.",
    node: "ring" as const,
  },
  {
    title: "Sales materials that close",
    body: "Company deck, service one-pagers and sales letters, plus partner versions that follow a partner’s brand rules. Leads who’ve seen your site want something to forward.",
    node: "sage" as const,
  },
  {
    title: "Referral relationships",
    body: "Past clients and referral partners stay warm, and partners get something easy to pass along. We track who sends what, so you know where the work comes from.",
    node: "lime" as const,
  },
];

const SERVICE_ICONS = [IconOpsSystems, IconOpsSystems, IconAutomation, IconAgents];

const STEPS: TimelineItem[] = [
  {
    label: "Weeks 1 to 2",
    title: "Setup",
    body: "An interview, a voice guide, a look at what you already have, and starting numbers for LinkedIn, your website and email.",
    node: "ink",
  },
  {
    label: "Every week or two",
    title: "Check-in",
    body: "I bring at least five ideas from your industry’s news. You bring what happened that week.",
    node: "ring",
  },
  {
    label: "In between",
    title: "I build and ship",
    body: "You approve, and posts still go out when you’re traveling or with clients.",
    node: "sage",
  },
  {
    label: "Every month",
    title: "Review",
    body: "What moved, where the time went, and what we focus on next.",
    node: "lime",
  },
];

const STANDARDS = [
  "If it could’ve been written about your competitor, it doesn’t go out. Everything starts from your stories, opinions and client work.",
  "I’ll tell you when I haven’t done something before. If I say I’ll look into it, I will.",
  "I’ll have opinions, and I’ll show you the data behind them.",
  "You get starting numbers in the first two weeks, so every monthly review compares against something real.",
  "Three months to start. After that it’s month to month, and only if we both want to keep going.",
];

const FAQS = [
  {
    q: "How is this different from hiring a marketing coordinator?",
    a: "A coordinator needs a plan and someone to check their work. I bring the plan, do the work, and tell you what I’d change. You spend about an hour a week with me, mostly on the parts only you can do.",
  },
  {
    q: "How is it priced?",
    a: "A flat monthly rate, scoped on the call by what’s on your plate. Most engagements start around $3,000 a month, beginning with a three-month engagement that includes the two-week setup.",
  },
  {
    q: "Do you use AI?",
    a: "Yes, for research and first drafts. Nothing goes out that isn’t built on your input, and you approve everything before it ships.",
  },
  {
    q: "Do you guarantee leads?",
    a: "No. I’m responsible for the work getting done, done well, and on time. We track which posts, emails and materials turn into conversations, and adjust from there.",
  },
  {
    q: "What do you need from me?",
    a: "About an hour a week, access to your LinkedIn and existing materials, and honest feedback on drafts.",
  },
  {
    q: "We run an agency. Is this for us?",
    a: (
      <>
        Yes, agencies sell to other businesses too. There’s a version built for agency owners that also covers your
        back office and client builds.{" "}
        <MoreLink href="/services/agency-ops">See Agency Ops</MoreLink>
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <OpsPage
      after={
        <>
          {/* Agent layer: structured data, WebMCP tools for browser agents, and a visible section for HTML-reading agents. */}
          <AgentJsonLd />
          <AgentTools />
          <AgentSection />
        </>
      }
    >
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
              <Eyebrow>Marketing partner for B2B firms</Eyebrow>
            </div>

            <div className="relative mt-5 lg:mt-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-full top-0 mr-3 hidden items-end lg:flex"
              >
                <span className="mb-[8px] h-[1.5px] w-[50vw] bg-gradient-to-r from-transparent via-ops-line/60 to-ops-line" />
                <SproutNode className="h-14 w-12 shrink-0" />
              </div>
              <h1 id="hero-heading" className={h1Class}>
                The marketing person your firm doesn’t have <span className="text-ops-moss">yet.</span>
              </h1>
            </div>

            <p className="mt-6 max-w-[36rem] text-ops-text">
              For founder-led firms that grow on referrals and have nobody focused on marketing. I work out who you sell
              to best, keep you in front of them every week, and build the decks and one-pagers your leads and partners
              actually read. You spend about an hour a week with me, and there’s nobody new to manage.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <BookButton />
              <a href="#how-it-works" className={textLink}>
                See how it works
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <HeroCircuitMobile className="relative block h-[110px] w-full lg:hidden" />
      </section>

      {/* BRANDS */}
      <section id="clients" aria-label="Brands I’ve worked with" className="scroll-mt-20">
        <div className={container}>
          <LogoStrip
            heading="Brands I’ve worked with"
            brands={[
              BRANDS.closir,
              BRANDS.lexipol,
              BRANDS.trileader,
              BRANDS.nomedic,
              BRANDS.simplyJess,
              BRANDS.visualsByJess,
              BRANDS.becks,
            ]}
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section aria-labelledby="problem-heading" className="py-16 md:py-24">
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Eyebrow>The problem</Eyebrow>
              <h2 id="problem-heading" className={`mt-4 ${h2Class}`}>
                Referrals built the firm. They don’t tell anyone else you exist.
              </h2>
            </div>
            <p className="text-ops-text lg:col-span-6 lg:pt-9">
              Most firms like yours win work through relationships, and that works until the referrals slow down. By the
              time a new lead reaches out, they’ve usually checked your LinkedIn, your website, and whatever deck got
              forwarded to them. According to 6sense, B2B buyers are nearly 70% of the way through their decision before
              they talk to anyone.
            </p>
          </div>
          <div className="mt-14">
            <NodeLines items={PROBLEMS} />
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="what-i-do" aria-labelledby="what-heading" className={sectionClass}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>What I do</Eyebrow>
            <h2 id="what-heading" className={`mt-4 ${h2Class}`}>
              Someone who thinks alongside you, so you’re not managing one more person.
            </h2>
            <p className="mt-5 max-w-2xl text-ops-text">
              Hiring a marketing coordinator usually means writing the plan and checking the work yourself. I bring the
              plan, do the work, and tell you honestly what’s working. That buys your time back for the clients.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            {ROLE.map((r) => (
              <article key={r.title} className={`${cardClass} p-7 md:p-9`}>
                <NodeDot kind={r.node} className={r.node === "lime" ? "ops-pulse" : ""} />
                <h3 className={`mt-5 ${h3Class}`}>{r.title}</h3>
                <p className={`mt-3 ${smallBody}`}>{r.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-[15px] text-ops-text/85">
            Also handled when you need it: picking an email platform, CRM setup, tracking, and AI where it actually saves
            time.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" aria-labelledby="services-heading" className={sectionClass}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h2 id="services-heading" className={`mt-4 ${h2Class}`}>
              One partner, a few specialties.
            </h2>
            <p className="mt-5 text-ops-text">
              Most clients start with the marketing partner role. The others are the same partnership, pointed at a
              specific problem.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <article key={s.href} className={`${cardClass} flex flex-col p-7 md:p-9`}>
                  {i === 0 ? <SproutMark className="h-10 w-10" /> : <Icon className="h-10 w-[88px]" />}
                  <h3 className={`mt-6 ${h3Class}`}>{s.label}</h3>
                  <p className={`mt-3 flex-1 ${smallBody}`}>{s.blurb}</p>
                  <div className="mt-6">
                    <MoreLink href={s.href}>Learn more</MoreLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" aria-labelledby="how-heading" className={sectionClass}>
        <div className={container}>
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 id="how-heading" className={`mt-4 ${h2Class}`}>
              A short setup. Then it runs every week.
            </h2>
          </div>
          <div className="mt-14 md:mt-16">
            <Timeline items={STEPS} colsClass="lg:grid-cols-4" />
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="results" aria-labelledby="results-heading" className={sectionClass}>
        <div className={container}>
          <Eyebrow>What clients say</Eyebrow>
          <h2 id="results-heading" className={`mt-4 ${h2Class}`}>
            In their words.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-[minmax(0,320px)_1fr] lg:gap-6">
            <figure className={`${cardClass} mx-auto w-full max-w-[340px] overflow-hidden md:max-w-none`}>
              <video
                className="aspect-[9/16] w-full bg-ops-ink object-cover"
                src="/videos/mike-closir-testimonial.mp4"
                poster="/images/mike-closir-poster.jpg"
                controls
                preload="none"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              <figcaption className="p-6">
                <p className="font-semibold text-ops-ink">Mike Chojnacki</p>
                <p className="text-[15px] text-ops-text/80">CEO and co-founder, Closir</p>
              </figcaption>
            </figure>
            <div className="flex flex-col gap-5 lg:gap-6">
              <article className={`${cardClass} p-7 md:p-9`}>
                <Eyebrow>Closir · Investor relations software</Eyebrow>
                <p className={`mt-4 ${smallBody}`}>
                  Mike had the expertise and the client interviews, and no time to turn them into posts. I built a
                  LinkedIn content system around his own words: five content pillars, a 16-post calendar with hooks and
                  calls to action, and a post-level tracker so we could see what landed.
                </p>
              </article>
              <PullQuote quote={JESS_QUOTE} name="Jess Marquez" detail="Simply Jess Agency" />
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section aria-labelledby="standards-heading" className={sectionClass}>
        <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
          <div className="lg:col-span-5">
            <Eyebrow>How I work</Eyebrow>
            <h2 id="standards-heading" className={`mt-4 ${h2Class}`}>
              A few rules I hold myself to.
            </h2>
          </div>
          <ul className="grid gap-6 lg:col-span-7">
            {STANDARDS.map((s, i) => (
              <li key={i} className="flex gap-4 border-b border-ops-line/60 pb-6 last:border-b-0">
                <NodeDot kind={i === STANDARDS.length - 1 ? "lime" : "sage"} className="mt-[9px] shrink-0" />
                <p className="font-medium text-ops-ink">{s}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FitSection
        forText="Owners and partners of B2B service firms (consultancies, accounting and finance firms, software and tech partners, agencies), roughly 5 to 50 people, growing on referrals, with nobody focused on marketing. Especially if you’d rather have someone think alongside you than someone to manage."
        notForText="Anyone who wants a guaranteed number of leads next month, daily posting for the sake of volume, or the cheapest option available."
      />

      <FaqSection faqs={FAQS} />

      <FinalCta
        title="See what a marketing partner would do first."
        body="Book a 20-minute call. I’ll tell you what I’d focus on in month one, and if it’s not a fit, I’ll say so."
      />
    </OpsPage>
  );
}
