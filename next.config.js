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
      { domain: 'www.lucianomb.es', defaultLocale: 'es' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:locale(en|es)/:path*',
        has: [{ type: 'host', value: 'lucianomb.es' }],
        destination: 'https://www.lucianomb.es/:path*',
        permanent: true,
        locale: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatar.iran.liara.run" },
    ],
  },
}

module.exports = nextConfig
