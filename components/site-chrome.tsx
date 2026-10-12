"use client";
import { useState } from "react";
import Link from "next/link";
import { Wordmark, Button } from "./ui";
import { useMobile } from "./use-mobile";
import { BOOK, NAV, EMAIL, LINKEDIN_PROFILE } from "@/lib/site";

function NavLink({ label, href, style }: { label: string; href: string; style: React.CSSProperties }) {
  // External links use a plain <a>; internal routes use Next <Link>.
  if (href.startsWith("http")) {
    return (
      <a href={href} style={style}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} style={style}>
      {label}
    </Link>
  );
}

export function TopNav() {
  const m = useMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const linkStyle: React.CSSProperties = {
    fontSize: 15,
    fontWeight: 500,
    color: "var(--text-on-dark)",
    textDecoration: "none",
  };
  return (
    <nav
      style={{
        position: "relative",
        zIndex: 2,
        maxWidth: 1120,
        margin: "0 auto",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Wordmark onDark size={20} underline />
      </Link>
      {!m && (
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV.map((l) => (
            <NavLink key={l.label} label={l.label} href={l.href} style={linkStyle} />
          ))}
          <Button size="sm" href={BOOK} variant="secondary" onDark>
            Book a Call
          </Button>
        </div>
      )}
      {m && (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Button size="sm" href={BOOK} variant="secondary" onDark>
            Book a Call
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.3)",
              background: menuOpen ? "rgba(255,255,255,0.16)" : "transparent",
              color: "var(--text-on-dark)",
              fontSize: 22,
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            <span aria-hidden="true">{menuOpen ? "×" : "≡"}</span>
          </button>
          {menuOpen && (
            <div
              id="mobile-navigation"
              style={{
                position: "absolute",
                top: "calc(100% - 8px)",
                left: 24,
                right: 24,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: 10,
                borderRadius: 14,
                background: "var(--ink)",
                border: "1px solid rgba(255,255,255,0.16)",
                boxShadow: "0 18px 45px rgba(0,0,0,0.3)",
              }}
            >
              {NAV.map((link) => (
                <div key={link.label} onClick={() => setMenuOpen(false)} style={{ padding: "12px 10px" }}>
                  <NavLink label={link.label} href={link.href} style={{ ...linkStyle, display: "block", fontSize: 16 }} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  const m = useMobile();
  const linkStyle: React.CSSProperties = {
    display: "block",
    color: "var(--text-on-dark)",
    fontSize: 14,
    textDecoration: "none",
    marginBottom: 10,
  };
  return (
    <footer style={{ background: "var(--ink)" }}>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: m ? "48px 24px" : "64px 24px",
          display: "grid",
          gridTemplateColumns: m ? "1fr" : "1fr auto",
          gap: 40,
        }}
      >
        <div>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Wordmark onDark underline />
          </Link>
          <p style={{ color: "var(--text-on-dark)", fontSize: 14, marginTop: 16, maxWidth: 280, lineHeight: 1.6 }}>
            You&apos;ve got the content. We&apos;ve got the system.
          </p>
          <div style={{ marginTop: 20, color: "var(--text-on-dark)", fontSize: 14, lineHeight: 1.9 }}>
            <a href={`mailto:${EMAIL}`} style={{ color: "#fff", textDecoration: "none", display: "block" }}>
              {EMAIL}
            </a>
            <div>Celebration, FL</div>
            <a
              href={LINKEDIN_PROFILE}
              target="_blank"
              rel="noopener"
              style={{ color: "var(--teal-bright)", textDecoration: "none", display: "inline-block", marginTop: 4 }}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginBottom: 14 }}>Services</div>
          {NAV.map((l) => (
            <NavLink key={l.label} label={l.label} href={l.href} style={linkStyle} />
          ))}
        </div>
      </div>
    </footer>
  );
}
