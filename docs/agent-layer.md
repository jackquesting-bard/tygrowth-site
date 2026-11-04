# Agent layer

Lets AI agents read what TY Growth does, check fit-call times, book a call, or send an inquiry without scraping the page.

## Files

| Path | What it does |
|---|---|
| `lib/agent/config.ts` | One source of truth for the facts. Edit this and every surface updates. |
| `app/api/agent/info` | GET: services, fit, pricing approach, proof, actions |
| `app/api/agent/availability` | GET: open 20-min slots from Cal.com |
| `app/api/agent/book` | POST: books the fit call through Cal.com |
| `app/api/agent/inquiry` | POST: lead capture, emails Jack and/or hits a webhook |
| `app/api/agent/booking-link` | GET: booking page the human confirms (for GET-only agents) |
| `components/agent/AgentSection.tsx` | Visible "For AI assistants and agents" section in the home page HTML |
| `components/agent/AgentTools.tsx` | WebMCP tools for browser agents (ChatGPT desktop browser, Chrome origin trial) |
| `components/agent/AgentJsonLd.tsx` | schema.org JSON-LD with ReserveAction |
| `app/llms.txt`, `app/openapi.json`, `app/.well-known/api-catalog` | Discovery files |
| `next.config.mjs` `headers()` | Link headers on `/` pointing at the discovery files |

## Environment variables (Vercel)

| Name | Required | Notes |
|---|---|---|
| `CAL_USERNAME` | For live booking | Until set, booking endpoints hand agents the Google booking page instead |
| `CAL_EVENT_SLUG` | No | Defaults to `fit-call` |
| `RESEND_API_KEY` | No | Emails each agent inquiry to `INQUIRY_TO` (default jack@tygrowth.com). `INQUIRY_FROM` must be a verified Resend sender |
| `INQUIRY_WEBHOOK_URL` | No | Also posts inquiries to GHL / Make / Zapier |
| `NEXT_PUBLIC_SITE_URL` | No | Overrides the URL used in links. Production defaults to tygrowth.com; previews use their own branch URL |

## Cal.com setup

Google Calendar appointment schedules have no public booking API, so agents can't book them. Create a free Cal.com account, connect the same Google Calendar, and make a 20-minute event with slug `fit-call`. Keep booking questions to name, email and notes: a required custom question makes agent bookings fail with a 400.

## Testing a preview deployment

Vercel previews are protected by Vercel login by default, so outside agents get a login page. To test agents on a preview, turn off Vercel Authentication for previews (Project Settings, Deployment Protection) while testing, or test after merging.

## Checks

```bash
curl -s https://tygrowth.com/api/agent/info | head
curl -sI https://tygrowth.com/ | grep -i link
curl -s https://tygrowth.com/llms.txt | head
```

Then run isitagentready.com, and in Chrome 149+ enable `chrome://flags/#enable-webmcp-testing` with the Model Context Tool Inspector extension to confirm the four tools.

## Reading results

Every call logs one JSON line with `"event":"agent_call"`: endpoint, outcome, surface (`webmcp` or `direct`), user agent, and the Web Bot Auth `signature-agent` header when present. Filter Vercel logs on `agent_call`.

## Known limits

- The rate limiter is in-memory per serverless instance. Fine for a demo; client builds should use Upstash Redis or Vercel KV.
- WebMCP is experimental. The component checks both `document.modelContext` and the older `navigator.modelContext`.
- Chrome's WebMCP origin trial needs a token in the root layout `<head>`; ChatGPT's desktop browser doesn't.
