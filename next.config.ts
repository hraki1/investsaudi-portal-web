import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'countryflagsapi.com',
      },
      {
        protocol: 'https',
        hostname: 'flagsapi.com',
      },
    ],
  },
};

export default nextConfig;
