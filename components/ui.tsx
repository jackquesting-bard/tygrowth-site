"use client";
import Link from "next/link";
import { useState } from "react";
import type { ReactNode, CSSProperties } from "react";

/* ---------- Wordmark (the brand mark; there is no logo image) ---------- */
export function Wordmark({
  onDark = false,
  underline = false,
  size = 22,
}: {
  onDark?: boolean;
  underline?: boolean;
  size?: number;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 5,
        fontWeight: 800,
        lineHeight: 1,
        fontSize: size,
        letterSpacing: "-0.01em",
      }}
    >
      <span>
        <span style={{ color: onDark ? "#fff" : "var(--heading-navy)" }}>TYGrowth</span>
        <span style={{ color: "var(--teal-primary)" }}>.com</span>
      </span>
      {underline && (
        <span style={{ height: 3, width: 120, borderRadius: 999, background: "var(--teal-primary)" }} />
      )}
    </span>
  );
}

/* ---------- Button ---------- */
type BtnProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
  style?: CSSProperties;
};
const BTN_PAD: Record<string, string> = { sm: "10px 20px", md: "14px 28px", lg: "16px 34px" };
const BTN_FS: Record<string, number> = { sm: 14, md: 16, lg: 18 };

export function Button({ children, href = "#", variant = "primary", size = "md", onDark = false, style }: BtnProps) {
  const [hover, setHover] = useState(false);
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 999,
    fontWeight: 600,
    lineHeight: 1,
    whiteSpace: "nowrap",
    textDecoration: "none",
    border: "1.5px solid",
    padding: BTN_PAD[size],
    fontSize: BTN_FS[size],
    cursor: "pointer",
    transition: "background .15s ease, border-color .15s ease, color .15s ease",
  };
  let variantStyle: CSSProperties;
  if (variant === "primary") {
    variantStyle = {
      background: hover ? "var(--teal-bright)" : "var(--teal-primary)",
      borderColor: hover ? "var(--teal-bright)" : "var(--teal-primary)",
      color: "#fff",
    };
  } else if (onDark) {
    variantStyle = {
      background: hover ? "rgba(255,255,255,.1)" : "transparent",
      borderColor: "#fff",
      color: "#fff",
    };
  } else {
    variantStyle = {
      background: hover ? "var(--teal-tint)" : "transparent",
      borderColor: hover ? "var(--teal-primary)" : "var(--heading-navy)",
      color: hover ? "var(--teal-primary)" : "var(--heading-navy)",
    };
  }
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variantStyle, ...style }}
    >
      {children}
    </Link>
  );
}

/* ---------- Tag ---------- */
export function Tag({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        borderRadius: 999,
        padding: "7px 14px",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1,
        color: onDark ? "#fff" : "var(--heading-navy)",
        background: onDark ? "transparent" : "var(--teal-tint)",
        border: onDark ? "1px solid rgba(63,179,172,.45)" : "none",
      }}
    >
      <span style={{ height: 7, width: 7, flexShrink: 0, borderRadius: 999, background: "var(--teal-bright)" }} />
      {children}
    </span>
  );
}

/* ---------- Card ---------- */
export function Card({
  children,
  elevated = false,
  style,
}: {
  children: ReactNode;
  elevated?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        borderRadius: 20,
        background: "#fff",
        padding: 28,
        boxShadow: elevated ? "var(--shadow-elevated)" : "var(--shadow-rest)",
        border: elevated ? "1px solid transparent" : "1px solid var(--hairline)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Eyebrow (section overline) ---------- */
export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <div
      style={{
        fontSize: 13,
        fontWeight: 600,
        textTransform: "uppercase",
        lineHeight: 1.4,
        letterSpacing: "0.08em",
        color: onDark ? "var(--teal-bright)" : "var(--teal-primary)",
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Faint teal diagonal lines (dark bands only) ---------- */
export function AccentLines() {
  return (
    <svg
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}
      preserveAspectRatio="none"
    >
      <line x1="62%" y1="0" x2="100%" y2="58%" stroke="#3FB3AC" strokeWidth="1.5" />
      <line x1="74%" y1="0" x2="100%" y2="40%" stroke="#3FB3AC" strokeWidth="1.5" />
      <line x1="86%" y1="0" x2="100%" y2="26%" stroke="#3FB3AC" strokeWidth="1.5" />
    </svg>
  );
}

/* ---------- ImageSlot ----------
   Drop-in image placeholder. Pass `src` once you add a file to /public
   (e.g. src="/testimonial-luz.png"); until then it shows a labeled box. */
export function ImageSlot({
  src,
  alt = "",
  placeholder = "Add image",
  radius = 12,
  height = 240,
  style,
}: {
  src?: string;
  alt?: string;
  placeholder?: string;
  radius?: number;
  height?: number | string;
  style?: CSSProperties;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height, objectFit: "cover", display: "block", borderRadius: radius, ...style }}
      />
    );
  }
  return (
    <div
      style={{
        width: "100%",
        height,
        borderRadius: radius,
        border: "2px dashed #C7D0DA",
        background: "var(--teal-tint)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        textAlign: "center",
        padding: 16,
        color: "var(--muted)",
        ...style,
      }}
    >
      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--heading-navy)" }}>{placeholder}</span>
      <span style={{ fontSize: 12 }}>Add the file to /public, then set its src</span>
    </div>
  );
}
