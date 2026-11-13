/** @type {import('next').NextConfig} */

// RFC 8288 Link headers on the home page so agents (and Cloudflare's
// agent-readiness scanner) can find the API catalog without parsing HTML.
const agentLinkHeader = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</llms.txt>; rel="service-doc"; type="text/markdown"',
].join(", ")

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Work and LinkedIn pages are retired for now; send old links to the home page.
  // The /holiday page stays live (unlinked) so it can be shared directly.
  async redirects() {
    return [
      { source: "/work", destination: "/", permanent: false },
      { source: "/linkedin", destination: "/", permanent: false },
      { source: "/services", destination: "/services/b2b-marketing-partner", permanent: false },
    ]
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [{ key: "Link", value: agentLinkHeader }],
      },
    ]
  },
}

export default nextConfig
