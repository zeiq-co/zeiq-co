import { NextSeo } from 'next-seo';
import { orderBy } from 'lodash';

import { getMdxFromDir } from '../utils/helpers';
import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import WorkItem from '../components/work/WorkItem';

function ProductsPage({ projects }) {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="A short description goes here."
      />
      <PageHero />
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
  };
}
