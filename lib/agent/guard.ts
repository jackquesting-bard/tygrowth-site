// Shared plumbing for the /api/agent/* endpoints: CORS, rate limiting,
// input checks, and a structured log line per call so you can measure
// which agents actually show up (the whole point of the test).

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-Agent-Surface",
  "Cache-Control": "no-store",
};

export function json(data: unknown, status = 200, extra: Record<string, string> = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...CORS, ...extra },
  });
}

export function preflight() {
  return new Response(null, { status: 204, headers: CORS });
}

// In-memory limiter. Good enough for a demo on one Vercel region, but each
// serverless instance has its own memory, so it is not a hard guarantee.
// For a client build, swap this for Upstash Redis or Vercel KV.
const hits = new Map<string, number[]>();

export function rateLimited(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > max;
}

export function clientKey(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for") ?? "";
  return fwd.split(",")[0].trim() || "unknown";
}

// One JSON line per agent call. Read them in Vercel > Logs, filter "agent_call".
export function logCall(req: Request, endpoint: string, outcome: string, detail: Record<string, unknown> = {}) {
  console.log(
    JSON.stringify({
      event: "agent_call",
      endpoint,
      outcome,
      at: new Date().toISOString(),
      // "webmcp" when called from the in-page tools, else whatever the caller sent.
      surface: req.headers.get("x-agent-surface") ?? "direct",
      userAgent: req.headers.get("user-agent") ?? "",
      // Web Bot Auth headers: present when a signed agent (e.g. ChatGPT agent) calls.
      signatureAgent: req.headers.get("signature-agent") ?? undefined,
      ...detail,
    }),
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function cleanText(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  // Strip markup and control characters; agents sometimes pass HTML through.
  return v.replace(/<[^>]*>/g, "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

export function validEmail(v: unknown): v is string {
  return typeof v === "string" && v.length <= 254 && EMAIL_RE.test(v);
}

export function validTimeZone(tz: unknown): tz is string {
  if (typeof tz !== "string") return false;
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: tz });
    return true;
  } catch {
    return false;
  }
}
