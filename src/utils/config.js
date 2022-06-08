const config = {
  debug: process.env.NODE_ENV === 'development',
  siteName: process.env.NEXT_PUBLIC_ENV_SITE_NAME || 'Zeiq',
  projectKey: 'kickoff-nextjs-fullstack',

  email: 'no-reply@site.com',
  telephone: '+1123123123',
  address: 'London, UK',
};

export default config;
