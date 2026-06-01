import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  output: "export",
  trailingSlash: true,
  basePath: "/dara-investment",
  assetPrefix: "/dara-investment",
};

export default nextConfig;
