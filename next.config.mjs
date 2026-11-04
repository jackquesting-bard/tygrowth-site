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
