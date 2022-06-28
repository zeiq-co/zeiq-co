import { NextSeo } from 'next-seo';
import { orderBy } from 'lodash';

import { getMdxFromDir } from '../utils/helpers';
import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import WorkItem from '../components/work/WorkItem';
import CallToAction from '../components/about/CallToAction';

function WorkPage({ projects }) {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="Analyze your business,plan the strategy,works on developing idea and releases your product "
      />
      <PageHero title="Our Work" subTitle="Work we do" />
      <section className="section portfolio-grid-creative bg-white">
        <div className="container">
          <div className="row">
            {projects.map((item) => (
              <WorkItem key={item.slug} data={item} />
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </Layout>
  );
}

export default WorkPage;

export async function getStaticProps() {
  const result = getMdxFromDir('content/work');
  const orderedData = orderBy(result, ['listingOrder'], ['asc']);

  return {
    props: {
      projects: orderedData,
    },
  };
}
