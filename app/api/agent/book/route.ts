import { createBooking, calConfigured, bookingPageUrl } from "@/lib/agent/cal";
import {
  json, preflight, logCall, rateLimited, clientKey, cleanText, validEmail, validTimeZone,
} from "@/lib/agent/guard";

export const dynamic = "force-dynamic";

export function OPTIONS() {
  return preflight();
}

// POST /api/agent/book  { start, name, email, timeZone, notes? }
// Books the 20-minute fit call. Cal.com emails the attendee a confirmation,
// which doubles as the abuse check: a fake email books a meeting nobody attends.
export async function POST(req: Request) {
  if (!calConfigured) {
    logCall(req, "book", "not_configured");
    return json(
      { error: "Direct booking isn't connected yet. Send the human this booking page instead.", bookingUrl: bookingPageUrl() },
      503,
    );
  }
  const ip = clientKey(req);
  if (rateLimited(`book:${ip}`, 3, 60 * 60_000)) {
    logCall(req, "book", "rate_limited");
    return json({ error: "Booking limit reached for this hour." }, 429);
  }

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return json({ error: "Send a JSON body." }, 400);

  const name = cleanText(body.name, 100);
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const timeZone = validTimeZone(body.timeZone) ? body.timeZone : "America/New_York";
  const notes = cleanText(body.notes, 1000);
  const start = typeof body.start === "string" ? body.start : "";

  const problems: string[] = [];
  if (!name) problems.push("name is required");
  if (!validEmail(email)) problems.push("email must be a real email address");
  if (!start || Number.isNaN(Date.parse(start))) problems.push("start must be an ISO time from /api/agent/availability");
  else if (Date.parse(start) < Date.now()) problems.push("start is in the past");
  if (problems.length) {
    logCall(req, "book", "invalid", { problems });
    return json({ error: "Invalid booking request.", problems }, 400);
  }

  if (rateLimited(`book-email:${email}`, 1, 24 * 60 * 60_000)) {
    logCall(req, "book", "duplicate");
    return json({ error: "This email already booked a call today. Check the inbox for the confirmation." }, 409);
  }

  try {
    const booking = await createBooking({ start, name, email, timeZone, notes });
    logCall(req, "book", "ok", { uid: booking.uid });
    return json({
      ok: true,
      message: `Booked. ${name} will get a confirmation email at ${email}.`,
      booking: { uid: booking.uid, start: booking.start ?? start, status: booking.status, meetingUrl: booking.meetingUrl },
    });
  } catch (err) {
    logCall(req, "book", "error", { message: String(err) });
    return json(
      { error: "That time could not be booked. It may have just been taken. Re-check /api/agent/availability." },
      409,
    );
  }
}
