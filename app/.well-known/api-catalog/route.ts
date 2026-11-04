import { SITE_URL } from "@/lib/agent/config";

export const dynamic = "force-static";

// /.well-known/api-catalog (RFC 9727): a linkset pointing agents and scanners
// at the API description and docs. Same pattern Cal.com uses on its pages.
export function GET() {
  const linkset = {
    linkset: [
      {
        anchor: `${SITE_URL}/api/agent`,
        "service-desc": [{ href: `${SITE_URL}/openapi.json`, type: "application/openapi+json" }],
        "service-doc": [{ href: `${SITE_URL}/llms.txt`, type: "text/markdown" }],
      },
    ],
  };
  return new Response(JSON.stringify(linkset, null, 2), {
    headers: {
      "Content-Type": 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
      "Access-Control-Allow-Origin": "*",
    },
  });
}
