import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { inter, jakarta } from "@/components/home/fonts";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import { NodeDot } from "@/components/home/motifs";
import { EMAIL, btnPrimary, btnLime, textLink } from "@/components/home/shared";
import AgentTools from "@/components/agent/AgentTools";
import AgentSection from "@/components/agent/AgentSection";

/* =====================================================================
   Personal agent: business and marketing ops handled by an AI agent
   set up on the client's own tools. CTA is email, details on request.
   (Route kept at /agent-ready so existing links still work.)
   ===================================================================== */

export const metadata: Metadata = {
  title: { absolute: "Your Own Personal AI Agent for Business and Marketing Ops | TY Growth" },
  description:
    "An AI agent set up on the tools you already use, handling the business and marketing ops that eat your week. You approve what goes out. Email Jack for details.",
  icons: { icon: "/icons/sprout.svg" },
};

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Personal agent")}&body=${encodeURIComponent(
  "Hi Jack,\n\nMy business: \nThe tasks eating my week: \nTools I use (email, CRM, calendar, etc.): \n",
)}`;

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

function EmailButton({ variant = "primary" }: { variant?: "primary" | "lime" }) {
  return (
    <a href={MAILTO} className={variant === "lime" ? btnLime : btnPrimary}>
      Email me for details
    </a>
  );
}

type UseCase = { title: string; body: string; example: string };

const BUSINESS_OPS: UseCase[] = [
  {
    title: "Inbox triage",
    body: "Sorts your email every morning into what needs you, what it already drafted a reply to, and what can wait.",
    example: "\"Three need you today. I drafted replies to the other eight in your voice.\"",
  },
  {
    title: "Lead follow-up",
    body: "Answers new form fills and DMs within minutes, asks your qualifying questions, and logs them in your CRM.",
    example: "\"New inquiry from a 12-person dental office. Replied, sent your calendar link, added to HubSpot.\"",
  },
  {
    title: "Meetings to action items",
    body: "Turns call notes into tasks with owners and dates, updates the client record, and drafts the follow-up email.",
    example: "\"Recap from your 2pm is drafted. Four tasks created, two are yours.\"",
  },
  {
    title: "Client onboarding",
    body: "When a client signs, it sends the intake form, sets up folders and tasks, and books the kickoff call.",
    example: "\"New client signed. Intake sent, Drive folder ready, kickoff booked for Thursday.\"",
  },
  {
    title: "Invoices and payments",
    body: "Flags overdue invoices and drafts reminders, gentle for good clients and firmer for repeat late payers.",
    example: "\"Two invoices are 15+ days late. Reminders drafted for your OK.\"",
  },
];

const MARKETING_OPS: UseCase[] = [
  {
    title: "Content repurposing",
    body: "Turns one video, podcast or long post into short posts, captions and a newsletter draft, queued for approval.",
    example: "\"Your Tuesday video became 5 posts and a newsletter. Ready to review.\"",
  },
  {
    title: "Weekly marketing report",
    body: "Pulls numbers from your ads, social, website and sales into one plain-English page every Monday.",
    example: "\"Leads up 18% week over week. Meta cost per lead went up; Google stayed flat.\"",
  },
  {
    title: "Reviews",
    body: "Asks happy customers for a Google review at the right moment and drafts replies to new reviews.",
    example: "\"Two new 5-star reviews. Replies drafted. One 3-star needs your eyes.\"",
  },
  {
    title: "Win-back campaigns",
    body: "Finds customers who haven't come back in a while and sends them a timed offer by email or text.",
    example: "\"146 customers haven't visited in 90 days. Draft offer ready to send.\"",
  },
  {
    title: "Competitor watch",
    body: "Checks what competitors post, change and advertise, and sends a short digest of what's worth reacting to.",
    example: "\"Your top competitor launched a holiday bundle. Here's what they're charging.\"",
  },
];

const STEPS: { label: string; title: string; body: string }[] = [
  {
    label: "Step 01",
    title: "Email me your week",
    body: "Tell me the tasks that eat your time and the tools you use. I'll reply with the first three things your agent should take over.",
  },
  {
    label: "Step 02",
    title: "I set it up on your tools",
    body: "Your email, calendar, CRM and the rest. No new software to learn. You message it like you would an assistant.",
  },
  {
    label: "Step 03",
    title: "You approve, it learns",
    body: "Drafts come to you first. As you trust it with a task, it handles that task on its own.",
  },
  {
    label: "Step 04",
    title: "I keep tuning it",
    body: "I check its work, fix what's off, and add the next task as your business changes.",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Will it send things without me?",
    a: "Not until you say so. Everything starts as a draft you approve. You decide which tasks it can finish on its own.",
  },
  {
    q: "What tools does it work with?",
    a: "The ones you already use: Gmail or Outlook, Google Calendar and Drive, GoHighLevel, HubSpot, Notion, Slack and more. If something can't connect, I'll tell you before we start.",
  },
  {
    q: "Is this a chatbot on my website?",
    a: "No. It works behind the scenes on your business, like an operations assistant, not a widget your customers talk to.",
  },
  {
    q: "What does it cost?",
    a: "It depends on how many tasks it takes over and which tools it connects to. Email me what you need and I'll send you a straight answer.",
  },
  {
    q: "Is my data safe?",
    a: "It only gets access to the tools you approve, and you can remove that access at any time.",
  },
];

function UseCaseList({ items }: { items: UseCase[] }) {
  return (
    <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((u) => (
        <li key={u.title} className={card}>
          <div className="flex items-center gap-3">
            <NodeDot kind="sage" />
            <h3 className={h3Class}>{u.title}</h3>
          </div>
          <p className={`mt-3 ${body}`}>{u.body}</p>
          <p className="mt-4 rounded-xl bg-ops-cream px-4 py-3 text-[14.5px] leading-[1.5] text-ops-ink">
            <span className="mr-1.5 font-semibold text-ops-moss">Your agent:</span>
            {u.example}
          </p>
        </li>
      ))}
    </ul>
  );
}

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
            <div className="max-w-[780px]">
              <Eyebrow>Your own personal agent</Eyebrow>
              <h1
                id="agent-hero-heading"
                className="mt-5 font-ops-heading text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] text-ops-ink text-balance sm:text-[40px] md:text-[52px]"
              >
                Business and marketing ops, <span className="text-ops-moss">handled by your own AI agent.</span>
              </h1>
              <p className="mt-6 max-w-[36rem] text-ops-text">
                The follow-ups, reports, inbox and admin that eat your week. I set up an agent on the tools you already
                use, it does the work, and you approve what goes out.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <EmailButton />
                <a href="#use-cases" className={textLink}>
                  See what it can do
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES: BUSINESS */}
        <section id="use-cases" aria-labelledby="agent-business-heading" className="scroll-mt-20 bg-ops-card/60 py-20 md:py-28">
          <div className={container}>
            <Eyebrow>Business ops</Eyebrow>
            <h2 id="agent-business-heading" className={`mt-4 max-w-[40rem] ${h2Class}`}>
              The admin that keeps the lights on.
            </h2>
            <UseCaseList items={BUSINESS_OPS} />
          </div>
        </section>

        {/* USE CASES: MARKETING */}
        <section aria-labelledby="agent-marketing-heading" className="py-20 md:py-28">
          <div className={container}>
            <Eyebrow>Marketing ops</Eyebrow>
            <h2 id="agent-marketing-heading" className={`mt-4 max-w-[40rem] ${h2Class}`}>
              The marketing that never gets done.
            </h2>
            <UseCaseList items={MARKETING_OPS} />
            <p className={`mt-8 max-w-[44rem] ${body}`}>
              These are examples, not a menu. Your agent gets built around the tasks that cost you the most time.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" aria-labelledby="agent-how-heading" className="scroll-mt-20 bg-ops-card/60 py-20 md:py-28">
          <div className={container}>
            <Eyebrow>How it works</Eyebrow>
            <h2 id="agent-how-heading" className={`mt-4 max-w-[40rem] ${h2Class}`}>
              Start with one task. Hand over the next when you trust it.
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
        <section id="faq" aria-labelledby="agent-faq-heading" className="scroll-mt-20 py-20 md:py-28">
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
        <section aria-labelledby="agent-cta-heading" className="ops-dark bg-ops-ink py-20 text-ops-cream md:py-24">
          <div className={`${container} text-center`}>
            <h2
              id="agent-cta-heading"
              className="font-ops-heading text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] text-balance md:text-[42px]"
            >
              Tell me what eats your week.
            </h2>
            <p className="mx-auto mt-5 max-w-[34rem] text-ops-cream/85">
              Email me the tasks you&apos;d hand off first and the tools you use. I&apos;ll reply with what your agent
              would take over and what it costs.
            </p>
            <div className="mt-9">
              <EmailButton variant="lime" />
            </div>
            <p className="mt-5 text-[15px] text-ops-cream/75">{EMAIL}</p>
          </div>
        </section>
      </main>

      <AgentTools />
      <AgentSection />

      <HomeFooter />
    </div>
  );
}
