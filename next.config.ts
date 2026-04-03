import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["dnachavez.localhost", "dnachavez-macbook.local"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: "/blog/writing-effect-inspired-by-apple",
        destination: "/blog/apple-hello-effect",
        permanent: true,
      },
      {
        source: "/blog/work-experience",
        destination: "/blog/work-experience-component",
        permanent: true,
      },
      {
        source: "/blog/theme-switcher-component",
        destination: "/blog/theme-switcher",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug.mdx",
        destination: "/doc.mdx/:slug",
      },
      {
        source: "/blog/:slug",
        destination: "/doc.mdx/:slug",
        has: [
          {
            type: "header",
            key: "accept",
            value: "(?<accept>.*text/markdown.*)",
          },
        ],
      },
      {
        source: "/rss",
        destination: "/blog/rss",
      },
    ]
  },
}

export default nextConfig
