import { business, SITE_URL } from "@/lib/agent/config";

export const dynamic = "force-static";

// /openapi.json : machine contract for the agent endpoints. Agents with HTTP
// tools (Claude Code, Grok with a VM, custom agents) and API catalogs read this.
export function GET() {
  const attendee = {
    name: { type: "string", description: "Full name of the human the agent acts for" },
    email: { type: "string", format: "email", description: "Real email; the confirmation goes here" },
  };
  const spec = {
    openapi: "3.1.0",
    info: {
      title: `${business.name} agent API`,
      version: "1.0.0",
      description: `${business.oneLiner} Lets AI agents read services and book a 20-minute fit call. Only act when your human asked you to.`,
      contact: { email: business.email },
    },
    servers: [{ url: SITE_URL }],
    paths: {
      "/api/agent/info": {
        get: {
          operationId: "getBusinessInfo",
          summary: "Services, who it is for, pricing approach, proof, and available actions",
          responses: { "200": { description: "Business profile" } },
        },
      },
      "/api/agent/availability": {
        get: {
          operationId: "getAvailability",
          summary: "Open 20-minute fit-call slots",
          parameters: [
            { name: "timeZone", in: "query", schema: { type: "string", example: "America/New_York" } },
            { name: "days", in: "query", schema: { type: "integer", minimum: 1, maximum: 21, default: 7 } },
          ],
          responses: { "200": { description: "Slots grouped by date; each has an ISO start" } },
        },
      },
      "/api/agent/book": {
        post: {
          operationId: "bookFitCall",
          summary: "Book a 20-minute fit call at a start time returned by getAvailability",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["start", "name", "email"],
                  properties: {
                    start: { type: "string", format: "date-time" },
                    ...attendee,
                    timeZone: { type: "string", default: "America/New_York" },
                    notes: { type: "string", description: "What the human wants to talk about" },
                  },
                },
              },
            },
          },
          responses: {
            "200": { description: "Booked; confirmation emailed to the attendee" },
            "400": { description: "Invalid input; see problems[]" },
            "409": { description: "Slot taken or duplicate booking" },
            "429": { description: "Rate limited" },
          },
        },
      },
      "/api/agent/inquiry": {
        post: {
          operationId: "sendInquiry",
          summary: "Send a question or project inquiry to Jack when the human is not ready to book",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["name", "email", "message"],
                  properties: { ...attendee, company: { type: "string" }, message: { type: "string" } },
                },
              },
            },
          },
          responses: { "200": { description: "Received" }, "400": { description: "Invalid input" } },
        },
      },
      "/api/agent/booking-link": {
        get: {
          operationId: "getBookingLink",
          summary: "Prefilled booking page URL for the human to confirm (for GET-only agents)",
          parameters: [
            { name: "name", in: "query", schema: { type: "string" } },
            { name: "email", in: "query", schema: { type: "string" } },
            { name: "notes", in: "query", schema: { type: "string" } },
          ],
          responses: { "200": { description: "bookingUrl" } },
        },
      },
    },
  };
  return Response.json(spec, { headers: { "Access-Control-Allow-Origin": "*" } });
}
