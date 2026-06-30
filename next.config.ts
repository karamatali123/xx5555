import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Match WordPress-style URLs (e.g. /about-us/) for consistency with live site
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xx555.org.pk" }],
        destination: "https://xx555.org.pk/:path*",
        permanent: true,
      },
      {
        source: "/xx555-game",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
