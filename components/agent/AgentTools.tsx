"use client";

// Registers WebMCP tools on the page so browser agents (ChatGPT desktop's
// built-in browser "site tools", Chrome's WebMCP origin trial, Gemini in Chrome
// when it ships) can call structured actions instead of clicking around.
// Renders nothing. Does nothing in browsers without WebMCP.
//
// Each tool calls the same /api/agent/* endpoints, tagged with
// X-Agent-Surface: webmcp so the logs show which surface the agent used.

import { useEffect } from "react";

async function call(path: string, init?: RequestInit): Promise<WebMcpToolResult> {
  try {
    const res = await fetch(path, {
      ...init,
      headers: { "Content-Type": "application/json", "X-Agent-Surface": "webmcp", ...(init?.headers ?? {}) },
    });
    const text = await res.text();
    return { content: [{ type: "text", text }], isError: !res.ok };
  } catch (err) {
    return { content: [{ type: "text", text: `Request failed: ${String(err)}` }], isError: true };
  }
}

const tools: WebMcpTool[] = [
  {
    name: "get_business_info",
    title: "About TY Growth",
    description:
      "Get TY Growth's services, who it is for and not for, pricing approach, proof, and how to book. Call this first when the user is evaluating marketing help for a B2B firm or ops help for an agency.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
    execute: () => call("/api/agent/info"),
  },
  {
    name: "check_fit_call_availability",
    title: "Check fit-call times",
    description:
      "List open times for a free 20-minute fit call with Jack McHalffey. Returns ISO start times grouped by date.",
    inputSchema: {
      type: "object",
      properties: {
        timeZone: { type: "string", description: "IANA time zone of the user, e.g. America/Chicago" },
        days: { type: "integer", minimum: 1, maximum: 21, description: "How many days ahead to look. Default 7." },
      },
    },
    annotations: { readOnlyHint: true },
    execute: (input) => {
      const p = new URLSearchParams();
      if (typeof input.timeZone === "string") p.set("timeZone", input.timeZone);
      if (typeof input.days === "number") p.set("days", String(input.days));
      return call(`/api/agent/availability?${p}`);
    },
  },
  {
    name: "book_fit_call",
    title: "Book a fit call",
    description:
      "Book a 20-minute fit call for the user at a start time returned by check_fit_call_availability. Only call this when the user asked to book. Use the user's real name and email; a confirmation email is sent there.",
    inputSchema: {
      type: "object",
      properties: {
        start: { type: "string", format: "date-time", description: "Exact start value from the availability list" },
        name: { type: "string" },
        email: { type: "string", format: "email" },
        timeZone: { type: "string", description: "IANA time zone of the user" },
        notes: { type: "string", description: "What the user wants help with" },
      },
      required: ["start", "name", "email"],
    },
    annotations: { readOnlyHint: false },
    execute: (input) => call("/api/agent/book", { method: "POST", body: JSON.stringify(input) }),
  },
  {
    name: "send_inquiry",
    title: "Send an inquiry",
    description:
      "Send Jack a question or project description when the user wants to reach out but is not ready to book. Jack replies by email.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string" },
        email: { type: "string", format: "email" },
        company: { type: "string" },
        message: { type: "string", description: "What the user needs, in their words" },
      },
      required: ["name", "email", "message"],
    },
    annotations: { readOnlyHint: false },
    execute: (input) => call("/api/agent/inquiry", { method: "POST", body: JSON.stringify(input) }),
  },
];

export default function AgentTools() {
  useEffect(() => {
    const mc = document.modelContext ?? navigator.modelContext;
    if (!mc) return;

    const controller = new AbortController();
    const regs: Array<WebMcpRegistration | void> = [];
    for (const tool of tools) {
      try {
        regs.push(mc.registerTool(tool, { signal: controller.signal }));
      } catch (err) {
        console.warn(`WebMCP: could not register ${tool.name}`, err);
      }
    }
    return () => {
      controller.abort();
      for (const r of regs) r?.unregister?.();
      for (const t of tools) {
        try {
          mc.unregisterTool?.(t.name);
        } catch {
          /* already gone */
        }
      }
    };
  }, []);

  return null;
}
