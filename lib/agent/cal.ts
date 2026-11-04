// Thin Cal.com API v2 client. Slot lookup and booking creation are public
// endpoints on Cal.com (no API key), which is exactly why Cal.com is used here:
// Google Calendar appointment schedules have no public booking API.
import { cal, calConfigured, FALLBACK_BOOKING_URL } from "./config";

export { calConfigured };

const API = "https://api.cal.com/v2";
const SLOTS_VERSION = process.env.CAL_SLOTS_API_VERSION ?? "2024-09-04";
const BOOKINGS_VERSION = process.env.CAL_BOOKINGS_API_VERSION ?? "2024-08-13";

export type Slot = { start: string };

export async function getSlots(startISO: string, endISO: string, timeZone: string): Promise<Record<string, Slot[]>> {
  const params = new URLSearchParams({
    username: cal.username,
    eventTypeSlug: cal.eventSlug,
    start: startISO,
    end: endISO,
    timeZone,
  });
  const res = await fetch(`${API}/slots?${params}`, {
    headers: { "cal-api-version": SLOTS_VERSION },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Cal.com slots ${res.status}: ${await res.text()}`);
  const body = (await res.json()) as { data?: unknown };

  // Cal.com has two response shapes depending on API version:
  //   2024-09-04: data = { "2026-11-05": [{ start }] }
  //   2024-08-13: data = { slots: { "2026-11-05": [{ time }] } }
  const raw = (body.data && typeof body.data === "object" && "slots" in (body.data as object)
    ? (body.data as { slots: unknown }).slots
    : body.data) as Record<string, Array<{ start?: string; time?: string }>> | undefined;

  const out: Record<string, Slot[]> = {};
  for (const [day, list] of Object.entries(raw ?? {})) {
    out[day] = (list ?? [])
      .map((s) => ({ start: s.start ?? s.time ?? "" }))
      .filter((s) => s.start);
  }
  return out;
}

export async function createBooking(input: {
  start: string;
  name: string;
  email: string;
  timeZone: string;
  notes?: string;
}) {
  const res = await fetch(`${API}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "cal-api-version": BOOKINGS_VERSION },
    body: JSON.stringify({
      eventTypeSlug: cal.eventSlug,
      username: cal.username,
      start: input.start,
      attendee: { name: input.name, email: input.email, timeZone: input.timeZone },
      ...(input.notes ? { bookingFieldsResponses: { notes: input.notes } } : {}),
      metadata: { source: "ai-agent" },
    }),
  });
  const body = (await res.json().catch(() => ({}))) as {
    data?: { uid?: string; start?: string; status?: string; meetingUrl?: string; location?: string };
    error?: { message?: string };
  };
  if (!res.ok) {
    throw new Error(body.error?.message ?? `Cal.com booking failed (${res.status})`);
  }
  return body.data ?? {};
}

export function bookingPageUrl(prefill: { name?: string; email?: string; notes?: string } = {}) {
  // Human-facing Cal.com page with fields prefilled. Safe to hand out from a GET
  // because opening it books nothing; the human still clicks confirm.
  if (!calConfigured) return FALLBACK_BOOKING_URL;
  const u = new URL(`https://cal.com/${cal.username}/${cal.eventSlug}`);
  if (prefill.name) u.searchParams.set("name", prefill.name);
  if (prefill.email) u.searchParams.set("email", prefill.email);
  if (prefill.notes) u.searchParams.set("notes", prefill.notes);
  return u.toString();
}
