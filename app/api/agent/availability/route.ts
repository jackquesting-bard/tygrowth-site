import { getSlots, calConfigured, bookingPageUrl } from "@/lib/agent/cal";
import { cal } from "@/lib/agent/config";
import { json, preflight, logCall, rateLimited, clientKey, validTimeZone } from "@/lib/agent/guard";

export const dynamic = "force-dynamic";

export function OPTIONS() {
  return preflight();
}

// GET /api/agent/availability?timeZone=America/Chicago&days=7
export async function GET(req: Request) {
  if (rateLimited(`avail:${clientKey(req)}`, 30, 60_000)) {
    logCall(req, "availability", "rate_limited");
    return json({ error: "Too many requests. Wait a minute and retry." }, 429);
  }
  if (!calConfigured) {
    logCall(req, "availability", "not_configured");
    return json(
      { error: "Live availability isn't connected yet. Send the human this booking page instead.", bookingUrl: bookingPageUrl() },
      503,
    );
  }
  const url = new URL(req.url);
  const tzParam = url.searchParams.get("timeZone");
  const timeZone = validTimeZone(tzParam) ? tzParam : cal.hostTimeZone;
  const days = Math.min(Math.max(Number(url.searchParams.get("days")) || 7, 1), 21);

  const start = new Date();
  const end = new Date(start.getTime() + days * 86_400_000);

  try {
    const slots = await getSlots(start.toISOString(), end.toISOString(), timeZone);
    const total = Object.values(slots).reduce((n, l) => n + l.length, 0);
    logCall(req, "availability", "ok", { total });
    return json({
      meeting: "20-minute fit call with Jack McHalffey (TY Growth)",
      timeZone,
      slots,
      howToBook:
        "POST /api/agent/book with { start, name, email, timeZone }. Use a start value exactly as listed here.",
    });
  } catch (err) {
    logCall(req, "availability", "error", { message: String(err) });
    return json({ error: "Could not load availability right now.", fallback: "/api/agent/booking-link" }, 502);
  }
}
