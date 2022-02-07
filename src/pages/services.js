import { NextSeo } from 'next-seo';

import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import ServiceItem from '../components/services/ServiceItem';

function ServicesPage() {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="A short description goes here."
      />
      <PageHero />
      <section className="section bg-white">
        <div className="container">
          <ServiceItem />
          <ServiceItem imageLeft />
          <ServiceItem />
          <ServiceItem imageLeft />
        </div>
      </section>
    </Layout>
  );
}

export default ServicesPage;
