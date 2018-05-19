const config = require('./src/config/index.js');

module.exports = {
  siteMetadata: {
    title: config.siteName,
    author: config.author,
    description: config.description,
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalytics,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://media.us16.list-manage.com/subscribe/post?u=cc89738f5e13735361f5b9aa9&amp;id=3140e0e9f1',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteName,
        short_name: config.siteName,
        description: config.description,
        start_url: config.siteUrl,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/img/logo-48.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/logo-1024.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tkw83zs4zp0s`,
        accessToken: `3249c49d30079b537c4de9cb7c766ef9b776a5754be24e841faaaae8fe40c613`,
      },
    },
  ],
};
