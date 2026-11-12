"use client";

import { useState, type ReactNode } from "react";
import { HOLIDAY_EXAMPLES } from "./examples";
import { BOOKING_URL, EMAIL, btnLime, btnPrimary } from "@/components/home/shared";

/* The /holiday page body: an Offer tab and an Examples tab.
   Both panels render on the server; the tabs only toggle which one shows. */

const PHONE_DISPLAY = "(469) 615-0678";
const PHONE_HREF = "tel:+14696150678";

const container = "mx-auto max-w-6xl px-5 md:px-6";
const h2Class =
  "font-ops-heading text-[28px] font-extrabold leading-[1.12] tracking-[-0.02em] text-ops-ink text-balance md:text-[38px]";
const h3Class = "font-ops-heading text-[20px] font-bold leading-snug tracking-[-0.02em] text-ops-ink";
const body = "text-[16px] leading-[1.65] text-ops-text md:text-[17px]";
const card =
  "rounded-2xl border border-ops-line/60 bg-ops-card p-6 shadow-[0_1px_2px_rgba(11,43,35,0.04),0_12px_32px_-18px_rgba(11,43,35,0.18)]";

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-[13px] font-semibold uppercase leading-none tracking-[0.12em] ${
        dark ? "text-ops-lime" : "text-ops-moss"
      }`}
    >
      {children}
    </p>
  );
}

const INCLUDED = [
  { n: "01", title: "Holiday email", body: "Written, designed and scheduled to your customer list." },
  { n: "02", title: "Three texts", body: "Teaser, launch day and last call, sent only to customers who opted in." },
  { n: "03", title: "Gift card promo", body: "The offer, the bonus math, and counter sign copy so staff can sell it." },
  { n: "04", title: "Three social posts", body: "Graphics plus captions, ready for Instagram and Facebook." },
  { n: "05", title: "Google Business post", body: "So people searching nearby see your deal right on Maps." },
];

const STEPS = [
  {
    label: "Step 01",
    title: "15-minute call",
    body: "We pick your offer. You share your logo and access to your customer list.",
  },
  {
    label: "Step 02",
    title: "I build it in 72 hours",
    body: "Email, texts, graphics and posts land on your phone to approve or tweak.",
  },
  {
    label: "Step 03",
    title: "It runs itself",
    body: "Everything goes out on schedule, Black Friday through Cyber Monday.",
  },
];

const FAQ = [
  { q: "No email or text tool?", a: "I can send it through my platform for you." },
  {
    q: "Are the texts allowed?",
    a: "They only go to customers who opted in to hear from you, and every text includes an opt out.",
  },
  { q: "How much of my time?", a: "One 15-minute call and a few minutes to approve drafts." },
  { q: "When is the cutoff?", a: "Book by Friday, November 20 so everything is live before Black Friday week." },
];

const WHO = ["Coffee shops", "Restaurants", "Gyms and studios", "Salons and med spas", "Boutiques"];

function CallButton({ variant = "primary" }: { variant?: "primary" | "lime" }) {
  return (
    <a href={PHONE_HREF} className={variant === "lime" ? btnLime : btnPrimary}>
      Call or text Jack
    </a>
  );
}

export default function HolidayTabs() {
  const [tab, setTab] = useState<"offer" | "examples">("offer");
  const [bizId, setBizId] = useState(HOLIDAY_EXAMPLES[0].id);
  const biz = HOLIDAY_EXAMPLES.find((b) => b.id === bizId) ?? HOLIDAY_EXAMPLES[0];

  const goTo = (next: "offer" | "examples") => {
    setTab(next);
    if (typeof window !== "undefined") {
      document.getElementById("holiday-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const tabBtn = (id: "offer" | "examples", label: string) => (
    <button
      type="button"
      role="tab"
      id={`tab-${id}`}
      aria-selected={tab === id}
      aria-controls={`panel-${id}`}
      onClick={() => setTab(id)}
      className={`min-h-11 rounded-full px-5 text-[15px] font-semibold transition-colors ${
        tab === id ? "bg-ops-ink text-ops-cream" : "text-ops-ink hover:bg-ops-ink/5"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* HERO */}
      <section aria-labelledby="holiday-hero-heading" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="ops-corner-glow pointer-events-none absolute -left-10 -top-10 h-[360px] w-[360px]"
        />
        <div className={`relative ${container} grid gap-10 pb-14 pt-14 md:grid-cols-[1.5fr_1fr] md:items-center md:pb-20 md:pt-20`}>
          <div>
            <Eyebrow>Black Friday Nov 27 · Small Business Saturday Nov 28</Eyebrow>
            <h1
              id="holiday-hero-heading"
              className="mt-5 font-ops-heading text-[36px] font-extrabold leading-[1.06] tracking-[-0.02em] text-ops-ink text-balance sm:text-[40px] md:text-[54px]"
            >
              Your Black Friday campaign, <span className="text-ops-moss">live in 72 hours.</span>
            </h1>
            <p className="mt-6 max-w-[36rem] text-ops-text">
              Most local shops know they should run a holiday promo and never get to it. I build and launch the whole
              thing for you. You approve it from your phone.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <CallButton />
              <button
                type="button"
                onClick={() => goTo("examples")}
                className="inline-flex items-center gap-1.5 rounded-sm font-semibold text-ops-moss underline-offset-4 hover:underline"
              >
                See the examples
              </button>
            </div>
          </div>

          <div className="ops-dark rounded-2xl bg-ops-ink p-7 text-ops-cream">
            <p className="text-[14px] font-semibold text-ops-cream/80">One flat price</p>
            <p className="mt-2 font-ops-heading text-[60px] font-extrabold leading-none tracking-[-0.02em] text-ops-lime">
              $497
            </p>
            <p className="mt-3 text-[16px] text-ops-cream/85">Paid upfront. Everything below included.</p>
            <div className="my-5 h-px bg-ops-cream/15" />
            <p className="text-[16px] leading-[1.55]">
              <span className="font-semibold text-ops-lime">Guarantee:</span> live before Black Friday or you get every
              dollar back.
            </p>
            <p className="mt-3 text-[14px] text-ops-cream/75">Book by Friday, Nov 20.</p>
          </div>
        </div>
      </section>

      {/* TABS */}
      <div id="holiday-tabs" className="scroll-mt-20 border-y border-ops-line/60 bg-ops-card/70">
        <div className={`${container} py-3`}>
          <div role="tablist" aria-label="Holiday campaign" className="inline-flex gap-1 rounded-full bg-ops-cream p-1">
            {tabBtn("offer", "The offer")}
            {tabBtn("examples", "Examples")}
          </div>
        </div>
      </div>

      {/* OFFER PANEL */}
      <div id="panel-offer" role="tabpanel" aria-labelledby="tab-offer" hidden={tab !== "offer"}>
        <section aria-labelledby="holiday-included-heading" className="py-16 md:py-24">
          <div className={container}>
            <Eyebrow>What you get</Eyebrow>
            <h2 id="holiday-included-heading" className={`mt-4 max-w-[40rem] ${h2Class}`}>
              Five pieces, written, designed and scheduled.
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map((i) => (
                <li key={i.n} className={card}>
                  <p className="font-ops-heading text-[26px] font-extrabold text-ops-moss">{i.n}</p>
                  <h3 className={`mt-2 ${h3Class}`}>{i.title}</h3>
                  <p className={`mt-2 ${body}`}>{i.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="holiday-how-heading" className="bg-ops-card/60 py-16 md:py-24">
          <div className={container}>
            <Eyebrow>How it works</Eyebrow>
            <h2 id="holiday-how-heading" className={`mt-4 max-w-[40rem] ${h2Class}`}>
              One call from you. I handle the rest.
            </h2>
            <ol className="mt-10 grid gap-10 md:grid-cols-3">
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

        <section aria-labelledby="holiday-who-heading" className="py-16 md:py-24">
          <div className={`${container} grid gap-12 md:grid-cols-[1fr_1.4fr]`}>
            <div>
              <Eyebrow>Built for</Eyebrow>
              <h2 id="holiday-who-heading" className={`mt-4 ${h2Class}`}>
                Local businesses with a customer list.
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {WHO.map((w) => (
                  <li
                    key={w}
                    className="rounded-full border border-ops-line/70 bg-ops-card px-4 py-2 text-[15px] font-semibold text-ops-ink"
                  >
                    {w}
                  </li>
                ))}
              </ul>
              <p className={`mt-5 ${body}`}>
                If your customers are in Square, Toast, Mindbody or something similar and nothing is scheduled for
                the holidays yet, this is for you.
              </p>
            </div>
            <div className="divide-y divide-ops-line/60 border-y border-ops-line/60">
              {FAQ.map((f) => (
                <details key={f.q} className="py-5">
                  <summary className="cursor-pointer list-none font-ops-heading text-[18px] font-bold text-ops-ink">
                    {f.q}
                  </summary>
                  <p className={`mt-3 ${body}`}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* EXAMPLES PANEL */}
      <div id="panel-examples" role="tabpanel" aria-labelledby="tab-examples" hidden={tab !== "examples"}>
        <section aria-labelledby="holiday-examples-heading" className="py-14 md:py-20">
          <div className={container}>
            <Eyebrow>Examples</Eyebrow>
            <h2 id="holiday-examples-heading" className={`mt-4 max-w-[40rem] ${h2Class}`}>
              Here is exactly what you get.
            </h2>
            <p className={`mt-4 max-w-[40rem] ${body}`}>
              Pick a business type. Every piece below is a real sample of the package, written for a made-up local
              business. Yours gets written around your offer and your voice.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5" role="group" aria-label="Business type">
              {HOLIDAY_EXAMPLES.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  aria-pressed={b.id === bizId}
                  onClick={() => setBizId(b.id)}
                  className={`min-h-11 rounded-full border px-5 text-[15px] font-semibold transition-colors ${
                    b.id === bizId
                      ? "border-ops-ink bg-ops-ink text-ops-cream"
                      : "border-ops-line bg-ops-card text-ops-ink hover:border-ops-ink"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
            <p className="mt-3 text-[14px] text-ops-text/80">
              Sample business: <span className="font-semibold text-ops-ink">{biz.name}</span>
            </p>

            {/* 01 EMAIL */}
            <div className="mt-14">
              <h3 className={h3Class}>
                <span className="text-ops-moss">01</span> Holiday email
              </h3>
              <div className="mt-4 max-w-[680px] overflow-hidden rounded-2xl border border-ops-line/60 bg-white">
                <div className="border-b border-ops-line/40 bg-ops-card px-5 py-4">
                  <p className="text-[14px] text-ops-text/75">From: {biz.name}</p>
                  <p className="mt-1 text-[17px] font-bold text-ops-ink">{biz.email.subject}</p>
                  <p className="mt-1 text-[14px] text-ops-text/75">{biz.email.preview}</p>
                </div>
                <div className="px-5 py-6">
                  <p className="whitespace-pre-line text-[16px] leading-[1.65] text-ops-text">{biz.email.body}</p>
                  <span className="mt-6 inline-block rounded-lg bg-ops-ink px-6 py-3 text-[16px] font-semibold text-ops-cream">
                    {biz.email.cta}
                  </span>
                </div>
              </div>
            </div>

            {/* 02 TEXTS */}
            <div className="mt-14">
              <h3 className={h3Class}>
                <span className="text-ops-moss">02</span> Three texts
              </h3>
              <ul className="mt-4 grid gap-4 md:grid-cols-3">
                {biz.sms.map((s) => (
                  <li key={s.when} className="rounded-2xl border border-ops-line/60 bg-white p-4">
                    <p className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-ops-moss">{s.when}</p>
                    <p className="mt-3 rounded-[18px] rounded-bl-[4px] bg-[#ECEFE6] px-4 py-3 text-[15px] leading-[1.45] text-ops-ink">
                      {s.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 03 GIFT CARD */}
            <div className="mt-14">
              <h3 className={h3Class}>
                <span className="text-ops-moss">03</span> Gift card promo
              </h3>
              <div className="mt-4 grid gap-5 md:grid-cols-[minmax(0,380px)_1fr]">
                <div className="flex aspect-[1.6] flex-col justify-between rounded-2xl bg-ops-ink p-6 text-ops-cream">
                  <p className="text-[14px] font-semibold text-ops-cream/80">{biz.name} · Gift card</p>
                  <p className="font-ops-heading text-[36px] font-extrabold leading-[1.05] text-ops-lime">
                    {biz.gift.headline}
                  </p>
                  <p className="text-[14px] text-ops-cream/80">{biz.gift.terms}</p>
                </div>
                <div className={card}>
                  <p className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-ops-moss">
                    Counter sign copy
                  </p>
                  <p className="mt-2 font-ops-heading text-[20px] font-bold leading-snug text-ops-ink">
                    {biz.gift.sign}
                  </p>
                  <div className="my-4 h-px bg-ops-line/50" />
                  <p className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-ops-moss">Why it works</p>
                  <p className={`mt-2 ${body}`}>{biz.gift.why}</p>
                </div>
              </div>
            </div>

            {/* 04 SOCIAL */}
            <div className="mt-14">
              <h3 className={h3Class}>
                <span className="text-ops-moss">04</span> Three social posts
              </h3>
              <ul className="mt-4 grid gap-4 md:grid-cols-3">
                {biz.social.map((p, i) => {
                  const fill =
                    i === 0
                      ? "bg-ops-ink text-ops-cream"
                      : i === 1
                        ? "bg-ops-lime text-ops-ink"
                        : "bg-ops-forest text-ops-cream";
                  const tagColor = i === 1 ? "text-ops-ink/80" : "text-ops-lime";
                  return (
                    <li key={p.tag} className="overflow-hidden rounded-2xl border border-ops-line/60 bg-white">
                      <div className={`flex aspect-square flex-col justify-between p-6 ${fill}`}>
                        <p className={`text-[12.5px] font-semibold uppercase tracking-[0.08em] ${tagColor}`}>
                          {p.tag}
                        </p>
                        <p className="font-ops-heading text-[32px] font-extrabold leading-[1.05] tracking-[-0.02em]">
                          {p.headline}
                        </p>
                        <p className="text-[14px] opacity-85">{biz.name}</p>
                      </div>
                      <p className="px-4 py-4 text-[15px] leading-[1.5] text-ops-text">{p.caption}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 05 GOOGLE BUSINESS */}
            <div className="mt-14">
              <h3 className={h3Class}>
                <span className="text-ops-moss">05</span> Google Business post
              </h3>
              <div className="mt-4 max-w-[560px] rounded-2xl border border-ops-line/60 bg-white p-6">
                <p className="text-[13px] text-ops-text/75">{biz.name} · Offer</p>
                <p className="mt-2 text-[20px] font-bold text-ops-ink">{biz.gbp.title}</p>
                <p className={`mt-2 ${body}`}>{biz.gbp.body}</p>
                <span className="mt-4 inline-block rounded-full border-[1.5px] border-ops-moss px-4 py-2 text-[15px] font-semibold text-ops-moss">
                  {biz.gbp.button}
                </span>
              </div>
            </div>

            <div className="mt-14">
              <button type="button" onClick={() => goTo("offer")} className={btnPrimary}>
                Back to the offer
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section aria-labelledby="holiday-cta-heading" className="ops-dark bg-ops-ink py-20 text-ops-cream md:py-24">
        <div className={`${container} text-center`}>
          <h2
            id="holiday-cta-heading"
            className="font-ops-heading text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] text-balance md:text-[42px]"
          >
            All five pieces. $497. Live in 72 hours.
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-ops-cream/85">
            Live before Black Friday or your money back. Text me your business name and I&apos;ll call you back today.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <CallButton variant="lime" />
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Holiday campaign")}`}
              className="font-semibold text-ops-cream underline-offset-4 hover:underline"
            >
              {EMAIL}
            </a>
          </div>
          <p className="mt-6 text-[14px] text-ops-cream/70">
            Prefer to book a time?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ops-lime underline-offset-4 hover:underline"
            >
              Pick a slot
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            · {PHONE_DISPLAY}
          </p>
        </div>
      </section>
    </>
  );
}
