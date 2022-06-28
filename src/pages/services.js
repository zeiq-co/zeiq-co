import { NextSeo } from 'next-seo';
import { orderBy, filter } from 'lodash';

import { getMdxFromDir } from '../utils/helpers';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import ServiceItem from '../components/services/ServiceItem';

function ServicesPage({ services }) {
  // console.log('services', services);
  return (
    <Layout>
      <NextSeo
        title="Services"
        description="Creation of user-friendly and interactive websites & applications. A solution-based approach that provides better results in terms of the style and design element that represents you & your brand. Designing, planning, programming, testing, bug fixing & more, one-stop-shop for all your software requirements."
      />
      <PageHero title="What we do" subTitle="We build creative experiences" />
      <section className="section bg-white">
        <div className="container">
          {services.map((item, index) => (
            <ServiceItem
              key={item.slug}
              data={item}
              imageLeft={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default ServicesPage;

export async function getStaticProps() {
  let result = getMdxFromDir('content/services');
  result = filter(result, (o) => !o.parent);
  result = orderBy(result, ['listingOrder'], ['asc']);

  return {
    props: {
      services: result,
    },
  };
}
