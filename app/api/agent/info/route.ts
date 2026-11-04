import { business, agentPolicy, SITE_URL } from "@/lib/agent/config";
import { json, preflight, logCall } from "@/lib/agent/guard";

export const dynamic = "force-dynamic";

export function OPTIONS() {
  return preflight();
}

// GET /api/agent/info : everything an agent needs to decide if TY Growth fits.
export function GET(req: Request) {
  logCall(req, "info", "ok");
  return json({
    ...business,
    agentPolicy,
    actions: {
      checkAvailability: `GET ${SITE_URL}/api/agent/availability?timeZone=America/New_York&days=7`,
      bookFitCall: `POST ${SITE_URL}/api/agent/book`,
      sendInquiry: `POST ${SITE_URL}/api/agent/inquiry`,
      bookingLinkForHuman: `GET ${SITE_URL}/api/agent/booking-link?name=&email=`,
      openapi: `${SITE_URL}/openapi.json`,
    },
  });
}
