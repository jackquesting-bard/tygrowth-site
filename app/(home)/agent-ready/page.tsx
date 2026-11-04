import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { inter, jakarta } from "@/components/home/fonts";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import { NodeDot } from "@/components/home/motifs";
import { BOOKING_URL, btnPrimary, btnLime, textLink } from "@/components/home/shared";
import AgentTools from "@/components/agent/AgentTools";
import AgentSection from "@/components/agent/AgentSection";

/* =====================================================================
   Agent-ready sites for property managers.
   Offer details live in the "Housing offer" tab of the planning doc.
   ===================================================================== */

export const metadata: Metadata = {
  title: { absolute: "Agent-Ready Websites for Property Managers | TY Growth" },
  description:
    "Owners and renters are handing their search to AI agents. I make your site one an agent can read and act on: your services, your listings, and a booked consultation.",
  icons: { icon: "/icons/sprout.svg" },
};

const container = "mx-auto max-w-6xl px-5 md:px-6";
const h2Class =
  "font-ops-heading text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] text-ops-ink text-balance md:text-[42px]";
const h3Class = "font-ops-heading text-[20px] font-bold leading-snug tracking-[-0.02em] text-ops-ink";
const body = "text-[16px] leading-[1.65] text-ops-text md:text-[17px]";
const card =
  "rounded-2xl border border-ops-line/60 bg-ops-card p-7 shadow-[0_1px_2px_rgba(11,43,35,0.04),0_12px_32px_-18px_rgba(11,43,35,0.18)]";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.12em] text-ops-moss">{children}</p>
  );
}

function CheckButton({ variant = "primary" }: { variant?: "primary" | "lime" }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "lime" ? btnLime : btnPrimary}
    >
      Get a free agent check
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

const STATS: { value: string; label: string; source: string; href: string }[] = [
  {
    value: "45%",
    label: "of prospective home buyers have used AI tools in their search, up from 37% a year earlier",
    source: "Veterans United, June 2026",
    href: "https://www.veteransunited.com/education/ai-homebuying-survey/",
  },
  {
    value: "71%",
    label: "of ChatGPT rental searches linked to a community's own website",
    source: "Agency Fifty3, via NAA",
    href: "https://naahq.org/news/how-properties-can-gain-visibility-ai-search",
  },
  {
    value: "5",
    label: "big listing portals already run apps inside ChatGPT, and they send leads to themselves",
    source: "HousingWire, Apartments.com",
    href: "https://www.housingwire.com/articles/realtorcom-chatgpt-app-launch/",
  },
];

const BUILD: { title: string; body: string }[] = [
  {
    title: "Your services, readable",
    body: "What you manage, where, your fees approach, and who you're a fit for, in a format an agent reads in one request.",
  },
  {
    title: "Book a consultation",
    body: "An owner's agent can check your calendar and book a call, or hand the owner a prefilled link to confirm.",
  },
  {
    title: "Listings agents can see",
    body: "Your AppFolio or Buildium listings shown as real page content with a showing-request link, not hidden in a widget.",
  },
  {
    title: "Browser agent tools",
    body: "WebMCP tools on your site, the standard ChatGPT's desktop browser already uses to act on pages directly.",
  },
];

const STEPS: { label: string; title: string; body: string }[] = [
  {
    label: "Step 01",
    title: "Free agent check",
    body: "I ask ChatGPT, Gemini, Claude and Grok to find and book a property manager in your area, and record what happens on your site and two competitors'.",
  },
  {
    label: "Step 02",
    title: "Fixed-price build",
    body: "I add the agent layer on top of your current site. No redesign. You give read access to your listings feed and calendar.",
  },
  {
    label: "Step 03",
    title: "Re-test in 30 days",
    body: "Same prompts, recorded again, so you can see the difference on your own site.",
  },
  {
    label: "Step 04",
    title: "Monthly report (optional)",
    body: "Which agents called your site and what they did, plus a re-test each month as the standards change.",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Do I need a new website?",
    a: "No. The agent layer sits on top of the site you have. If your site is fully hosted by a platform that won't accept custom code, I'll tell you on the free check.",
  },
  {
    q: "Doesn't Zillow or Apartments.com already cover this?",
    a: "They cover search inside ChatGPT, and they send those leads to their own listings. This is for when an agent looks at your company directly: an owner comparing managers, or a renter who already has your name.",
  },
  {
    q: "Is AI agent traffic real yet?",
    a: "It's early. Buyer use is growing fast, renter use is smaller. Nobody can promise you a number of agent leads yet, so I don't. What I guarantee is that agents can read your site and book with you.",
  },
  {
    q: "What about fair housing?",
    a: "The tools only share listing facts like price, beds, pet policy and availability. Nothing filters or describes listings by anything tied to a protected class.",
  },
  {
    q: "What's the guarantee?",
    a: "If the 30-day re-test agents still can't read your listings or book a consultation on your site, I keep working free until they can, or refund the setup.",
  },
  {
    q: "Can I see it working first?",
    a: "Yes. This site runs the same layer. Point your AI agent at tygrowth.com and ask it to book a call with me.",
  },
];

