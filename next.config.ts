import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemForDev: true,
  }
};

export default nextConfig;
