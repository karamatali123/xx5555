import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/xx555-game",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