export default function AgentReadyPage() {
  return (
    <div
      className={`theme-ops ${jakarta.variable} ${inter.variable} relative min-h-screen font-ops-body text-[17px] leading-[1.6] antialiased selection:bg-ops-lime selection:text-ops-ink md:text-[18px]`}
    >
      <div aria-hidden="true" className="ops-grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05]" />

      <HomeHeader />

      <main>
        {/* HERO */}
        <section aria-labelledby="agent-hero-heading" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="ops-corner-glow pointer-events-none absolute -left-10 -top-10 h-[360px] w-[360px]"
          />
          <div className={`relative ${container} pb-16 pt-14 md:pb-24 md:pt-20`}>
            <div className="max-w-[760px]">
              <Eyebrow>For property managers</Eyebrow>
              <h1
                id="agent-hero-heading"
                className="mt-5 font-ops-heading text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] text-ops-ink text-balance sm:text-[40px] md:text-[52px]"
              >
                When an AI agent shops for a property manager, <span className="text-ops-moss">can it book you?</span>
              </h1>
              <p className="mt-6 max-w-[36rem] text-ops-text">
                Owners and renters are handing their search to ChatGPT and Gemini. Agents skip sites they can&apos;t
                read and pick the ones they can act on. I make your site one they can act on: your services, your
                listings, and a booked consultation.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <CheckButton />
                <a href="#how-it-works" className={textLink}>
                  See how it works
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DATA */}
        <section aria-labelledby="agent-data-heading" className="scroll-mt-20">
          <div className={container}>
            <div className="border-y border-ops-line/60 py-12">
              <h2 id="agent-data-heading" className="sr-only">
                The numbers
              </h2>
              <ul className="grid gap-8 md:grid-cols-3">
                {STATS.map((s) => (
                  <li key={s.value}>
                    <p className="font-ops-heading text-[44px] font-extrabold leading-none tracking-[-0.02em] text-ops-ink">
                      {s.value}
                    </p>
                    <p className={`mt-3 ${body}`}>{s.label}</p>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-[13px] text-ops-text/70 underline-offset-4 hover:underline"
                    >
                      {s.source}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section aria-labelledby="agent-problem-heading" className="py-20 md:py-28">
          <div className={`${container} grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16`}>
            <div>
              <Eyebrow>The problem</Eyebrow>
              <h2 id="agent-problem-heading" className={`mt-4 ${h2Class}`}>
                Your listings might be invisible to agents.
              </h2>
            </div>
            <div className={`grid gap-5 ${body}`}>
              <p>
                Most agents read a page&apos;s HTML to figure out what&apos;s on it. If your listings load inside an
                AppFolio iframe or a JavaScript widget, the agent sees an empty page.
              </p>
              <p>
                When I tested this, my own agent compared several sites, found that some were too much work to read,
                and dropped them. It recommended the ones it could use quickly. Your competitors don&apos;t know
                this is happening either.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT I BUILD */}
        <section aria-labelledby="agent-build-heading" className="bg-ops-card/60 py-20 md:py-28">
          <div className={container}>
            <Eyebrow>What I build</Eyebrow>
            <h2 id="agent-build-heading" className={`mt-4 max-w-[40rem] ${h2Class}`}>
              An agent layer on top of the site you already have.
            </h2>
            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {BUILD.map((b) => (
                <li key={b.title} className={card}>
                  <div className="flex items-center gap-3">
                    <NodeDot kind="sage" />
                    <h3 className={h3Class}>{b.title}</h3>
                  </div>
                  <p className={`mt-3 ${body}`}>{b.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" aria-labelledby="agent-how-heading" className="scroll-mt-20 py-20 md:py-28">
          <div className={container}>
            <Eyebrow>How it works</Eyebrow>
            <h2 id="agent-how-heading" className={`mt-4 max-w-[40rem] ${h2Class}`}>
              See it fail, fix it, see it work.
            </h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <li key={s.label}>
                  <Eyebrow>{s.label}</Eyebrow>
                  <h3 className={`mt-3 ${h3Class}`}>{s.title}</h3>
                  <p className={`mt-3 ${body}`}>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="agent-faq-heading" className="scroll-mt-20 pb-20 md:pb-28">
          <div className={`${container} max-w-4xl`}>
            <Eyebrow>FAQ</Eyebrow>
            <h2 id="agent-faq-heading" className={`mt-4 ${h2Class}`}>
              Common questions
            </h2>
            <div className="mt-10 divide-y divide-ops-line/60 border-y border-ops-line/60">
              {FAQ.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none font-ops-heading text-[18px] font-bold text-ops-ink">
                    {f.q}
                  </summary>
                  <p className={`mt-3 ${body}`}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="agent-cta-heading" className="bg-ops-ink py-20 text-ops-cream md:py-24">
          <div className={`${container} text-center`}>
            <h2
              id="agent-cta-heading"
              className="font-ops-heading text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] text-balance md:text-[42px]"
            >
              Find out what agents see on your site.
            </h2>
            <p className="mx-auto mt-5 max-w-[34rem] text-ops-cream/85">
              Book 20 minutes. I&apos;ll run the agent check first and show you the recording on the call. If your
              site already works, I&apos;ll tell you.
            </p>
            <div className="mt-9">
              <CheckButton variant="lime" />
            </div>
          </div>
        </section>
      </main>

      <AgentTools />
      <AgentSection />

      <HomeFooter />
    </div>
  );
}
