import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { inter, jakarta } from "@/components/home/fonts";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import { NodeDot } from "@/components/home/motifs";
import { EMAIL, btnLime, btnPrimary, textLink } from "@/components/home/shared";

/* =====================================================================
   Portfolio. Content mirrors the "Jack McHalffey - Portfolio" deck.
   Agency end clients stay unnamed until the agency owner says OK.
   ===================================================================== */

export const metadata: Metadata = {
  title: { absolute: "Work | TY Growth" },
  description:
    "Social accounts, email and CRM campaigns, strategy decks and marketing systems built for agencies and local businesses in Central Florida.",
  icons: { icon: "/icons/sprout.svg" },
};

const INSTAGRAM_URL = "https://www.instagram.com/jackquesting/";
const PHONE_HREF = "tel:+14696150678";

const container = "mx-auto max-w-6xl px-5 md:px-6";
const h2Class =
  "font-ops-heading text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] text-ops-ink text-balance md:text-[42px]";
const h3Class = "font-ops-heading text-[22px] font-extrabold leading-snug tracking-[-0.02em] text-ops-ink";
const body = "text-[16px] leading-[1.65] text-ops-text md:text-[17px]";
const card =
  "rounded-2xl border border-ops-line/60 bg-ops-card p-7 shadow-[0_1px_2px_rgba(11,43,35,0.04),0_12px_32px_-18px_rgba(11,43,35,0.18)] md:p-9";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.12em] text-ops-moss">{children}</p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-2.5">
      {items.map((i) => (
        <li key={i} className={`flex gap-3 ${body}`}>
          <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-ops-node" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

const STATS = [
  { value: "3,003", label: "contacts migrated into one CRM for Simply Jess Agency" },
  { value: "2,446", label: "past customers opted in to email, ready for win-back campaigns" },
  { value: "16", label: "post LinkedIn calendar built on five content pillars for Closir" },
];

const ASKED = [
  "Client intake forms that create project tasks",
  "Multi-location social workflows with branded templates",
  "Approval routing",
  "Client and contractor onboarding portals",
  "Cleaner asset handoff",
  "Social and email reporting behind the calendar",
];

export default function WorkPage() {
  return (
    <div
      className={`theme-ops ${jakarta.variable} ${inter.variable} relative min-h-screen font-ops-body text-[17px] leading-[1.6] antialiased selection:bg-ops-lime selection:text-ops-ink md:text-[18px]`}
    >
      <div aria-hidden="true" className="ops-grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05]" />

      <HomeHeader />

      <main>
        {/* HERO */}
        <section aria-labelledby="work-hero-heading" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="ops-corner-glow pointer-events-none absolute -left-10 -top-10 h-[360px] w-[360px]"
          />
          <div className={`relative ${container} pb-14 pt-14 md:pb-20 md:pt-20`}>
            <div className="max-w-[760px]">
              <Eyebrow>Work</Eyebrow>
              <h1
                id="work-hero-heading"
                className="mt-5 font-ops-heading text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] text-ops-ink text-balance sm:text-[40px] md:text-[52px]"
              >
                What I&apos;ve built for agencies and <span className="text-ops-moss">local businesses.</span>
              </h1>
              <p className="mt-6 max-w-[36rem] text-ops-text">
                Social accounts, email and CRM campaigns, strategy decks and the systems behind them. Most of it runs
                quietly under someone else&apos;s brand, so a few clients stay unnamed here.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  Follow the Black Friday 10 Challenge
                  <span className="sr-only"> (opens Instagram in a new tab)</span>
                </a>
                <a href="/holiday" className={textLink}>
                  See holiday campaign samples
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section aria-labelledby="work-stats-heading">
          <div className={container}>
            <div className="border-y border-ops-line/60 py-12">
              <h2 id="work-stats-heading" className="sr-only">
                By the numbers
              </h2>
              <ul className="grid gap-8 md:grid-cols-3">
                {STATS.map((s) => (
                  <li key={s.value}>
                    <p className="font-ops-heading text-[44px] font-extrabold leading-none tracking-[-0.02em] text-ops-ink">
                      {s.value}
                    </p>
                    <p className={`mt-3 ${body}`}>{s.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* LOCAL BUSINESS ACCOUNTS */}
        <section aria-labelledby="work-local-heading" className="py-20 md:py-28">
          <div className={container}>
            <Eyebrow>Local business accounts</Eyebrow>
            <h2 id="work-local-heading" className={`mt-4 max-w-[40rem] ${h2Class}`}>
              Med spas, aesthetics, physicians and personal brands.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className={card}>
                <div className="flex items-center gap-3">
                  <NodeDot kind="sage" />
                  <h3 className={h3Class}>Account management for a Florida social media agency</h3>
                </div>
                <p className={`mt-3 ${body}`}>
                  As a contractor I run accounts end to end for the agency&apos;s local clients.
                </p>
                <Bullets
                  items={[
                    "Content calendars for each account",
                    "Captions written in each brand's voice",
                    "Client approvals and scheduling",
                    "Monthly reporting",
                  ]}
                />
              </article>
              <article className={`${card} flex flex-col`}>
                <div className="flex items-center gap-3">
                  <NodeDot kind="sage" />
                  <h3 className={h3Class}>Holiday campaigns for local shops</h3>
                </div>
                <p className={`mt-3 ${body}`}>
                  A full Black Friday and Small Business Saturday campaign, live in 72 hours: email, texts, a gift card
                  promo, social posts and a Google Business post.
                </p>
                <p className={`mt-3 ${body}`}>Sample campaigns for a coffee shop, a restaurant and a gym.</p>
                <div className="mt-auto pt-6">
                  <a href="/holiday" className={textLink}>
                    See the samples
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* AGENCY WORK */}
        <section aria-labelledby="work-agency-heading" className="bg-ops-card/60 py-20 md:py-28">
          <div className={container}>
            <Eyebrow>Agencies and founders</Eyebrow>
            <h2 id="work-agency-heading" className={`mt-4 max-w-[40rem] ${h2Class}`}>
              Campaigns, decks and systems, delivered under their name.
            </h2>

            <div className="mt-12 grid gap-6">
              <article className={card}>
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ops-moss">
                  Simply Jess Agency · Visuals by Jess
                </p>
                <h3 className={`mt-3 ${h3Class}`}>Email, CRM and content operations</h3>
                <div className="mt-2 grid gap-x-10 md:grid-cols-2">
                  <Bullets
                    items={[
                      "Migrated contacts into GoHighLevel: 3,003 imported, 2,446 opted in to email",
                      "Reactivation, reminder, RSVP and check-in email templates",
                      "GoHighLevel workflows for event invites and follow-up",
                    ]}
                  />
                  <Bullets
                    items={[
                      "Content workflow connecting Notion, Dropbox, Make.com and Publer, with approvals",
                      "Tracking setup and webhook-based list growth",
                      "SOPs and setup guides so the team can run it",
                    ]}
                  />
                </div>
                <blockquote className="mt-8 border-l-0 rounded-xl bg-ops-cream px-5 py-4 text-[16px] leading-[1.6] text-ops-ink md:text-[17px]">
                  &ldquo;My problem was always not getting the content. My problem was executing the content and going
                  into social media. So by us doing this and getting into a systematic flow&hellip; I mean, game
                  changer.&rdquo;
                  <footer className="mt-2 text-[14px] font-semibold text-ops-moss">Jess Marquez, Simply Jess Agency</footer>
                </blockquote>
              </article>

              <div className="grid gap-6 md:grid-cols-2">
                <article className={card}>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ops-moss">
                    BecksTheSocial · Miami social media agency
                  </p>
                  <h3 className={`mt-3 ${h3Class}`}>White-label strategy decks and media kits</h3>
                  <Bullets
                    items={[
                      "Client strategy decks: brand positioning, content pillars, cadence and a 90-day plan",
                      "A repeatable Canva and PowerPoint pipeline, so new decks start from discovery",
                      "Media kit drafts for creator clients",
                      "Outreach templates her team uses to pitch brand deals",
                    ]}
                  />
                </article>
                <article className={card}>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ops-moss">Closir · B2B SaaS</p>
                  <h3 className={`mt-3 ${h3Class}`}>Founder-led LinkedIn system</h3>
                  <Bullets
                    items={[
                      "Five content pillars and a 16-post calendar with hooks and CTAs",
                      "Founder interviews repurposed into posts",
                      "A post-level performance tracker in Google Sheets",
                      "Reference available from Michael Chojnacki, CEO and co-founder",
                    ]}
                  />
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT GETS SYSTEMATIZED */}
        <section aria-labelledby="work-asked-heading" className="py-20 md:py-28">
          <div className={`${container} grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16`}>
            <div>
              <Eyebrow>Most requested</Eyebrow>
              <h2 id="work-asked-heading" className={`mt-4 ${h2Class}`}>
                What owners ask me to systematize.
              </h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {ASKED.map((a) => (
                <li
                  key={a}
                  className="rounded-xl border border-ops-line/60 bg-ops-card px-4 py-3 text-[16px] font-semibold text-ops-ink"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="work-cta-heading" className="ops-dark bg-ops-ink py-20 text-ops-cream md:py-24">
          <div className={`${container} text-center`}>
            <h2
              id="work-cta-heading"
              className="font-ops-heading text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] text-balance md:text-[42px]"
            >
              Want something like this for your business?
            </h2>
            <p className="mx-auto mt-5 max-w-[34rem] text-ops-cream/85">
              I&apos;m in Celebration, FL. Text me what you&apos;re working on and I&apos;ll tell you honestly if I can
              help.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <a href={PHONE_HREF} className={btnLime}>
                Call or text Jack
              </a>
              <a href={`mailto:${EMAIL}`} className="font-semibold text-ops-cream underline-offset-4 hover:underline">
                {EMAIL}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-ops-cream underline-offset-4 hover:underline"
              >
                @jackquesting
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
