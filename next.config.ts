import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...other config like output: 'standalone' might be here

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

module.exports = nextConfig;