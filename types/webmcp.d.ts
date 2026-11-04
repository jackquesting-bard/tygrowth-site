// Minimal types for WebMCP (W3C Web Machine Learning CG draft).
// The API moved from navigator.modelContext to document.modelContext in the
// July 2026 draft; Chrome's origin trial ships both, so we feature-detect.

type WebMcpContent = { type: "text"; text: string };

interface WebMcpToolResult {
  content: WebMcpContent[];
  isError?: boolean;
}

interface WebMcpTool {
  name: string;
  title?: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: { readOnlyHint?: boolean; destructiveHint?: boolean };
  execute: (input: Record<string, unknown>, client?: unknown) => Promise<WebMcpToolResult>;
}

interface WebMcpRegistration {
  unregister?: () => void;
}

interface ModelContext {
  registerTool(tool: WebMcpTool, options?: { signal?: AbortSignal }): WebMcpRegistration | void;
  unregisterTool?(name: string): void;
}

interface Document {
  modelContext?: ModelContext;
}

interface Navigator {
  modelContext?: ModelContext;
}
