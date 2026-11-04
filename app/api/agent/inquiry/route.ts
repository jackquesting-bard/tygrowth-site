import { business } from "@/lib/agent/config";
import {
  json, preflight, logCall, rateLimited, clientKey, cleanText, validEmail,
} from "@/lib/agent/guard";

export const dynamic = "force-dynamic";

export function OPTIONS() {
  return preflight();
}

// POST /api/agent/inquiry  { name, email, company?, message }
// Lead capture for when the human is not ready to book. Emails Jack via Resend
// (if RESEND_API_KEY is set) and/or forwards to a webhook (GHL, Make, Zapier).
export async function POST(req: Request) {
  if (rateLimited(`inq:${clientKey(req)}`, 5, 60 * 60_000)) {
    logCall(req, "inquiry", "rate_limited");
    return json({ error: "Too many inquiries this hour." }, 429);
  }
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return json({ error: "Send a JSON body." }, 400);

  const lead = {
    name: cleanText(body.name, 100),
    email: typeof body.email === "string" ? body.email.trim().toLowerCase() : "",
    company: cleanText(body.company, 150),
    message: cleanText(body.message, 2000),
    source: "ai-agent",
    surface: req.headers.get("x-agent-surface") ?? "direct",
    receivedAt: new Date().toISOString(),
  };

  const problems: string[] = [];
  if (!lead.name) problems.push("name is required");
  if (!validEmail(lead.email)) problems.push("email must be a real email address");
  if (lead.message.length < 10) problems.push("message should say what the person needs");
  if (problems.length) {
    logCall(req, "inquiry", "invalid", { problems });
    return json({ error: "Invalid inquiry.", problems }, 400);
  }

  const delivered: string[] = [];

  if (process.env.RESEND_API_KEY) {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.INQUIRY_FROM ?? "TY Growth Agent Desk <agents@tygrowth.com>",
        to: [process.env.INQUIRY_TO ?? business.email],
        reply_to: lead.email,
        subject: `[Agent inquiry] ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
        text: `Submitted by an AI agent on behalf of a visitor.\n\n${JSON.stringify(lead, null, 2)}`,
      }),
    }).catch(() => null);
    if (r?.ok) delivered.push("email");
  }

  if (process.env.INQUIRY_WEBHOOK_URL) {
    const r = await fetch(process.env.INQUIRY_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    }).catch(() => null);
    if (r?.ok) delivered.push("webhook");
  }

  logCall(req, "inquiry", delivered.length ? "ok" : "logged_only", { delivered, email: lead.email });
  return json({
    ok: true,
    message: `Thanks. Jack will reply to ${lead.email}, usually within one business day.`,
  });
}
