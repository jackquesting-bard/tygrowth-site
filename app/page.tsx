"use client";
import { TopNav, Footer } from "@/components/site-chrome";
import { Button, Card, Eyebrow, AccentLines, ImageSlot } from "@/components/ui";
import { useMobile } from "@/components/use-mobile";
import { BOOK } from "@/lib/site";

const SERVICES = [
  {
    title: "I audit what you already have",
    body: "Recorded calls, webinars, interviews, sales decks, help docs, that Notion page you wrote once and forgot. Most companies are sitting on a year of content and do not know it. I go find it and build the library before I write a single post.",
  },
  {
    title: "I capture your thinking, weekly",
    body: "One short check-in each week. You talk about what happened, what you noticed, what you disagree with. I take it away and turn it into posts in your voice, for your personal profile and your company page.",
  },
  {
    title: "I turn your proof into posts",
    body: "Client testimonials, wins, and results usually get posted once and then die. I reformat them into content that keeps working: case studies, before and after breakdowns, quiet proof that shows up in front of the right people every week.",
  },
];

const REVIEWS = [
  {
    id: "home-review-bonnie",
    src: "/images/testimonial-bonnie-linkedin.png",
    logo: "/images/logo-nomedic-testimonial.png",
    logoAlt: "Nomedic",
    placeholder: "Testimonial: Bonnie Burton (LinkedIn)",
  },
  {
    id: "home-review-luz",
    src: "/images/testimonial-luz-linkedin.png",
    logo: "/images/logo-luz-maria-mack.png",
    logoAlt: "Luz Maria Mack",
    placeholder: "Testimonial: Luz (LinkedIn)",
  },
  {
    id: "home-review-decha",
    src: "/images/testimonial-decha-linkedin.png",
    logo: "/images/logo-tri-leader.png",
    logoAlt: "Tri-Leader",
    placeholder: "Testimonial: Decha (LinkedIn)",
  },
];

export default function HomePage() {
  const m = useMobile();
  const secPy = m ? "56px" : "96px";
  return (
    <div style={{ color: "var(--slate-body)" }}>
      {/* Hero */}
      <div style={{ background: "var(--gradient-brand)", position: "relative", overflow: "hidden" }}>
        <AccentLines />
        <TopNav />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1120,
            margin: "0 auto",
            padding: m ? "48px 24px 64px" : "80px 24px 104px",
          }}
        >
          <div style={{ maxWidth: 780 }}>
            <h1
              style={{
                margin: 0,
                fontSize: m ? 38 : 56,
                lineHeight: 1.05,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.015em",
              }}
            >
              You&apos;ve got the expertise. You don&apos;t have{" "}
              <span style={{ color: "var(--teal-bright)" }}>the time.</span>
            </h1>
            <p
              style={{
                fontSize: m ? 17 : 18,
                lineHeight: 1.6,
                color: "var(--text-on-dark)",
                maxWidth: 600,
                marginTop: 24,
              }}
            >
              I turn what CEOs and founders already know into a LinkedIn presence that builds trust, starts real
              conversations, and grows the value of what you&apos;re building. One call a week from you. I handle the rest.
            </p>
            <div style={{ marginTop: 36 }}>
              <Button href={BOOK}>Book a Call</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews FIRST */}
      <section style={{ padding: `${secPy} 24px`, background: "var(--surface-light)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Eyebrow>Reviews</Eyebrow>
          <h2
            style={{
              fontSize: m ? 30 : 40,
              lineHeight: 1.1,
              fontWeight: 800,
              color: "var(--heading-navy)",
              margin: "12px 0 8px",
            }}
          >
            Clients say it better than I <span style={{ color: "var(--teal-primary)" }}>can.</span>
          </h2>
          <p style={{ fontSize: 18, maxWidth: 640, margin: "0 0 40px" }}>
            Mike, founder of Closir, built a platform that helps public companies connect with investors. Here&apos;s what
            changed when his expertise became a consistent LinkedIn presence.
          </p>
          <Card elevated style={{ padding: m ? 12 : 20, margin: "0 auto 24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: m ? "1fr" : "minmax(240px, 0.58fr) minmax(0, 1.42fr)",
                gap: m ? 18 : 24,
                alignItems: "stretch",
              }}
            >
              <video
                controls
                preload="metadata"
                playsInline
                aria-label="Mike, founder of Closir, sharing his experience with TYGrowth"
                style={{
                  display: "block",
                  width: "100%",
                  height: m ? 360 : 430,
                  objectFit: "cover",
                  borderRadius: 12,
                  background: "var(--heading-navy)",
                }}
              >
                <source src="/videos/mike-closir-testimonial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start", justifyContent: "flex-start" }}>
                <img
                  src="/images/logo-closir-testimonial.png"
                  alt="Closir"
                  style={{ display: "block", width: m ? 160 : 200, height: "auto" }}
                />
                <img
                  src="/images/mike-closir-recommendation.png"
                  alt="Written LinkedIn recommendation from Michael Chojnacki of Closir"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: 10, border: "1px solid var(--border-light)" }}
                />
              </div>
            </div>
          </Card>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(2, minmax(0, 1fr))", gap: 24 }}>
            {REVIEWS.map((r) => (
              <Card key={r.id} elevated style={{ padding: 16 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 72, marginBottom: 14 }}>
                  <img
                    src={r.logo}
                    alt={r.logoAlt}
                    style={{ display: "block", width: 72, height: 72, objectFit: "contain", borderRadius: 10 }}
                  />
                </div>
                <ImageSlot src={r.src} alt={r.placeholder} placeholder={r.placeholder} radius={12} height="auto" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: `0 24px ${secPy}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <Eyebrow>Services</Eyebrow>
          <h2
            style={{
              fontSize: m ? 30 : 40,
              lineHeight: 1.1,
              fontWeight: 800,
              color: "var(--heading-navy)",
              margin: "12px 0 12px",
            }}
          >
            One job. Done every week.
          </h2>
          <p style={{ fontSize: 18, maxWidth: 640, margin: "0 0 40px" }}>
            Everything below is part of the same engagement. You are not picking a package.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: m ? "1fr" : "repeat(3,1fr)", gap: 24 }}>
            {SERVICES.map((service) => (
              <Card key={service.title} style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
                <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "var(--heading-navy)", lineHeight: 1.3 }}>
                  {service.title}
                </h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6 }}>{service.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: `0 24px ${secPy}` }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "320px 1fr",
            gap: m ? 32 : 56,
            alignItems: "center",
          }}
        >
          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow-elevated)" }}>
            <ImageSlot src="/images/jack-profile.jpg" alt="Jack" placeholder="Photo: Jack" radius={20} height={m ? 360 : 400} />
          </div>
          <div>
            <Eyebrow>About me</Eyebrow>
            <h2
              style={{
                fontSize: m ? 26 : 30,
                lineHeight: 1.2,
                fontWeight: 800,
                color: "var(--heading-navy)",
                margin: "12px 0 20px",
              }}
            >
              The world I&apos;m trying to build.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, margin: 0 }}>
              I want to live in a world where the people who actually know things are the ones sharing them. Right now the
              loudest voices online usually have the most free time, not the most expertise. TY Growth helps CEOs,
              founders, executives, and B2B businesses turn their expertise into content and marketing systems that build
              trust, start qualified conversations, and create new business opportunities.
            </p>
            <div style={{ marginTop: 28 }}>
              <Button href={BOOK} external>
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

