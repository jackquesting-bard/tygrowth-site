"use client";
import { useState } from "react";
import Link from "next/link";
import { Wordmark } from "@/components/ui";
import { useMobile } from "@/components/use-mobile";
import { BOOK, EMAIL } from "@/lib/site";

const LI = "#0A66C2";
const T = "rgba(0,0,0,.9)"; // primary text
const T2 = "rgba(0,0,0,.6)"; // secondary text

/* ---- line icons (single weight, evoke LinkedIn chrome, decorative) ---- */
const Ic: Record<string, React.ReactNode> = {
  home: <path d="M3 10.5 12 3l9 7.5M5 9.5V20h5v-6h4v6h5V9.5" />,
  network: (
    <g>
      <circle cx="8" cy="8" r="3" />
      <path d="M2.5 20a5.5 5.5 0 0 1 11 0" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M15 20a5 5 0 0 1 7-4.5" />
    </g>
  ),
  jobs: (
    <g>
      <rect x="3" y="7.5" width="18" height="12" rx="1.5" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 12h18" />
    </g>
  ),
  msg: (
    <g>
      <rect x="3" y="4.5" width="18" height="14" rx="2" />
      <path d="M3.5 6 12 12l8.5-6" />
    </g>
  ),
  bell: <path d="M18 8a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7M10 20a2 2 0 0 0 4 0" />,
  search: (
    <g>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </g>
  ),
  like: <path d="M7 10v10H4V10zM7 10l4-7a2 2 0 0 1 3 2l-1 5h5a2 2 0 0 1 2 2.4l-1.5 6A2 2 0 0 1 19.5 20H7" />,
  comment: <path d="M21 11.5a8.5 8.5 0 0 1-12 7.7L4 20l1-4.5A8.5 8.5 0 1 1 21 11.5z" />,
  repost: <path d="M4 9V7a3 3 0 0 1 3-3h9m2 2 2 2-2 2M20 15v2a3 3 0 0 1-3 3H8m-2-2-2-2 2-2" />,
  send: <path d="M22 3 11 14M22 3l-7 19-4-8-8-4z" />,
  globe: (
    <g>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </g>
  ),
  dots: (
    <g>
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </g>
  ),
};

function Icon({
  name,
  size = 22,
  color = T2,
  stroke = 1.7,
  fill,
}: {
  name: string;
  size?: number;
  color?: string;
  stroke?: number;
  fill?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      stroke={fill ? "none" : color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {Ic[name]}
    </svg>
  );
}

/* filled reaction pips (like / celebrate) */
function ReactPip({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <span
      style={{
        width: 20,
        height: 20,
        borderRadius: 999,
        background: bg,
        border: "1.5px solid #fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -6,
      }}
    >
      {children}
    </span>
  );
}

/* ---- top chrome ---- */
function TopBar() {
  const m = useMobile(980);
  const navIcons: [string, string][] = [
    ["home", "Home"],
    ["network", "My Network"],
    ["jobs", "Jobs"],
    ["msg", "Messaging"],
    ["bell", "Notifications"],
  ];
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "#fff",
        borderBottom: "1px solid #E8E6E1",
        boxShadow: "0 0 0 1px rgba(0,0,0,.02)",
      }}
    >
      <div
        style={{
          maxWidth: 1128,
          margin: "0 auto",
          padding: "0 16px",
          height: 54,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <Link
            href="/"
            aria-label="Back to TYGrowth.com home"
            style={{
              width: 34,
              height: 34,
              borderRadius: 6,
              background: LI,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: "-.02em",
              textDecoration: "none",
            }}
          >
            ty
          </Link>
          {!m && (
            <div style={{ position: "relative", width: 260 }}>
              <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }}>
                <Icon name="search" size={18} color="rgba(0,0,0,.55)" />
              </span>
              <input className="li-search" placeholder="Search" readOnly aria-hidden="true" tabIndex={-1} />
            </div>
          )}
        </div>
        <div style={{ flex: 1 }} />
        {!m &&
          navIcons.map(([n, l]) =>
            n === "home" ? (
              <Link
                key={n}
                href="/"
                className="li-icon-btn"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Icon name={n} size={22} />
                {l}
              </Link>
            ) : (
              <div key={n} className="li-icon-btn" aria-hidden="true">
                <Icon name={n} size={22} />
                {l}
              </div>
            )
          )}
        {!m && <div style={{ width: 1, height: 36, background: "#E8E6E1", margin: "0 6px" }} />}
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
          <Wordmark size={18} />
          <a
            href={BOOK}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: LI,
              color: "#fff",
              borderRadius: 999,
              padding: "8px 18px",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---- post shell ---- */
