/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any external image domains here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    appDir: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
};
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self'; object-src 'none';",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
];

export default nextConfig;
