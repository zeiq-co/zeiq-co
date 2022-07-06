import { NextSeo } from 'next-seo';
import { orderBy } from 'lodash';
import config from '../utils/config';

import { getMdxFromDir } from '../utils/helpers';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import WorkItem from '../components/work/WorkItem';

function ProductsPage({ projects }) {
  return (
    <Layout>
      <NextSeo
        title="Products"
        description="Case studies of our web, software & mobile app development work for all industry verticals."
        openGraph={{
          title: 'Products',
          description:
            'Case studies of our web, software & mobile app development work for all industry verticals.',
          images: [
            {
              url: `${config.siteUrl}/images/logo.png`,
              width: 500,
              height: 500,
              alt: 'Zeiq Products and Case studies',
              type: 'image/jpeg',
            },
          ],
        }}
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
  const result = getMdxFromDir('content/products');
  const orderedData = orderBy(result, ['listingOrder'], ['asc']);

  return {
    props: {
      projects: orderedData,
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
