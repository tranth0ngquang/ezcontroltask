/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
};

export default nextConfig;
