import { NextSeo } from 'next-seo';
import { orderBy, filter } from 'lodash';
import config from '../utils/config';
import { getMdxFromDir } from '../utils/helpers';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import ServiceItem from '../components/services/ServiceItem';
import seoData from '../../content/seo/servicesSeo.yaml';

function ServicesPage({ services }) {
  // console.log('services', services);
  return (
    <Layout>
      <NextSeo
        title={seoData.seoTitle}
        description={seoData.seoDescription}
        openGraph={{
          title: seoData.seoTitle,
          description: seoData.seoDescription,
          images: [
            {
              url:
                `${config.siteUrl}${seoData?.seoImage}` ||
                `${config.siteUrl}/images/logo.png`,
              width: 500,
              height: 500,
              alt: seoData.imageAlt,
              type: 'image/jpeg',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: seoData?.keywords,
          },
        ]}
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
    revalidate: 3600, // in seconds (1 hour)
  };
}
