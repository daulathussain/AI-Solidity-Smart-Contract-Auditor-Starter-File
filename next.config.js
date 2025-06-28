// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CUSTOM_KEY: "solidity-auditor",
  },
  experimental: {
    optimizeCss: true,
  },
};
