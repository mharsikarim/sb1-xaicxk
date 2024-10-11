/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    // Enable React Server Components
    serverComponents: true,
    // Improve error handling for RSC
    serverActions: true,
  },
};

module.exports = nextConfig;