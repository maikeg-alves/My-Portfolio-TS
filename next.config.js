/* disable-eslint */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.imgur.com',
      'www.vectorlogo.zone',
      'upload.wikimedia.org',
      'upload.vectorlogo.zone',
    ],
  },
};

module.exports = nextConfig;
