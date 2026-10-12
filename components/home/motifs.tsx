import type { SVGProps } from "react";

/* Decorative motifs for the home page: sprout, wordmark, node dots and circuit lines.
   Everything here is aria-hidden except the wordmark text. */

type SvgProps = SVGProps<SVGSVGElement>;
export type NodeKind = "ink" | "ring" | "sage" | "lime" | "cream";

function SvgNode({
  x,
  y,
  kind,
  glowId,
  r = 4,
}: {
  x: number;
  y: number;
  kind: NodeKind;
  glowId?: string;
  r?: number;
}) {
  if (kind === "lime") {
    return (
      <g>
        <circle cx={x} cy={y} r={r * 4} fill={`url(#${glowId})`} className="ops-pulse" />
        <circle cx={x} cy={y} r={r + 0.5} className="fill-ops-lime" />
      </g>
    );
  }
  if (kind === "ring") {
    return (
      <circle cx={x} cy={y} r={r + 0.5} className="fill-ops-cream stroke-ops-ink" strokeWidth={1.5} />
    );
  }
  if (kind === "cream") {
    return (
      <circle cx={x} cy={y} r={r + 0.5} className="fill-none stroke-ops-cream" strokeWidth={1.5} />
    );
  }
  return <circle cx={x} cy={y} r={r} className={kind === "ink" ? "fill-ops-ink" : "fill-ops-node"} />;
}

function Glow({ id }: { id: string }) {
  return (
    <radialGradient id={id}>
      <stop offset="0%" stopColor="#C7F17C" stopOpacity="0.95" />
      <stop offset="45%" stopColor="#C7F17C" stopOpacity="0.35" />
      <stop offset="100%" stopColor="#C7F17C" stopOpacity="0" />
    </radialGradient>
  );
}

/* ---------- Sprout ---------- */

export function SproutMark(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 21.5V12.6" className="stroke-ops-moss" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M12 13.3C11.6 9.3 8.6 6.8 4.1 7.1 4.2 11.3 7.3 13.7 12 13.3Z"
        className="fill-ops-sprout"
      />
      <path
        d="M12 11.5C12.2 6.6 15.5 3.4 20.4 3.6 20.5 8.5 17.2 11.7 12 11.5Z"
        className="fill-ops-sprout"
      />
    </svg>
  );
}

/** Sprout growing out of a line node. The line enters from the left. */
export function SproutNode(props: SvgProps) {
  return (
    <svg viewBox="0 0 48 56" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path d="M0 47.5H19" className="stroke-ops-line" strokeWidth="1.5" />
      <circle cx="24" cy="47.5" r="11" className="fill-ops-lime/30" />
      <path d="M24 42V27" className="stroke-ops-moss" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M24 31C23.4 24.4 18.4 20.3 11 20.7 11.2 27.6 16.3 31.6 24 31Z"
        className="fill-ops-sprout"
      />
      <path
        d="M24 28.2C24.3 20.2 29.7 14.9 37.8 15.2 38 23.2 32.6 28.5 24 28.2Z"
        className="fill-ops-sprout"
      />
      <path
        d="M25.2 26.6C27.6 23.6 30.2 21.2 33.6 19.2"
        className="stroke-ops-cream/70"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="24" cy="47.5" r="5" className="fill-ops-cream stroke-ops-ink" strokeWidth="1.75" />
      <circle cx="24" cy="47.5" r="1.75" className="fill-ops-ink" />
    </svg>
  );
}

