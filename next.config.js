/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["books.google.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "books.google.com",
      },
    ],
  },
};

module.exports = nextConfig;
