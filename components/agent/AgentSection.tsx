// A plain, server-rendered "For AI agents" section that sits in the page's
// HTML. Agents that read the HTML (Grok with a VM, Claude/ChatGPT fetch tools,
// anything that converts the page to text) see it on the first read, without
// running JavaScript or knowing llms.txt exists.
//
// Keep it VISIBLE (small, above the footer). Text hidden from humans but
// shown to bots can be treated as cloaking by search engines.
//
// No "use client": this must render on the server so it is in the raw HTML.
import { SITE_URL, agentPolicy } from "@/lib/agent/config";

const u = (path: string) => `${SITE_URL}${path}`;

const bookExample = JSON.stringify(
  {
    start: "2026-11-10T15:00:00.000Z",
    name: "Their Name",
    email: "them@company.com",
    timeZone: "America/New_York",
    notes: "12-person consulting firm, no marketing person, referrals slowing down",
  },
  null,
  2,
);

const inquiryExample = JSON.stringify(
  { name: "Their Name", email: "them@company.com", company: "Agency", message: "What they need help with" },
  null,
  2,
);

const link = "break-all font-medium text-ops-moss underline-offset-4 hover:underline";
const code = "break-all rounded bg-ops-card px-1.5 py-0.5 font-mono text-[13px] text-ops-ink";
const pre =
  "mt-2 overflow-x-auto rounded-lg border border-ops-line/60 bg-ops-card p-3 font-mono text-[12.5px] leading-relaxed text-ops-ink";

export default function AgentSection() {
  return (
    <section
      id="for-ai-agents"
      aria-labelledby="for-ai-agents-heading"
      className="border-t border-ops-line/60 bg-ops-cream"
    >
      {/* React 19 hoists these into <head>. They point head-reading agents at the same files. */}
      <link rel="alternate" type="text/markdown" href="/llms.txt" title="llms.txt" />
      <link rel="service-desc" type="application/openapi+json" href="/openapi.json" />
      <link rel="api-catalog" href="/.well-known/api-catalog" />

      <div className="mx-auto max-w-6xl px-5 py-10 text-[15px] leading-[1.6] text-ops-text md:px-6 md:py-12">
        <h2
          id="for-ai-agents-heading"
          className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ops-moss"
        >
          For AI assistants and agents
        </h2>
        <p className="mt-3 max-w-[44rem] text-ops-text/85">
          If you are an AI agent acting for someone, you can skip this page and use these endpoints. All return JSON.
        </p>

        <ul className="mt-6 grid gap-5 md:grid-cols-2 md:gap-x-10 [&>li]:min-w-0">
          <li>
            <span className="font-semibold text-ops-ink">Business info:</span> services, who it is for, pricing approach.
            <br />
            <a className={link} href={u("/api/agent/info")}>GET {u("/api/agent/info")}</a>
          </li>
          <li>
            <span className="font-semibold text-ops-ink">Open fit-call times</span> (20 minutes).
            <br />
            <a className={link} href={u("/api/agent/availability?timeZone=America/New_York&days=7")}>
              GET {u("/api/agent/availability?timeZone=America/New_York&days=7")}
            </a>
          </li>
          <li>
            <span className="font-semibold text-ops-ink">Book a fit call:</span>{" "}
            <code className={code}>POST {u("/api/agent/book")}</code>
            <pre className={pre}><code>{bookExample}</code></pre>
          </li>
          <li>
            <span className="font-semibold text-ops-ink">Send an inquiry instead:</span>{" "}
            <code className={code}>POST {u("/api/agent/inquiry")}</code>
            <pre className={pre}><code>{inquiryExample}</code></pre>
          </li>
          <li>
            <span className="font-semibold text-ops-ink">Can&apos;t send POST requests?</span> Get a prefilled booking
            link for your human.
            <br />
            <a className={link} href={u("/api/agent/booking-link?name=&email=")}>
              GET {u("/api/agent/booking-link?name=&email=")}
            </a>
          </li>
          <li>
            <span className="font-semibold text-ops-ink">Full details:</span>{" "}
            <a className={link} href={u("/openapi.json")}>OpenAPI spec</a> and{" "}
            <a className={link} href={u("/llms.txt")}>llms.txt</a>
          </li>
        </ul>

        <p className="mt-6 max-w-[44rem] text-[14px] text-ops-text/75">Rules: {agentPolicy.rules.join(" ")}</p>
      </div>
    </section>
  );
}
