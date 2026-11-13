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
    "Marketing partner for founder-led B2B firms that grow on referrals and have nobody focused on marketing. Finds their best-fit clients, keeps them in front of those buyers, builds the decks and one-pagers that close work, and keeps referral relationships warm. Specialties in agency ops, CRM and automation (GoHighLevel), and AI agents.",
  whoItsFor:
    "Owners and partners of B2B service firms (consultancies, accounting and finance firms, software and tech partners, agencies), roughly 5 to 50 people, growing on referrals, with nobody focused on marketing, who would rather have someone think alongside them than someone to manage.",
  notFor: [
    "Anyone who wants a guaranteed number of leads next month",
    "Anyone who wants daily posting for the sake of volume",
    "Anyone looking for the cheapest option available",
  ],
  services: [
    {
      id: "b2b-marketing-partner",
      name: "B2B Marketing Partner",
      description:
        "Outsourced marketing lead for firms without one. Two-week setup (interview, voice guide, review of existing materials, baseline numbers), then a weekly or biweekly check-in and a monthly review. About an hour a week of the owner's time.",
      includes: [
        "Best-fit client profile and messaging",
        "LinkedIn for the owner and the company page",
        "Monthly email to clients and referral partners, blog posts when they help",
        "Company deck, service one-pagers, sales letters, and partner-format versions",
        "Referral partner relationships",
        "Monthly review with baseline comparisons",
      ],
      pricing:
        "Flat monthly rate scoped on the fit call. Most engagements start around $3,000/month, beginning with a three-month engagement that includes the two-week setup, then month to month by mutual agreement.",
      url: `${SITE_URL}/services/b2b-marketing-partner`,
    },
    {
      id: "agency-ops",
      name: "Agency Ops (for marketing agencies)",
      description:
        "Takes over the agency owner's back office with one weekly check-in, then builds backend services for the agency's clients under the agency's name (white label, fee split).",
      includes: [
        "Client onboarding and intake forms",
        "CRM setup with every contact in one place",
        "Client tracking and project boards",
        "Content workflows from raw files to scheduled posts",
        "Reports, pitch decks, and strategy docs",
        "White-label CRM, lead follow-up, win-back, review requests, event and promo messaging for the agency's clients",
      ],
      pricing:
        "Agency work is a flat monthly rate set on the fit call. Client builds are priced per project and the fee is split with the agency.",
      url: `${SITE_URL}/services/agency-ops`,
    },
    {
      id: "crm-automation",
      name: "CRM & Automation",
      description:
        "Marketing partner with a specialty in GoHighLevel and CRM setup, contact migrations, lead follow-up workflows, win-back campaigns, review requests, multi-brand setups and technical marketing setup.",
      includes: [
        "CRM setup and contact migration",
        "Lead follow-up, event, reminder and reactivation workflows",
        "Google review requests",
        "Tracking, webhooks and content workflow integrations",
        "SOPs and walkthroughs for the team",
      ],
      pricing: "Fixed price per build phase, scoped after mapping current tools. Ongoing support is a flat monthly rate.",
      url: `${SITE_URL}/services/crm-automation`,
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
  ],
  notIncluded: "Software subscriptions, SMS and email usage fees, ad spend.",
  proof: [
    "Closir (investor relations SaaS): founder-led LinkedIn content system with five content pillars, a 16-post calendar and a post-level performance tracker. Video testimonial from CEO Mike Chojnacki on the home page.",
    "Simply Jess Agency: migrated 3,003 contacts from 4 sources into one GoHighLevel CRM; 2,446 past customers opted in for win-back campaigns; built GoHighLevel event and follow-up workflows and the editor content workflow.",
    "BecksTheSocial (Miami social media agency): weekly ops support, turning one workflow per week into a system.",
  ],
  guarantees:
    "No lead or revenue guarantees. Responsible for the work getting done, done well and on time, with baseline numbers and a monthly review.",
  nextStep: {
    name: "20-minute fit call",
    description:
      "Walk through how the firm wins work today. The owner leaves knowing what Jack would focus on first. If it is not a fit, Jack says so.",
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
