import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import {
  BRANDS,
  BookButton,
  BulletList,
  Eyebrow,
  FaqSection,
  FinalCta,
  FitSection,
  LogoStrip,
  MoreLink,
  NewTab,
  NodeLines,
  OpsPage,
  PullQuote,
  ServiceHero,
  Timeline,
  cardClass,
  container,
  h2Class,
  h3Class,
  sectionClass,
  smallBody,
  type TimelineItem,
} from "@/components/home/blocks";
import { CommunityCircuit, IconAgents, IconAutomation, IconOpsSystems } from "@/components/home/motifs";
import { btnPrimary, textLink } from "@/components/home/shared";

/* =====================================================================
   Services: Agency Ops. Marketing agencies sell to other businesses too,
   so this is the agency version of the marketing partner offer. The
   Simply Jess and BecksTheSocial work is here as a showcase of what
   I can build for other agencies.
   ===================================================================== */

const COMMUNITY_URL = "https://tally.so/r/XxVB6O";

const JESS_QUOTE =
  "My problem was always not getting the content. My problem was executing the content and going into social media. So by us doing this and getting into a systematic flow… I mean, game changer.";

export const metadata: Metadata = {
  title: { absolute: "Agency Ops | Back-Office Partner for Marketing Agencies | TY Growth" },
  description:
    "I run the back office for small marketing and social media agencies, then build CRM, follow-up, and review systems for your clients under your agency's name.",
  icons: { icon: "/icons/sprout.svg" },
};

const PROBLEMS = [
  "Onboarding lives in your head instead of in a process.",
  "Client info and contacts are spread across five different tools.",
  "Follow-ups, reports, and decks get done whenever you find the time.",
  "Your content calendar runs on group chats and reminders.",
];

const SERVICE_CARDS = [
  {
    label: "For your agency",
    title: "Your back office, handled",
    body: "You hand me the ops work eating your week, and I take it over. We meet once a week to go over what’s next.",
    items: [
      "Client onboarding and intake forms",
      "CRM setup, with every contact in one place",
      "Client tracking and project boards",
      "Content workflows, from raw files to scheduled posts",
      "Reports, pitch decks, and strategy docs",
    ],
    Icon: IconOpsSystems,
  },
  {
    label: "For your clients",
    title: "Backend services you can sell",
    body: "I build systems for your clients under your agency’s name. You own the relationship and the sale. I build and run it, and we split what the client pays.",
    items: [
      "CRM and lead follow-up",
      "Win-back campaigns to past customers",
      "Google review requests",
      "Event and promo messaging by text and email",
    ],
    Icon: IconAutomation,
  },
];

const STEPS: TimelineItem[] = [
  { label: "Step 01", title: "20-minute fit call", body: "We go through your week. If I’m not a fit, I’ll tell you.", node: "ink" },
  {
    label: "Step 02",
    title: "Start with your list",
    body: "You hand me the tasks you’re stuck doing. I take them over, and we meet once a week.",
    node: "ring",
  },
  {
    label: "Step 03",
    title: "Turn repeats into systems",
    body: "Work that repeats becomes a template, an automation, or an AI agent, so your hours come back.",
    node: "sage",
  },
  {
    label: "Step 04",
    title: "Add client services",
    body: "When you’re ready, I build backend systems for your clients. You sell it, I build it, we split it.",
    node: "lime",
  },
];

const FAQS = [
  {
    q: "Is this software or a service?",
    a: "A service. I do the work myself inside the tools you already use, and build automations and AI agents where they save time.",
  },
  {
    q: "How is it priced?",
    a: "Your agency work is a flat monthly rate, set on the call once we see what’s on your plate. Client builds are priced per project, and we split what your client pays.",
  },
  {
    q: "Who owns the client relationship?",
    a: "You do. Client work goes out under your agency’s name, and I stay behind the scenes.",
  },
  { q: "Do I need GoHighLevel already?", a: "No. I can set it up, or work with what you have." },
  { q: "What do you need from me?", a: "Logins, a list of what’s eating your week, and a weekly call." },
  {
    q: "Do you guarantee revenue?",
    a: "No. I’m responsible for the systems getting built and running, and the time they give back to you. On client campaigns, my part ends at replies and booked calls. Closing is yours.",
  },
  {
    q: "You’re early. Why trust you?",
    a: "I am early, so I keep my client list small and you work with me directly. We start with the tasks already on your list, so you see the work before anything bigger.",
  },
];