function PostHeader({ name, sub, meta, promoted }: { name: string; sub: string; meta?: string; promoted?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px 8px" }}>
      <span
        style={{
          width: 48,
          height: 48,
          borderRadius: 999,
          background: LI,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        TY
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          <span style={{ fontWeight: 600, fontSize: 14, color: T }}>{name}</span>
          <span style={{ color: T2, fontSize: 13 }}>· 1st</span>
        </div>
        <div style={{ fontSize: 12, color: T2, lineHeight: 1.35 }}>{sub}</div>
        <div style={{ fontSize: 12, color: T2, display: "flex", alignItems: "center", gap: 5 }}>
          {promoted ? "Promoted" : meta} · <Icon name="globe" size={13} color={T2} stroke={1.6} />
        </div>
      </div>
      <Icon name="dots" size={20} color={T2} />
    </div>
  );
}

function ReactionStats({ count, comments, liked }: { count: number; comments: number; liked: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 16px 6px", fontSize: 13, color: T2 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ReactPip bg={LI}><Icon name="like" size={11} color="#fff" fill="#fff" /></ReactPip>
        <ReactPip bg="#2E8B8B"><span style={{ fontSize: 10 }}>👏</span></ReactPip>
        <span style={{ marginLeft: 8 }}>{liked ? `You and ${count} others` : `${count} people liked this`}</span>
      </div>
      <div>{comments} comments</div>
    </div>
  );
}

function Post({ header, children, baseLikes, comments, postTitle, footer = true, style }: {
  header: React.ReactNode;
  children: React.ReactNode;
  baseLikes: number;
  comments: number;
  postTitle: string;
  footer?: boolean;
  style?: React.CSSProperties;
}) {
  const [liked, setLiked] = useState(false);
  const [panel, setPanel] = useState<"comment" | "repost" | null>(null);
  const [copied, setCopied] = useState(false);
  const suggestedPost = `I just found this awesome profile on LinkedIn that I had to share. Jack at TYGrowth helps founders turn their ideas into a consistent LinkedIn presence: https://www.linkedin.com/in/jack-tygrowth/`;

  function submitComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const visitorEmail = String(data.get("email") || "");
    const comment = String(data.get("comment") || "");
    const subject = encodeURIComponent(`Website comment on: ${postTitle}`);
    const body = encodeURIComponent(`Post: ${postTitle}\nVisitor email: ${visitorEmail}\n\nComment:\n${comment}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  async function copyAndOpenLinkedIn() {
    await navigator.clipboard.writeText(suggestedPost);
    setCopied(true);
    window.open("https://www.linkedin.com/feed/?shareActive=true", "_blank", "noopener,noreferrer");
  }

  async function sendPost() {
    const shareData = { title: postTitle, text: `Take a look at this from TYGrowth: ${postTitle}`, url: window.location.href };
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      setCopied(true);
    }
  }

  const actionStyle = (active = false): React.CSSProperties => ({
    flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
    padding: "10px 4px", border: 0, background: "transparent", color: active ? LI : T2,
    font: "inherit", fontSize: 14, fontWeight: 600, cursor: "pointer",
  });

  return (
    <div style={{ background: "#fff", border: "1px solid #E8E6E1", borderRadius: 10, ...style }}>
      {header}
      <div style={{ padding: "0 16px 12px" }}>{children}</div>
      <ReactionStats count={baseLikes} comments={comments} liked={liked} />
      {footer && (
        <>
          <div style={{ display: "flex", borderTop: "1px solid #E8E6E1", padding: "4px 8px" }}>
            <button type="button" style={actionStyle(liked)} onClick={() => setLiked((value) => !value)} aria-pressed={liked}>
              <Icon name="like" size={20} color={liked ? LI : T2} />Like
            </button>
            <button type="button" style={actionStyle(panel === "comment")} onClick={() => setPanel(panel === "comment" ? null : "comment")} aria-expanded={panel === "comment"}>
              <Icon name="comment" size={20} color={panel === "comment" ? LI : T2} />Comment
            </button>
            <button type="button" style={actionStyle(panel === "repost")} onClick={() => setPanel(panel === "repost" ? null : "repost")} aria-expanded={panel === "repost"}>
              <Icon name="repost" size={20} color={panel === "repost" ? LI : T2} />Repost
            </button>
            <button type="button" style={actionStyle()} onClick={sendPost}>
              <Icon name="send" size={20} color={T2} />Send
            </button>
          </div>
          {panel === "comment" && (
            <form onSubmit={submitComment} style={{ borderTop: "1px solid #E8E6E1", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <strong style={{ color: T, fontSize: 14 }}>We read every comment!</strong>
              <label style={{ fontSize: 13, color: T2 }}>Your email
                <input required name="email" type="email" placeholder="you@example.com" style={{ width: "100%", marginTop: 5, padding: "10px 12px", border: "1px solid #A8A8A8", borderRadius: 6, font: "inherit" }} />
              </label>
              <label style={{ fontSize: 13, color: T2 }}>Your comment
                <textarea required name="comment" rows={3} placeholder="Join the conversation..." style={{ width: "100%", marginTop: 5, padding: "10px 12px", border: "1px solid #A8A8A8", borderRadius: 6, font: "inherit", resize: "vertical" }} />
              </label>
              <button type="submit" style={{ alignSelf: "flex-start", background: LI, color: "#fff", border: 0, borderRadius: 999, padding: "9px 18px", fontWeight: 600, cursor: "pointer" }}>Continue in email</button>
            </form>
          )}
          {panel === "repost" && (
            <div style={{ borderTop: "1px solid #E8E6E1", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <strong style={{ color: T, fontSize: 14 }}>Suggested LinkedIn post</strong>
              <p style={{ margin: 0, padding: 12, background: "#F4F2EE", borderRadius: 6, color: T, fontSize: 14, lineHeight: 1.55 }}>{suggestedPost}</p>
              <button type="button" onClick={copyAndOpenLinkedIn} style={{ alignSelf: "flex-start", background: LI, color: "#fff", border: 0, borderRadius: 999, padding: "9px 18px", fontWeight: 600, cursor: "pointer" }}>
                {copied ? "Copied — open LinkedIn" : "Copy post and open LinkedIn"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function BlueBtn({ children, style, big }: { children: React.ReactNode; style?: React.CSSProperties; big?: boolean }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={BOOK}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: h ? "#004182" : LI,
        color: "#fff",
        border: "none",
        borderRadius: 999,
        padding: big ? "13px 30px" : "9px 22px",
        fontWeight: 600,
        fontSize: big ? 16 : 15,
        fontFamily: "inherit",
        textDecoration: "none",
        cursor: "pointer",
        transition: "background .15s ease",
        ...style,
      }}
    >
      {children}
    </a>
  );
}

const PROBLEMS = [
  "You post for two weeks straight, then a deal blows up and you go quiet for two months. The algorithm forgets you faster than your audience does.",
  "You sit down to write and realize you have said this a hundred times on calls, but writing it down takes 45 minutes you did not have.",
  "You post something good and it gets eleven views, so you conclude LinkedIn does not work for your industry.",
  "Your competitor who knows half as much as you posts three times a week and gets called the expert.",
];
const OUTCOMES = [
  {
    title: "People show up to calls already sold.",
    body: "Prospects who have read your thinking for six weeks do not need the pitch. They need the price.",
  },
  {
    title: "Your network starts sending you things.",
    body: "Referrals, intros, and inbound come from people who were reminded you exist. Consistency is what does the reminding.",
  },
  {
    title: "The company gets more valuable than the org chart says it is.",
    body: "A founder with a real audience is an asset on the balance sheet. Investors, partners, and acquirers all price it, even when they do not say so.",
  },
  {
    title: "Recruiting gets easier and cheaper.",
    body: "Good people join companies whose founders they have been reading. That is a hiring line item you stop paying.",
  },
];
const STEPS = [
  {
    n: "1",
    title: "I go get what you already have.",
    body: "Recorded calls, interviews, webinars, testimonials, docs. I build the library before I write anything, so we are never starting from a blank page.",
  },
  {
    n: "2",
    title: "We talk once a week.",
    body: "You tell me what happened and what you thought about it. That is the whole ask. No writing, no editing, no homework.",
  },
  {
    n: "3",
    title: "You approve. I ship.",
    body: "Writing, formatting, scheduling, publishing, and reporting on both your personal profile and your company page.",
  },
];
const INCLUDED = [
  "One weekly check-in call, 30 minutes",
  "Full audit of your existing content assets",
  "Ghostwritten posts in your voice, personal profile and company page",
  "Client testimonials and wins reformatted into ongoing content",
  "Formatting, scheduling, and publishing handled entirely",
  "Monthly performance report in plain English",
];

/* ---- left profile card ---- */
function ProfileCard() {
  return (
    <div style={{ background: "#fff", border: "1px solid #E8E6E1", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ height: 60, background: "var(--gradient-brand)" }} />
      <div style={{ padding: "0 16px 16px", marginTop: -32 }}>
        <span
          style={{
            width: 64,
            height: 64,
            borderRadius: 999,
            background: LI,
            border: "3px solid #fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 800,
            fontSize: 24,
          }}
        >
          TY
        </span>
        <div style={{ marginTop: 10 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontWeight: 700, fontSize: 17, color: T }}>TYGrowth.com</span>
          </div>
          <div style={{ fontSize: 13, color: T, marginTop: 3, lineHeight: 1.4 }}>
            LinkedIn content systems for founders
          </div>
          <div style={{ fontSize: 12, color: T2, marginTop: 4 }}>Celebration, FL</div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #E8E6E1", padding: "12px 16px" }}>
        {([
          ["Profile viewers", "1,204"],
          ["Post impressions", "38,900"],
        ] as [string, string][]).map(([l, v]) => (
          <div key={l} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6 }}>
            <span style={{ color: T2 }}>{l}</span>
            <span style={{ color: LI, fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid #E8E6E1", padding: "12px 16px", background: "var(--teal-tint)" }}>
        <div style={{ fontSize: 13, color: "var(--heading-navy)", lineHeight: 1.5 }}>
          <strong>A TYGrowth.com system.</strong> Built to run without you in the room.
        </div>
      </div>
    </div>
  );
}

/* ---- right sidebar ---- */
function Sidebar() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ background: "#fff", border: "1px solid #E8E6E1", borderRadius: 10, padding: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 15, color: T, marginBottom: 12 }}>What the system includes</div>
        {INCLUDED.map((i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
              fontSize: 13,
              color: T2,
              marginBottom: 10,
              lineHeight: 1.45,
            }}
          >
            <span style={{ color: "var(--teal-primary)", fontWeight: 700, marginTop: -1 }}>✓</span>
            {i}
          </div>
        ))}
      </div>
      <div
        style={{
          background: "#fff",
          border: "1px solid #E8E6E1",
          borderRadius: 10,
          padding: "18px 16px",
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 15, color: "var(--heading-navy)", marginBottom: 6 }}>
          Ready to hand it off?
        </div>
        <div style={{ fontSize: 13, color: T2, marginBottom: 14, lineHeight: 1.5 }}>One call to see if it fits.</div>
        <BlueBtn style={{ width: "100%" }}>Book a Call</BlueBtn>
        <a
          href={`mailto:${EMAIL}`}
          style={{ display: "block", marginTop: 10, fontSize: 13, color: "var(--teal-primary)", textDecoration: "none" }}
        >
          {EMAIL}
        </a>
      </div>
    </div>
  );
}

export default function LinkedInPage() {
  const m = useMobile(980);
  return (
    <div style={{ background: "#F4F2EE", minHeight: "100vh", color: "rgba(0,0,0,.9)" }}>
      <TopBar />
      <div
        style={{
          maxWidth: 1128,
          margin: "0 auto",
          padding: m ? "12px 12px 40px" : "24px 16px 56px",
          display: "grid",
          gridTemplateColumns: m ? "1fr" : "260px minmax(0,1fr) 300px",
          gap: m ? 12 : 24,
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div style={{ position: m ? "static" : "sticky", top: 70 }}>{!m && <ProfileCard />}</div>

        {/* CENTER FEED */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
          {m && <ProfileCard />}

          {/* HERO POST */}
          <Post
            header={<PostHeader name="TYGrowth.com" sub="LinkedIn content systems for founders" promoted />}
            baseLikes={312}
            comments={47}
            postTitle="Show up as the expert without writing every post"
          >
            <h1
              style={{
                fontSize: m ? 25 : 31,
                fontWeight: 800,
                color: "var(--heading-navy)",
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                margin: "4px 0 12px",
              }}
            >
              Show up as the expert. Without writing every <span style={{ color: "var(--teal-primary)" }}>post.</span>
            </h1>
            <p style={{ fontSize: m ? 15 : 16, lineHeight: 1.65, color: T, margin: "0 0 14px" }}>
              Your prospects look you up before they reply. If your page has been quiet for three months, that is the first
              thing they learn about you. I fix that, permanently, without adding anything to your calendar.
            </p>
            <BlueBtn>Book a Call</BlueBtn>
          </Post>

          {/* CAPACITY PROBLEM POST */}
          <Post
            header={<PostHeader name="TYGrowth.com" sub="LinkedIn content systems for founders" meta="1d" />}
            baseLikes={224}
            comments={38}
            postTitle="If you have tried posting yourself, you already know how this goes"
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: LI,
                margin: "2px 0 8px",
              }}
            >
              The real problem
            </div>
            <h2 style={{ fontSize: m ? 18 : 20, fontWeight: 700, color: "var(--heading-navy)", margin: "0 0 14px", lineHeight: 1.3 }}>
              If you&apos;ve tried posting yourself, you already know how this goes.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, minmax(0, 1fr))", gap: 10 }}>
              {PROBLEMS.map((problem) => (
                <div key={problem} style={{ padding: "12px 14px", background: "#F4F2EE", borderRadius: 8, fontSize: 14, lineHeight: 1.55, color: T }}>
                  {problem}
                </div>
              ))}
            </div>
            <p style={{ color: "var(--teal-primary)", fontSize: 15, fontWeight: 700, lineHeight: 1.55, margin: "14px 0 0" }}>
              None of this is a writing problem. It&apos;s a capacity problem.
            </p>
          </Post>

          {/* FEATURED CLIENT TESTIMONIAL */}
          <Post
            header={<PostHeader name="TYGrowth.com" sub="Client story · Closir" meta="1w" />}
            baseLikes={289}
            comments={63}
            postTitle="How Closir built a consistent professional presence"
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: LI,
                margin: "2px 0 8px",
              }}
            >
              Client story
            </div>
            <h2 style={{ fontSize: m ? 18 : 20, fontWeight: 700, color: "var(--heading-navy)", margin: "0 0 10px", lineHeight: 1.3 }}>
              Mike, founder of Closir, helps public companies build stronger relationships with investors.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: T, margin: "0 0 14px" }}>
              His expertise was already there. The content system turned his interviews and ideas into a consistent,
              professional presence that made it easier to show his authority and build trust online.
            </p>
            <div style={{ borderRadius: 8, overflow: "hidden", background: "var(--heading-navy)" }}>
              <video
                controls
                preload="metadata"
                playsInline
                aria-label="Mike, founder of Closir, sharing his experience with TYGrowth"
                style={{ display: "block", width: "100%" }}
              >
                <source src="/videos/mike-closir-testimonial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Post>

          {/* PROBLEM POST */}
          <Post
            header={<PostHeader name="TYGrowth.com" sub="LinkedIn content systems for founders" meta="2w" />}
            baseLikes={198}
            comments={31}
            postTitle="You know what to say, but do not have time to post it"
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: LI,
                margin: "2px 0 8px",
              }}
            >
              The problem
            </div>
            <h2 style={{ fontSize: m ? 18 : 20, fontWeight: 700, color: "var(--heading-navy)", margin: "0 0 10px", lineHeight: 1.3 }}>
              You know what to say. You just do not have time to post it.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: T, margin: 0 }}>
              When LinkedIn keeps falling to the bottom of the list, people stop seeing your expertise. Good ideas stay
              trapped in calls and interviews, your feed goes quiet, and trust takes longer to build.
            </p>
          </Post>

          {/* OUTCOMES POST */}
          <Post
            header={<PostHeader name="TYGrowth.com" sub="LinkedIn content systems for founders" meta="3w" />}
            baseLikes={256}
            comments={52}
            postTitle="What actually changes"
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: LI,
                margin: "2px 0 8px",
              }}
            >
              The outcomes
            </div>
            <h2 style={{ fontSize: m ? 18 : 20, fontWeight: 700, color: "var(--heading-navy)", margin: "0 0 4px", lineHeight: 1.3 }}>
              What actually changes.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: T2, margin: "0 0 14px", fontWeight: 500 }}>
              Not impressions. The things impressions are supposed to lead to.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {OUTCOMES.map((outcome) => (
                <div key={outcome.title} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: 999,
                      background: "var(--teal-tint)",
                      color: "var(--teal-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 13,
                      marginTop: 1,
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.45, color: T }}>{outcome.title}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.55, color: T2, marginTop: 2 }}>{outcome.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </Post>

          {/* HOW IT WORKS POST */}
          <Post
            header={<PostHeader name="TYGrowth.com" sub="LinkedIn content systems for founders" meta="3w" />}
            baseLikes={140}
            comments={19}
            postTitle="Your side of this takes 45 minutes a week"
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: LI,
                margin: "2px 0 8px",
              }}
            >
              How it works
            </div>
            <h2 style={{ fontSize: m ? 18 : 20, fontWeight: 700, color: "var(--heading-navy)", margin: "0 0 14px", lineHeight: 1.3 }}>
              Your side of this takes 45 minutes a week.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    padding: "12px 14px",
                    background: "#F4F2EE",
                    borderRadius: 8,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: 999,
                      background: LI,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: 14,
                    }}
                  >
                    {s.n}
                  </span>
                  <div style={{ paddingTop: 3 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.45, color: T }}>{s.title}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.55, color: T2, marginTop: 2 }}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </Post>

          {/* QUALIFYING POST */}
          <Post
            header={<PostHeader name="TYGrowth.com" sub="LinkedIn content systems for founders" meta="4w" />}
            baseLikes={117}
            comments={16}
            postTitle="Is this LinkedIn content system a fit"
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: LI,
                margin: "2px 0 12px",
              }}
            >
              A quick fit check
            </div>
            <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, minmax(0, 1fr))", gap: 16 }}>
              <div>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--heading-navy)", margin: "0 0 10px", lineHeight: 1.3 }}>
                  This is probably not for you if...
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  {[
                    "You are already posting consistently and it is working",
                    "You want guaranteed leads rather than guaranteed consistency and quality",
                    "You are looking for the cheapest option available",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 8, fontSize: 14, lineHeight: 1.5, color: T }}>
                      <span style={{ color: T2, fontWeight: 700 }}>×</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--heading-navy)", margin: "0 0 10px", lineHeight: 1.3 }}>
                  It is probably a fit if...
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                  {[
                    "You are a founder, CEO, or exec at a B2B or SaaS company",
                    "You genuinely know your space and it is not showing up publicly",
                    "You have material sitting unused: calls, interviews, webinars, testimonials",
                    "Your page went quiet and you know it is costing you",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 8, fontSize: 14, lineHeight: 1.5, color: T }}>
                      <span style={{ color: "var(--teal-primary)", fontWeight: 700 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Post>

        </div>

        {/* RIGHT */}
        <div style={{ position: m ? "static" : "sticky", top: 70 }}>
          <Sidebar />
        </div>
      </div>

      {/* CLOSING CTA BAND */}
      <div style={{ background: "var(--gradient-brand)", position: "relative", overflow: "hidden" }}>
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.1 }} preserveAspectRatio="none">
          <line x1="64%" y1="0" x2="100%" y2="58%" stroke="#3FB3AC" strokeWidth="1.5" />
          <line x1="80%" y1="0" x2="100%" y2="36%" stroke="#3FB3AC" strokeWidth="1.5" />
        </svg>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 720,
            margin: "0 auto",
            padding: m ? "56px 24px" : "88px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: 14 }}>
            <Wordmark onDark size={18} />
          </div>
          <h2 style={{ fontSize: m ? 28 : 38, fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.12 }}>
            One call to see if it fits.
          </h2>
          <p style={{ color: "var(--text-on-dark)", fontSize: 16, lineHeight: 1.65, margin: "16px auto 0", maxWidth: 620 }}>
            Fifteen minutes. I will tell you what I would post in your first month and whether I think it is worth doing. If
            it is not a fit, I will say so.
          </p>
          <div style={{ marginTop: 30 }}>
            <BlueBtn big style={{ background: "var(--teal-primary)" }}>
              Book a Call
            </BlueBtn>
          </div>
          <div style={{ marginTop: 18 }}>
            <a href={`mailto:${EMAIL}`} style={{ color: "var(--text-on-dark)", fontSize: 15, textDecoration: "none" }}>
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

