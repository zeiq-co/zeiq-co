import { NextSeo } from 'next-seo';
import { orderBy, filter } from 'lodash';
import config from '../utils/config';

import { getMdxFromDir } from '../utils/helpers';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import WorkItem from '../components/work/WorkItem';
import seoData from '../../content/seo/productSeo.yaml';

function ProductsPage({ projects }) {
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
      <PageHero title="Our Products" subTitle="Our Business" />
      <section className="section portfolio-grid-creative bg-white">
        <div className="container">
          <div className="row">
            {projects.map((item) => (
              <WorkItem key={item.slug} data={item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProductsPage;

export async function getStaticProps() {
  let products = getMdxFromDir('content/products');
  products = orderBy(products, ['listingOrder'], ['asc']);
  products = filter(products, (item) => item.isFeatured === true);

  return {
    props: {
      projects: products,
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
