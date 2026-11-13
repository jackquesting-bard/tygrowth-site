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
  NodeLines,
  OpsPage,
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
import { NodeDot } from "@/components/home/motifs";
import { textLink } from "@/components/home/shared";

/* =====================================================================
   Services: B2B Marketing Partner. The main offer.
   Add case studies here once client work has results to show.
   ===================================================================== */

export const metadata: Metadata = {
  title: { absolute: "B2B Marketing Partner | Outsourced Marketing for Firms Without a Marketing Person | TY Growth" },
  description:
    "A marketing partner for founder-led B2B firms: find your best-fit clients, keep you in front of them, and build the decks, one-pagers and referral relationships that close work.",
  icons: { icon: "/icons/sprout.svg" },
};

const SIGNS = [
  "Most new work comes from referrals, and you’ve never had a plan for when they slow down.",
  "You’ve hired freelancers before, and you ended up writing the plan and checking every draft yourself.",
  "Your deck, one-pagers and website say what you did three years ago, and leads have already read them.",
  "You keep explaining the same things one client at a time, when it could reach everyone at once.",
];

const INCLUDED = [
  {
    title: "Know who you’re selling to",
    items: [
      "Best-fit client profile, built from your past wins and sales calls",
      "The questions buyers ask before they sign, and where they get stuck",
      "Messaging that sounds like you and couldn’t be about a competitor",
    ],
  },
  {
    title: "Stay in front of them",
    items: [
      "LinkedIn for you and your company page",
      "Monthly email to clients and referral partners",
      "Blog posts and website copy when they help",
      "Posting handled, so it still goes out when you’re busy",
    ],
  },
  {
    title: "Sales materials that close",
    items: [
      "Company deck and service one-pagers",
      "Sales letters and follow-up emails",
      "Partner versions that follow a partner’s brand rules",
    ],
  },
  {
    title: "Referrals and reporting",
    items: [
      "Past clients and referral partners kept warm",
      "Something easy for partners to forward",
      "Starting numbers in week one, then a monthly review",
      "Email platform, CRM and tracking set up when you need them",
    ],
  },
];

const COMPARE: { row: string; hire: string; agency: string; partner: string }[] = [
  {
    row: "Who writes the plan",
    hire: "Usually you",
    agency: "They do, often a template",
    partner: "I do, from your wins and your buyers",
  },
  {
    row: "Who you manage",
    hire: "A new person, full time",
    agency: "An account manager and a queue",
    partner: "Nobody. About an hour a week with me",
  },
  {
    row: "Speaks up when something isn’t working",
    hire: "Depends on the person",
    agency: "Depends on the account manager",
    partner: "Yes, with the data behind it",
  },
  {
    row: "Commitment",
    hire: "Salary, benefits, ramp time",
    agency: "Usually a longer contract",
    partner: "Three months, then month to month",
  },
];

const STEPS: TimelineItem[] = [
  {
    label: "Weeks 1 to 2",
    title: "Setup",
    body: "An interview, a voice guide, a review of what you already have, and starting numbers for LinkedIn, your website and email.",
    node: "ink",
  },
  {
    label: "Every week or two",
    title: "Check-in",
    body: "I bring at least five ideas from your industry’s news. You bring what happened. We keep a shared topic list.",
    node: "ring",
  },
  {
    label: "In between",
    title: "I build and ship",
    body: "Drafts come to you for approval. Sales materials land on agreed dates. Posts go out even when you’re traveling.",
    node: "sage",
  },
  {
    label: "Every month",
    title: "Review",
    body: "What moved, where the time went by area, and what we focus on next.",
    node: "lime",
  },
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
    a: "Yes, for research and first drafts. Nothing goes out that isn’t built on your stories and input, and you approve everything. You can reject any draft that sounds generic, and it doesn’t count toward what you’re paying for.",
  },
  {
    q: "Do you guarantee leads?",
    a: "No. I’m responsible for the work getting done, done well, and on time. We track which posts, emails and materials turn into conversations, and adjust from there.",
  },
  {
    q: "We have partners with brand rules. Can you work with those?",
    a: "Yes. If a software vendor or partner has a deck format or rules for posts that tag them, I build to those.",
  },
  {
    q: "What if we want to stop?",
    a: "After the first three months it’s month to month, and only continues if we both confirm in writing.",
  },
  {
    q: "What do you need from me?",
    a: "About an hour a week, access to your LinkedIn and existing materials, and honest feedback on drafts.",
  },
];

