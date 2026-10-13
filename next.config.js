/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    // the domain decides the language, so don't redirect based on the browser language
    localeDetection: false,
    domains: [
      { domain: 'lucianomb.it', defaultLocale: 'en' },
      { domain: 'lucianomb.es', defaultLocale: 'es' },
    ],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatar.iran.liara.run" },
    ],
  },
}

module.exports = nextConfig
