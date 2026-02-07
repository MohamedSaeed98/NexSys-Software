/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['trycloudflare.com'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
  },
};

export default nextConfig;
