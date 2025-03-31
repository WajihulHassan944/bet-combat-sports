/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Ensure proper deployment on Vercel
  webpack: (config) => {
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint errors during build
  },
};

export default nextConfig;