/* ---------- Wordmark ---------- */

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-1.5 ${className}`}>
      <SproutMark className="mb-[3px] size-5 shrink-0 sm:size-[22px]" />
      <span className="relative pb-[7px] font-ops-heading text-[18px] font-extrabold leading-none tracking-[-0.02em] sm:text-[20px]">
        <span className="text-ops-ink">TYGrowth</span>
        <span className="text-ops-moss">.com</span>
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[3px] w-[74%] rounded-full bg-ops-moss"
        />
      </span>
    </span>
  );
}

/* ---------- HTML node dot (for lists and steps) ---------- */

export function NodeDot({ kind = "ring", className = "" }: { kind?: NodeKind; className?: string }) {
  const styles: Record<NodeKind, string> = {
    ink: "bg-ops-ink",
    ring: "border-[1.5px] border-ops-ink bg-ops-cream",
    sage: "bg-ops-node",
    cream: "border-[1.5px] border-ops-cream",
    lime: "border-[1.5px] border-ops-moss bg-ops-lime shadow-[0_0_12px_3px_rgba(199,241,124,0.9)]",
  };
  return (
    <span
      aria-hidden="true"
      className={`block size-3 shrink-0 rounded-full ${styles[kind]} ${className}`}
    />
  );
}

/* ---------- Hero circuit lines ---------- */

export function HeroCircuit(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 1440 720"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <defs>
        <Glow id="ops-hero-glow" />
      </defs>
      <g className="stroke-ops-line" strokeWidth="1.25">
        <path d="M-20 395C70 395 115 425 175 425S285 405 340 405" />
        <path d="M-20 600C80 600 140 632 220 632S360 592 480 592S700 642 860 642S1100 612 1240 596S1400 520 1460 512" />
        <path
          d="M-20 678C140 678 240 662 360 668S620 700 800 694S1100 664 1240 672S1400 700 1460 700"
          strokeDasharray="5 7"
        />
        <path d="M1250 330C1290 330 1310 312 1350 312S1430 322 1460 322" />
      </g>
      <SvgNode x={175} y={425} kind="lime" glowId="ops-hero-glow" />
      <SvgNode x={340} y={405} kind="cream" />
      <SvgNode x={220} y={632} kind="lime" glowId="ops-hero-glow" />
      <SvgNode x={480} y={592} kind="ring" />
      <SvgNode x={860} y={642} kind="ink" />
      <SvgNode x={1240} y={596} kind="sage" />
      <SvgNode x={360} y={668} kind="sage" r={3.5} />
      <SvgNode x={800} y={694} kind="ring" r={3.5} />
      <SvgNode x={1240} y={672} kind="ink" r={3} />
      <SvgNode x={1350} y={312} kind="ring" r={3.5} />
    </svg>
  );
}

export function HeroCircuitMobile(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 800 110"
      preserveAspectRatio="xMinYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <defs>
        <Glow id="ops-hero-glow-sm" />
      </defs>
      <g className="stroke-ops-line" strokeWidth="1.25">
        <path d="M-10 40C40 40 70 64 120 64S220 40 270 40S360 58 420 58S540 36 610 36S730 60 810 56" />
        <path
          d="M-10 92C60 92 110 80 180 84S320 100 400 92S560 78 640 84S760 98 810 96"
          strokeDasharray="5 7"
        />
      </g>
      <SvgNode x={120} y={64} kind="lime" glowId="ops-hero-glow-sm" r={3.5} />
      <SvgNode x={270} y={40} kind="ink" r={3.5} />
      <SvgNode x={180} y={84} kind="ring" r={3} />
      <SvgNode x={420} y={58} kind="sage" r={3.5} />
      <SvgNode x={610} y={36} kind="ring" r={3.5} />
      <SvgNode x={640} y={84} kind="lime" glowId="ops-hero-glow-sm" r={3.5} />
    </svg>
  );
}

/* ---------- Dark CTA circuit lines ---------- */

export function CtaCircuit(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 1440 480"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <defs>
        <Glow id="ops-cta-glow" />
      </defs>
      <g
        className="stroke-ops-forest-mid"
        strokeWidth="1.25"
        strokeOpacity="0.7"
      >
        <path d="M-20 120C120 120 200 160 320 160S520 110 660 110" />
        <path d="M780 370C900 370 980 330 1100 330S1320 380 1460 380" />
        <path d="M-20 400C160 400 260 350 420 350" strokeDasharray="5 7" />
        <path d="M1060 90C1160 90 1220 130 1320 130S1420 110 1460 110" strokeDasharray="5 7" />
      </g>
      <SvgNode x={320} y={160} kind="lime" glowId="ops-cta-glow" />
      <SvgNode x={660} y={110} kind="sage" r={3.5} />
      <SvgNode x={1100} y={330} kind="lime" glowId="ops-cta-glow" />
      <SvgNode x={420} y={350} kind="sage" r={3.5} />
      <SvgNode x={1320} y={130} kind="lime" glowId="ops-cta-glow" r={3.5} />
    </svg>
  );
}

/* ---------- Community card top line ---------- */

export function CommunityCircuit({ glowId = "ops-community-glow", ...props }: SvgProps & { glowId?: string }) {
  return (
    <svg viewBox="0 0 220 28" fill="none" aria-hidden="true" focusable="false" {...props}>
      <defs>
        <Glow id={glowId} />
      </defs>
      <path d="M0 14H80" className="stroke-ops-line" strokeWidth="1.25" />
      <path d="M80 14H140" className="stroke-ops-line" strokeWidth="1.25" strokeDasharray="4 5" />
      <path d="M140 14H220" className="stroke-ops-line" strokeWidth="1.25" />
      <SvgNode x={52} y={14} kind="sage" r={3.5} />
      <SvgNode x={110} y={14} kind="lime" glowId={glowId} r={3.5} />
      <SvgNode x={168} y={14} kind="sage" r={3.5} />
    </svg>
  );
}

/* ---------- Service card icons (line and node) ---------- */

export function IconOpsSystems(props: SvgProps) {
  return (
    <svg viewBox="0 0 88 40" fill="none" aria-hidden="true" focusable="false" {...props}>
      <g className="stroke-ops-ink" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 20H28C38 20 40 9 50 9" />
        <path d="M28 20C38 20 40 31 50 31" />
        <path d="M50 9C60 9 62 20 72 20" />
        <path d="M50 31C60 31 62 20 72 20" />
      </g>
      <SvgNode x={8} y={20} kind="ring" />
      <SvgNode x={50} y={9} kind="sage" r={3.5} />
      <SvgNode x={50} y={31} kind="sage" r={3.5} />
      <SvgNode x={77} y={20} kind="ink" r={5} />
    </svg>
  );
}

export function IconAutomation(props: SvgProps) {
  return (
    <svg viewBox="0 0 88 40" fill="none" aria-hidden="true" focusable="false" {...props}>
      <g className="stroke-ops-ink" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 28H76" />
        <path d="M80 23C80 8 8 8 8 23" strokeDasharray="3 4" className="stroke-ops-node" />
      </g>
      <path d="M5 19.5L8 24L11 19.5" className="stroke-ops-node" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <SvgNode x={8} y={28} kind="ring" />
      <SvgNode x={44} y={28} kind="sage" r={3.5} />
      <SvgNode x={80} y={28} kind="ink" r={4.5} />
    </svg>
  );
}

export function IconAgents(props: SvgProps) {
  return (
    <svg viewBox="0 0 88 40" fill="none" aria-hidden="true" focusable="false" {...props}>
      <defs>
        <Glow id="ops-agent-glow" />
      </defs>
      <g className="stroke-ops-ink" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 10C22 10 26 20 38 20" />
        <path d="M9 30C22 30 26 20 38 20" />
        <path d="M50 20H74" />
      </g>
      <SvgNode x={6} y={10} kind="sage" r={3.5} />
      <SvgNode x={6} y={30} kind="sage" r={3.5} />
      <circle cx="44" cy="20" r="16" fill="url(#ops-agent-glow)" className="ops-pulse" />
      <circle cx="44" cy="20" r="6" className="fill-ops-lime stroke-ops-ink" strokeWidth="1.5" />
      <circle cx="44" cy="20" r="2" className="fill-ops-ink" />
      <SvgNode x={79} y={20} kind="ring" r={4.5} />
    </svg>
  );
}
