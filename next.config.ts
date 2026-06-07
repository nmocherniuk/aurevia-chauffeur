import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.riviera-prime.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
