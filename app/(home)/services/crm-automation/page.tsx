import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import {
  BookButton,
  BulletList,
  Eyebrow,
  FaqSection,
  FinalCta,
  FitSection,
  MoreLink,
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
import { CommunityCircuit, IconAgents, IconAutomation, IconOpsSystems } from "@/components/home/motifs";
import { textLink } from "@/components/home/shared";

/* =====================================================================
   Services: CRM & Automation. The marketing partner offer with a
   specialty in GoHighLevel, workflows, automations and technical setup.
   Proof is the Simply Jess build. Only list work that's actually done.
   ===================================================================== */

export const metadata: Metadata = {
  title: { absolute: "CRM & Automation | GoHighLevel Builds and Marketing Workflows | TY Growth" },
  description:
    "A marketing partner who also builds the systems: GoHighLevel and CRM setup, contact migrations, lead follow-up workflows, win-back campaigns and the technical setup behind your marketing.",
  icons: { icon: "/icons/sprout.svg" },
};

const PROBLEMS = [
  "Contacts live in your phone, your inbox, a spreadsheet and an old app.",
  "Follow-up depends on someone remembering to do it.",
  "You pay for GoHighLevel or HubSpot and use a fraction of it.",
  "Each brand or location does marketing its own way, so nobody can see the whole picture.",
];

const BUILDS = [
  {
    title: "CRM setup and migration",
    body: "Every contact in one place, cleaned up, tagged and opted in properly.",
    items: [
      "Imports from Shopify, phones, event apps, email and spreadsheets",
      "Deduping, tags and custom fields that match how you sell",
      "Pipelines so you can see where every deal stands",
    ],
    Icon: IconOpsSystems,
  },
  {
    title: "Workflows and automations",
    body: "The follow-up that happens whether or not anyone remembers.",
    items: [
      "Lead follow-up from forms, DMs and bookings",
      "Event invites, reminders, RSVPs and check-ins",
      "Win-back and reactivation campaigns to past customers",
      "Google review requests at the right moment",
    ],
    Icon: IconAutomation,
  },
  {
    title: "Technical setup and guidance",
    body: "The plumbing behind the marketing, plus a straight opinion on what you need.",
    items: [
      "Tracking, webhooks and list growth from your site and socials",
      "Content workflows connecting tools like Notion, Dropbox, Make and Publer",
      "Setups for several brands or locations under one roof",
      "SOPs and walkthrough videos so your team can run it",
    ],
    Icon: IconAgents,
  },
];

const STEPS: TimelineItem[] = [
  {
    label: "Step 01",
    title: "20-minute fit call",
    body: "Tell me what you’re using and where leads slip. If I’m not the right person for the build, I’ll tell you.",
    node: "ink",
  },
  {
    label: "Step 02",
    title: "Map what you have",
    body: "I go through your current tools, contacts and follow-up, and rank what to fix first by what it’s costing you.",
    node: "ring",
  },
  {
    label: "Step 03",
    title: "Build in phases",
    body: "Fixed scope for each phase, with SOPs and walkthroughs so the system doesn’t live in my head.",
    node: "sage",
  },
  {
    label: "Step 04",
    title: "Keep it running",
    body: "Optional monthly partnership: I tune the workflows, add the next build and advise on the marketing around it.",
    node: "lime",
  },
];

const FAQS = [
  {
    q: "Do I need GoHighLevel already?",
    a: "No. I can set it up from scratch, clean up an account you already have, or work in what you use today.",
  },
  {
    q: "Do you work in HubSpot or other CRMs?",
    a: "I’ve worked in GoHighLevel and HubSpot. If you use something else, I’ll tell you up front how familiar I am with it before we scope anything.",
  },
  {
    q: "How much GoHighLevel have you built?",
    a: "I’ve built a GoHighLevel CRM for an agency and its clients, including a 3,003-contact migration, opt-in tracking and event and follow-up workflows. If your build needs something I haven’t done before, I’ll say so on the call.",
  },
  {
    q: "Can you handle several brands or locations?",
    a: "Yes. We set up each brand so its leads and follow-up stay separate, with shared templates where it saves time, and one place to see how each is doing.",
  },
  {
    q: "How is it priced?",
    a: "Builds are a fixed price per phase, scoped once we’ve mapped what you have. Ongoing support and advising is a flat monthly rate.",
  },
  {
    q: "Who pays for the software?",
    a: "You do, directly, so you own the account. Not included: software subscriptions, SMS and email usage fees, and ad spend.",
  },
];

export default function CrmAutomationPage() {
  return (
    <OpsPage>
      <ServiceHero
        id="crm-hero-heading"
        eyebrow="Services · CRM & Automation"
        title={
          <>
            A marketing partner who <span className="text-ops-moss">builds the systems too.</span>
          </>
        }
        actions={
          <>
            <BookButton />
            <a href="#builds" className={textLink}>
              See what I build
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </>
        }
      >
        <p>
          For businesses that need someone to think through the marketing and build what’s underneath it. GoHighLevel
          and CRM setup, workflows, automations and the technical pieces that keep leads from slipping, plus honest
          advice on how it should all fit together.
        </p>
      </ServiceHero>

      {/* PROBLEM */}
      <section aria-labelledby="problem-heading" className="border-t border-ops-line/60 py-16 md:py-24">
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <Eyebrow>The problem</Eyebrow>
              <h2 id="problem-heading" className={`mt-4 ${h2Class}`}>
                The leads are there. The system to follow up on them isn’t.
              </h2>
            </div>
            <p className="text-ops-text lg:col-span-6 lg:pt-9">
              Most businesses already have more contacts than they use. They’re just spread across tools nobody
              connected, so past customers go cold and new inquiries wait on whoever has time. A good CRM setup fixes
              that once, and keeps working after.
            </p>
          </div>
          <div className="mt-14">
            <NodeLines items={PROBLEMS} />
          </div>
        </div>
      </section>

      {/* BUILDS */}
      <section id="builds" aria-labelledby="builds-heading" className={sectionClass}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>What I build</Eyebrow>
            <h2 id="builds-heading" className={`mt-4 ${h2Class}`}>
              CRM, workflows, and the setup behind them.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {BUILDS.map(({ title, body, items, Icon }) => (
              <article key={title} className={`${cardClass} flex flex-col p-7 md:p-8`}>
                <Icon className="h-10 w-[88px]" />
                <h3 className={`mt-7 ${h3Class}`}>{title}</h3>
                <p className={`mt-3 ${smallBody}`}>{body}</p>
                <div className={`mt-6 border-t border-ops-line/60 pt-6 ${smallBody}`}>
                  <BulletList items={items} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="results" aria-labelledby="results-heading" className={sectionClass}>
        <div className={container}>
          <Eyebrow>A build I’ve done</Eyebrow>
          <h2 id="results-heading" className={`mt-4 ${h2Class}`}>
            One CRM out of four contact lists.
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
                      "Migrated contacts from Shopify, her phone, her event app and email into GoHighLevel",
                      "3,003 contacts imported, 2,446 opted in to email and ready for win-back campaigns",
                      "Reactivation, reminder, RSVP and check-in email templates",
                      "GoHighLevel workflows for event invites and follow-up",
                      "Content workflow connecting Notion, Dropbox, Make and Publer, with approvals",
                      "SOPs and setup guides so her team can run it",
                    ]}
                  />
                </div>
              </div>
              <div className="ops-dark relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-ops-forest to-ops-ink px-7 pb-8 pt-16 md:px-10 md:pb-10">
                <CommunityCircuit glowId="ops-crm-glow" className="absolute left-0 top-6 h-7 w-[220px] opacity-60" />
                <p className="font-ops-heading text-[52px] font-extrabold leading-none tracking-[-0.02em] text-ops-cream md:text-[60px]">
                  2,446
                </p>
                <p className="mt-3 text-ops-cream/85">past customers opted in and ready to win back</p>
              </div>
            </div>
          </article>
          <p className="mt-6 text-[15px] text-ops-text">
            Run an agency and want to sell builds like this to your clients?{" "}
            <MoreLink href="/services/agency-ops">See Agency Ops</MoreLink>
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" aria-labelledby="how-heading" className={sectionClass}>
        <div className={container}>
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 id="how-heading" className={`mt-4 ${h2Class}`}>
              Map it, build it, keep it running.
            </h2>
          </div>
          <div className="mt-14 md:mt-16">
            <Timeline items={STEPS} colsClass="lg:grid-cols-4" />
          </div>
        </div>
      </section>

      <FitSection
        forText="Owners running one or several brands who have contacts and leads spread across tools, are paying for a CRM they barely use, or want one person who can advise on the marketing and build the system behind it."
        notForText="Anyone who wants ad management alone, anyone who won’t share logins and data, or anyone who needs a developer to build custom software."
      />

      <FaqSection faqs={FAQS} />

      <FinalCta
        title="Show me where your leads are slipping."
        body="Book a 20-minute call. Walk me through your tools and follow-up, and I’ll tell you what I’d fix first. If it’s not a fit, I’ll say so."
      />
    </OpsPage>
  );
}
