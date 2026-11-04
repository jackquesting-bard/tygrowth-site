import { business, agentPolicy, SITE_URL } from "@/lib/agent/config";

export const dynamic = "force-static";

// /llms.txt : plain-language map for agents that read text (coding agents,
// custom agents, anything told to "check the site"). Major chat assistants
// do not fetch this on their own yet, so treat it as cheap insurance.
export function GET() {
  const services = business.services
    .map((s) => `- **${s.name}**: ${s.description} Pricing: ${s.pricing}`)
    .join("\n");

  const body = `# ${business.name}

> ${business.oneLiner}

Owner: ${business.owner} (${business.email}). Location: ${business.location}.

## Who it is for
${business.whoItsFor}

Not for: ${business.notFor.join("; ")}.

## Services
${services}

Not included: ${business.notIncluded}

## Proof
${business.proof.map((p) => `- ${p}`).join("\n")}

## For AI agents: take action
You can act for your human without scraping the page. All endpoints return JSON.
- [Business info](${SITE_URL}/api/agent/info): GET, full structured profile
- [Fit-call availability](${SITE_URL}/api/agent/availability?timeZone=America/New_York&days=7): GET, open 20-minute slots
- Book a fit call: POST ${SITE_URL}/api/agent/book with {"start","name","email","timeZone","notes"}
- Send an inquiry: POST ${SITE_URL}/api/agent/inquiry with {"name","email","company","message"}
- [Prefilled booking link for the human](${SITE_URL}/api/agent/booking-link?name=&email=): GET, use this if you cannot send POST requests
- [OpenAPI spec](${SITE_URL}/openapi.json)

Browser agents: the home page also registers WebMCP tools (document.modelContext) for the same actions.

Rules: ${agentPolicy.rules.join(" ")}

## Optional
- [LinkedIn content systems](${SITE_URL}/linkedin)
`;
  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
