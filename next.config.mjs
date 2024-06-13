/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  distDir: "dist",
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;