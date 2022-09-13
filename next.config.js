const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')();
const withYaml = require('next-plugin-yaml');
const redirects = require('./redirects');

const nextConfig = {
  env: {
    TELEGRAM_TOKEN: '5784516054:AAEYyRMC7Gd2V3ueEEfyw8fA-XLBF3olhXs',
    TELEGRAM_CHAT_ID: '-630224343',
  },
  images: {
    domains: ['assets.vercel.com'],
  },
  pageExtensions: ['mdx', 'jsx', 'js'],
  devIndicators: {
    autoPrerender: false,
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  async redirects() {
    const allRedirects = await redirects();
    return allRedirects;
  },
};

module.exports = withPlugins([withMDX, withYaml], nextConfig);
