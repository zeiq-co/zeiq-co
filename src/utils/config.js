const config = {
  debug: process.env.NODE_ENV === 'development',
  siteName: process.env.NEXT_PUBLIC_ENV_SITE_NAME || 'Zeiq',
  theme_color: '#001213',
  projectKey: 'zeiq-fullstack',
  email: 'sales@zeiq.co',
  telephone: '+44-7747810130',
  address: 'London, UK',
  siteUrl: 'https://zeiq.co',
  googleAnalytics: process.env.NEXT_PUBLIC_ENV_SITE_NAME,
};

export default config;