export default function AgencyOpsPage() {
  return (
    <OpsPage>
      <ServiceHero
        id="agency-hero-heading"
        eyebrow="Services · Agency Ops"
        title={
          <>
            Your agency’s back office, <span className="text-ops-moss">handled.</span>
          </>
        }
        actions={
          <>
            <BookButton />
            <a href="#what-i-do" className={textLink}>
              See what I take on
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </>
        }
      >
        <p>
          Agencies sell to other businesses too, so this is my marketing partner work, built for agency owners. I take
          the ops off your plate: onboarding, CRM, client tracking, reports, and decks. Anything that repeats becomes a
          system or an AI agent. When you’re ready, I also build backend services for your clients under your
          agency’s name.
        </p>
      </ServiceHero>

      {/* PROOF */}
      <section aria-label="Agencies I work with" className="scroll-mt-20">
        <div className={container}>
          <LogoStrip
            heading="Agencies I’ve built for"
            brands={[BRANDS.simplyJess, BRANDS.visualsByJess, BRANDS.becks]}
            caption="Ops and systems work for Simply Jess Agency and BecksTheSocial. It’s here to show the kind of thing I can build for your agency."
          />
          <div className="mt-10 md:mt-12">
            <PullQuote
              quote={JESS_QUOTE}
              name="Jess Marquez"
              detail="Simply Jess Agency"
              logo={{ src: "/logos/brands/simply-jess.png", alt: "Simply Jess Agency logo", width: 643, height: 194 }}
            />
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
              Every new client adds another login, another spreadsheet, and another follow-up you have to remember. Your
              CRM, inbox, project board, and calendar each hold part of the picture, and you end up being the glue
              between them. That glue work eats the hours you meant to spend on clients and growth.
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
              One partner, two ways to use me.
            </h2>
            <p className="mt-5 max-w-2xl text-ops-text">
              I start inside your agency. Once your back office runs without you in the middle, I can also build for
              your clients.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            {SERVICE_CARDS.map(({ label, title, body, items, Icon }) => (
              <article key={label} className={`${cardClass} flex flex-col p-7 md:p-9`}>
                <Icon className="h-10 w-[88px]" />
                <Eyebrow className="mt-7">{label}</Eyebrow>
                <h3 className={`mt-3 ${h3Class}`}>{title}</h3>
                <p className={`mt-3 ${smallBody}`}>{body}</p>
                <div className={`mt-6 border-t border-ops-line/60 pt-6 ${smallBody}`}>
                  <BulletList items={items} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-6 rounded-2xl border border-ops-line/70 bg-ops-card p-7 md:mt-6 md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-9">
            <IconAgents className="h-10 w-[88px]" />
            <div>
              <h3 className={h3Class}>It gets lighter every month.</h3>
              <p className={`mt-2 ${smallBody}`}>
                Anything we do more than twice becomes a template, an automation, or an AI agent. The same work takes
                less time each month, and my time moves to the next thing on your list.
              </p>
            </div>
          </div>

          <p className="mt-6 text-[14px] text-ops-text/80">
            Not included: software subscriptions, SMS and email usage fees, ad spend.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" aria-labelledby="how-heading" className={sectionClass}>
        <div className={container}>
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 id="how-heading" className={`mt-4 ${h2Class}`}>
              Start small. Build from there.
            </h2>
          </div>
          <div className="mt-14 md:mt-16">
            <Timeline items={STEPS} colsClass="lg:grid-cols-4" />
          </div>
        </div>
      </section>

      {/* WHAT I'VE BUILT */}
      <section id="results" aria-labelledby="results-heading" className={sectionClass}>
        <div className={container}>
          <Eyebrow>What I can build</Eyebrow>
          <h2 id="results-heading" className={`mt-4 ${h2Class}`}>
            What I’ve built for two agencies
          </h2>
          <p className="mt-5 max-w-2xl text-ops-text">
            Every agency is set up a little differently, but the problems rhyme. Here’s the work, so you can picture what
            it would look like in yours.
          </p>

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
                      "Merged contacts from Shopify, her phone, her event app, and email into one CRM",
                      "2,446 past customers opted in to email and ready for her first win-back campaign",
                      "Built the content workflow her editors use, from raw files to scheduled posts",
                      "Her white-label tech partner: she sells CRM and automation to her clients, and I build it",
                    ]}
                  />
                </div>
              </div>
              <div className="ops-dark relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-ops-forest to-ops-ink px-7 pb-8 pt-16 md:px-10 md:pb-10">
                <CommunityCircuit glowId="ops-case-glow" className="absolute left-0 top-6 h-7 w-[220px] opacity-60" />
                <p className="font-ops-heading text-[52px] font-extrabold leading-none tracking-[-0.02em] text-ops-cream md:text-[60px]">
                  4 → 1
                </p>
                <p className="mt-3 text-ops-cream/85">contact lists merged into one CRM</p>
              </div>
            </div>
          </article>

          <article className={`${cardClass} mt-5 p-7 md:mt-6 md:p-10`}>
            <h3 className="font-ops-heading text-[22px] font-extrabold tracking-[-0.02em] text-ops-ink md:text-[24px]">
              BecksTheSocial
            </h3>
            <p className="mt-1 text-ops-text/80">A Miami social media agency</p>
            <div className={`mt-6 ${smallBody}`}>
              <BulletList
                items={[
                  "Weekly ops support for the owner: I take over the tasks she hands me",
                  "Each week we pick the next piece of her workflow to turn into a system",
                  "White-label client strategy decks with positioning, content pillars, cadence and a 90-day plan",
                  "A repeatable Canva and PowerPoint pipeline, so new decks start from discovery notes",
                ]}
              />
            </div>
          </article>
        </div>
      </section>

      <FitSection
        forText="Owners of small marketing, social media, content, or creative agencies who are still the glue between their CRM, inbox, project board, and calendar. Especially if you’ve been thinking about hiring an ops person or a VA."
        notForText="Anyone looking for ad management or lead generation alone, anyone who won’t share logins and data, and anyone who wants a guaranteed revenue number."
      />

      <FaqSection faqs={FAQS} />

      <FinalCta
        title="See what I can take off your plate."
        body="Book a 20-minute call. We’ll walk through your week, and you’ll leave knowing the first thing I’d take over. If it’s not a fit, I’ll tell you."
      />

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
            Not an agency?{" "}
            <MoreLink href="/services/b2b-marketing-partner">See B2B Marketing Partner</MoreLink>
          </p>
        </div>
      </section>
    </OpsPage>
  );
}
