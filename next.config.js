/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ccwvovohdtdpewflhaue.supabase.co'],
  },
  experimental: {
    serverComponentsExternalPackages: ['puppeteer'],
  },
};

module.exports = nextConfig;
