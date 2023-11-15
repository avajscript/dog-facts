/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: {
    URL: process.env.URL,
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
