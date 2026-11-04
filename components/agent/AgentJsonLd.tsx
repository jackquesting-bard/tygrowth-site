// schema.org JSON-LD for the home page. Search engines and AI answer engines
// read structured data reliably; the ReserveAction and CommunicateAction point
// at the agent endpoints (same pattern Cal.com uses on its booking pages).
import { business, SITE_URL } from "@/lib/agent/config";

export default function AgentJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: business.name,
    url: SITE_URL,
    email: business.email,
    description: business.oneLiner,
    founder: { "@type": "Person", name: business.owner },
    areaServed: "US",
    address: { "@type": "PostalAddress", addressLocality: "Celebration", addressRegion: "FL", addressCountry: "US" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: business.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
      })),
    },
    potentialAction: [
      {
        "@type": "ReserveAction",
        name: "Book a 20-minute fit call",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/api/agent/book`,
          httpMethod: "POST",
          contentType: "application/json",
        },
        result: { "@type": "Reservation", name: "20-minute fit call" },
      },
      {
        "@type": "CommunicateAction",
        name: "Send an inquiry",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/api/agent/inquiry`,
          httpMethod: "POST",
          contentType: "application/json",
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
