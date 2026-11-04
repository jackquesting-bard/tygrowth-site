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
      id: "agent-ready-websites",
      name: "Agent-ready websites for property managers",
      description:
        "Adds an agent layer on top of a property manager's existing site so AI agents can read its services and listings and book a consultation. Starts with a free agent check, then a fixed-price build and a 30-day re-test.",
      includes: [
        "Free agent check recorded across ChatGPT, Gemini, Claude and Grok",
        "Services and listings readable by agents",
        "Consultation booking and inquiry actions",
        "WebMCP tools for browser agents",
        "30-day re-test",
      ],
      pricing: "Fixed price after the free agent check.",
      url: `${SITE_URL}/agent-ready`,
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
  username: process.env.CAL_USERNAME ?? "",
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
