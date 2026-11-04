import { bookingPageUrl, calConfigured } from "@/lib/agent/cal";
import { json, preflight, logCall, cleanText, validEmail } from "@/lib/agent/guard";

export const dynamic = "force-dynamic";

export function OPTIONS() {
  return preflight();
}

// GET /api/agent/booking-link?name=&email=&notes=
// For agents whose web tools can only do GET (most chat assistants' fetch tools).
// Returns a prefilled booking page. Nothing is booked until the human confirms,
// so it is safe even if a crawler or link prefetcher hits it.
export function GET(req: Request) {
  const p = new URL(req.url).searchParams;
  const email = p.get("email") ?? "";
  const url = bookingPageUrl({
    name: cleanText(p.get("name"), 100) || undefined,
    email: validEmail(email) ? email : undefined,
    notes: cleanText(p.get("notes"), 500) || undefined,
  });
  logCall(req, "booking-link", "ok");
  return json({
    bookingUrl: url,
    instructions: calConfigured
      ? "Give this link to the human. Their name and email are prefilled; they pick a time and confirm."
      : "Give this link to the human. They pick a time and confirm.",
  });
}