export default function B2BMarketingPartnerPage() {
  return (
    <OpsPage>
      <ServiceHero
        id="partner-hero-heading"
        eyebrow="Services · B2B Marketing Partner"
        title={
          <>
            Your outsourced marketing lead, <span className="text-ops-moss">for firms without one.</span>
          </>
        }
        actions={
          <>
            <BookButton />
            <a href="#included" className={textLink}>
              See what’s included
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </>
        }
      >
        <p>
          A marketing partner owns your marketing without being on your payroll. I work out who you should be going
          after, keep you in front of them, build what your sales conversations need, and tell you honestly what’s
          working. You get your time back for clients, and there’s nobody new to manage.
        </p>
      </ServiceHero>

      <section aria-label="Brands I’ve worked with" className="scroll-mt-20">
        <div className={container}>
          <LogoStrip
            heading="Brands I’ve worked with"
            brands={[BRANDS.closir, BRANDS.lexipol, BRANDS.trileader, BRANDS.nomedic]}
          />
        </div>
      </section>

      {/* SIGNS */}
      <section aria-labelledby="signs-heading" className="py-16 md:py-24">
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Eyebrow>Sound familiar?</Eyebrow>
              <h2 id="signs-heading" className={`mt-4 ${h2Class}`}>
                You’re great at the work. Marketing it keeps landing at the bottom of the list.
              </h2>
            </div>
            <p className="text-ops-text lg:col-span-6 lg:pt-9">
              Most of the firms I talk to grew on reputation. The work is strong, the clients are happy, and marketing
              never had an owner. That tends to be fine until referrals slow down, a partner asks for something to send
              around, or you want to hire and nobody outside your circle knows who you are.
            </p>
          </div>
          <div className="mt-14">
            <NodeLines items={SIGNS} />
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="included" aria-labelledby="included-heading" className={sectionClass}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>What’s included</Eyebrow>
            <h2 id="included-heading" className={`mt-4 ${h2Class}`}>
              The pieces we pick from.
            </h2>
            <p className="mt-5 text-ops-text">
              Nobody needs all of it on day one. We start with whatever is closest to revenue for you, which is often the
              sales materials, and build from there.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            {INCLUDED.map((g) => (
              <article key={g.title} className={`${cardClass} p-7 md:p-9`}>
                <h3 className={h3Class}>{g.title}</h3>
                <div className={`mt-5 ${smallBody}`}>
                  <BulletList items={g.items} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section aria-labelledby="compare-heading" className={sectionClass}>
        <div className={container}>
          <Eyebrow>Why a partner</Eyebrow>
          <h2 id="compare-heading" className={`mt-4 max-w-3xl ${h2Class}`}>
            Somewhere between a new hire and an agency.
          </h2>
          <div className={`${cardClass} mt-12 overflow-x-auto`}>
            <table className="w-full min-w-[640px] text-left text-[15.5px] md:text-[16.5px]">
              <thead>
                <tr className="border-b border-ops-line/70">
                  <th scope="col" className="px-6 py-5 font-semibold text-ops-text/70">
                    <span className="sr-only">Question</span>
                  </th>
                  <th scope="col" className="px-6 py-5 font-ops-heading font-bold text-ops-ink">
                    Marketing hire
                  </th>
                  <th scope="col" className="px-6 py-5 font-ops-heading font-bold text-ops-ink">
                    Agency
                  </th>
                  <th scope="col" className="bg-ops-lime/35 px-6 py-5 font-ops-heading font-bold text-ops-ink">
                    Marketing partner
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r) => (
                  <tr key={r.row} className="border-b border-ops-line/50 last:border-b-0">
                    <th scope="row" className="px-6 py-5 font-semibold text-ops-ink">
                      {r.row}
                    </th>
                    <td className="px-6 py-5 text-ops-text">{r.hire}</td>
                    <td className="px-6 py-5 text-ops-text">{r.agency}</td>
                    <td className="bg-ops-lime/20 px-6 py-5 font-medium text-ops-ink">{r.partner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" aria-labelledby="how-heading" className={sectionClass}>
        <div className={container}>
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 id="how-heading" className={`mt-4 ${h2Class}`}>
              A short setup, then a steady rhythm.
            </h2>
          </div>
          <div className="mt-14 md:mt-16">
            <Timeline items={STEPS} colsClass="lg:grid-cols-4" />
          </div>
        </div>
      </section>

      <FitSection
        forText="Owners and partners of B2B service firms (consultancies, accounting and finance firms, software and tech partners, agencies), roughly 5 to 50 people, growing on referrals, with nobody focused on marketing. Especially if you’d rather have someone think alongside you than someone to manage."
        notForText="Anyone who wants a guaranteed number of leads next month, daily posting for the sake of volume, or the cheapest option available."
      />

      <FaqSection faqs={FAQS} />

      <FinalCta
        title="See what I’d do in your first month."
        body="Book a 20-minute call. Tell me how you win work today, and I’ll tell you where I’d start. If it’s not a fit, I’ll say so."
      />
    </OpsPage>
  );
}
