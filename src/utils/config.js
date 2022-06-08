const config = {
  debug: process.env.NODE_ENV === 'development',
  siteName: process.env.NEXT_PUBLIC_ENV_SITE_NAME || 'Zeiq.co',
  projectKey: 'kickoff-nextjs-fullstack',

  email: 'sales@zeiq.co',
  telephone: '+44-7747810130',
  address: 'London, UK',
};

export default config;
