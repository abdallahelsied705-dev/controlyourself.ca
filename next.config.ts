import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            // Marketing site: self + inline styles (Tailwind/Next), self-hosted
            // fonts, data/https images, and Vercel Web Analytics endpoints.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "img-src 'self' data: https:",
              "style-src 'self' 'unsafe-inline'",
              "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
              "font-src 'self' data:",
              "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Preserve link equity from the domain's previous life (2008-2009
      // identi.ca / StatusNet tech blog, backlinked from nytimes, techcrunch,
      // ycombinator, umd.edu). Those dated post URLs 301 to the homepage.
      { source: "/2008/:path*", destination: "/", permanent: true },
      { source: "/2009/:path*", destination: "/", permanent: true },
      {
        source: "/blog/watch-premier-league-without-sky",
        destination: "/blog/watch-live-football-canada-iptv",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-app-firestick-2025",
        destination: "/blog/best-iptv-apps-firestick",
        permanent: true,
      },
      {
        source: "/blog/iptv-setup-guide-smart-tv-2025",
        destination: "/blog/iptv-setup-guide-smart-tv",
        permanent: true,
      },
      {
        source: "/blog/watch-sky-sports-without-sky-subscription",
        destination: "/blog/watch-live-sports-without-satellite",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
