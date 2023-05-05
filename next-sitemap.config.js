const siteUrl = process.env.SITEMAP_BASE_URL || 'https://www.zeiq.co';

module.exports = {
  siteUrl,
  changefreq: 'daily',
  sitemapSize: 1000,
  generateRobotsTxt: true,
  exclude: [
    '/index',
    '/about',
    '/blog',
    '/services',
    '/work',
    '/about',
    '/contact',
    '/products',
    '/support',
    '/blog/sitemap.xml',
    '/work/sitemap.xml',
    '/technology/sitemap.xml',
    '/services/sitemap.xml',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/work/sitemap.xml`,
      `${siteUrl}/technology/sitemap.xml`,
      `${siteUrl}/posts/sitemap.xml`,
      `${siteUrl}/services/sitemap.xml`,
    ],
  },
};
