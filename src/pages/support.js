import { useEffect } from 'react';
import { NextSeo } from 'next-seo';

import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';

function SupportPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      window.location = 'https://zeiq.freshdesk.com';
    }
  }, []);

  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="Get a quick estimate and a plan for your project with Zeiq's Customer Support"
      />
      <PageHero />
      <section className="section bg-white">
        <div className="container">
          <p>Loading...</p>
        </div>
      </section>
    </Layout>
  );
}

export default SupportPage;
