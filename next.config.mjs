/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
    env: {
      Base_URL: 'back.cybermusic.online',
    },
};

export default nextConfig;