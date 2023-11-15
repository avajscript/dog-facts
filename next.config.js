/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dog.ceo",
      },
    ],
  },
};
