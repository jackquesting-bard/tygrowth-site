// Single source of truth for everything an AI agent can learn about TY Growth.
// Every agent surface (REST endpoints, WebMCP tools, llms.txt, OpenAPI, JSON-LD)
// reads from this file, so facts never drift between surfaces.
// Only put things here you would say to a stranger on a call. No invented numbers.

// Production always says tygrowth.com. Preview deployments point at their own
// branch URL, so agents testing a preview call the preview's endpoints.
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_ENV === "production") return "https://tygrowth.com";
  const host = process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL;
  return host ? `https://${host}` : "https://tygrowth.com";
}

export const SITE_URL = resolveSiteUrl();

export const business = {
  name: "TY Growth",
  url: SITE_URL,
  owner: "Jack McHalffey",
  email: "jack@tygrowth.com",
  location: "Celebration, FL (works remote)",
  oneLiner:
    "Back-office and ops partner for small social media, content, and creative agencies. Takes over onboarding, CRM, client tracking, reports, and decks, then turns repeat work into systems, automations, and AI agents.",
  whoItsFor:
    "Owners of small social media, content, or creative agencies who are still the glue between their CRM, inbox, project board, and calendar, especially if they have been thinking about hiring an ops person or a VA.",
  notFor: [
    "Anyone looking for ad management or lead generation alone",
    "Anyone who won't share logins and data",
    "Anyone who wants a guaranteed revenue number",
  ],
  services: [
    {
      id: "agency-back-office",
      name: "Agency back office, handled",
      description:
        "Takes over the ops work eating the owner's week, with one weekly check-in call.",
      includes: [
        "Client onboarding and intake forms",
        "CRM setup with every contact in one place",
        "Client tracking and project boards",
        "Content workflows from raw files to scheduled posts",
        "Reports, pitch decks, and strategy docs",
      ],
      pricing: "Flat monthly rate, set on the fit call once the scope is clear.",
    },
    {
      id: "white-label-client-builds",
      name: "Backend services agencies can sell (white label)",
      description:
        "Builds systems for the agency's clients under the agency's name. The agency owns the relationship and the sale; TY Growth builds and runs it and the fee is split.",
      includes: [
        "CRM and lead follow-up",
        "Win-back campaigns to past customers",
        "Google review requests",
        "Event and promo messaging by text and email",
      ],
      pricing: "Priced per project; the agency and TY Growth split what the client pays.",
    },
    {
      id: "personal-agent",
      name: "Personal AI agent for business and marketing ops",
      description:
        "Sets up an AI agent on the client's own tools (email, calendar, CRM and more) to handle business and marketing ops. Drafts go to the owner for approval until they choose to let a task run on its own. Details by email.",
      includes: [
        "Inbox triage and reply drafts",
        "Lead follow-up logged to the CRM",
        "Meeting notes turned into tasks and follow-up emails",
        "Client onboarding",
        "Overdue invoice reminders",
        "Content repurposing, weekly marketing report, review requests, win-back campaigns, competitor watch",
      ],
      pricing: "Depends on the tasks and tools. Email jack@tygrowth.com for details.",
      url: `${SITE_URL}/agent-ready`,
    },
    {
      id: "holiday-campaign",
      name: "Black Friday campaign for local businesses",
      description:
        "Holiday campaign for local businesses with a customer list, built and launched in 72 hours: one email, three texts to opted-in customers, a gift card promo, three social posts and a Google Business post.",
      includes: [
        "Holiday email",
        "Three texts (teaser, launch, last call)",
        "Gift card promo and counter sign copy",
        "Three social posts",
        "Google Business post",
      ],
      pricing: "$497 flat, paid upfront. Live before Black Friday (Nov 27, 2026) or full refund. Book by Nov 20.",
      url: `${SITE_URL}/holiday`,
    },
    {
      id: "linkedin-content-systems",
      name: "LinkedIn content systems (for founders and execs)",
      description:
        "Secondary offer for B2B founders and executives who want LinkedIn content built from their own expertise.",
      includes: ["Content audit", "Weekly capture call", "Posts for personal profile and company page"],
      pricing: "Monthly retainer, scoped on a call.",
      url: `${SITE_URL}/linkedin`,
    },
  ],
  notIncluded: "Software subscriptions, SMS and email usage fees, ad spend.",
  proof: [
    "Simply Jess Agency: merged contacts from 4 sources into 1 CRM; 2,446 past customers opted in for a win-back campaign; built the editor content workflow.",
    "BecksTheSocial (Miami social media agency): weekly ops support, turning one workflow per week into a system.",
  ],
  guarantees:
    "No revenue guarantees. Responsible for systems getting built and running and the hours they give back.",
  nextStep: {
    name: "20-minute fit call",
    description:
      "Walk through the agency owner's week. They leave knowing the first thing TY Growth would take over. If it is not a fit, Jack says so.",
    durationMinutes: 20,
  },
} as const;

export const cal = {
  // Cal.com username and event slug for the 20-minute fit call.
  // The username is public (it's in every booking link), so it lives here as the
  // default. Set CAL_USERNAME in Vercel only to override it.
  username: process.env.CAL_USERNAME || "jack-mchalffey-rdyvgu",
  eventSlug: process.env.CAL_EVENT_SLUG ?? "fit-call",
  hostTimeZone: "America/New_York",
};

// Until CAL_USERNAME is set, agents get the existing Google booking page
// instead of a broken link, and the book/availability endpoints say so.
export const calConfigured = cal.username.trim() !== "";
export const FALLBACK_BOOKING_URL = "https://calendar.app.google/55tuHweEBcuJS3B49";

export const agentPolicy = {
  // What agents are allowed to do. Read freely; write only these two low-risk actions.
  allowed: ["read business info", "check fit-call availability", "book a fit call", "send an inquiry"],
  rules: [
    "Only book or send an inquiry when the human you act for asked you to.",
    "Use the human's real name and email. The confirmation email goes to that address.",
    "Do not submit more than one booking per person.",
  ],
};
