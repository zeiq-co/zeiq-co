import { NextSeo } from 'next-seo';
import { orderBy } from 'lodash';

import { getMdxFromDir } from '../utils/helpers';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import WorkItem from '../components/work/WorkItem';
import CallToAction from '../components/about/CallToAction';

const content = {
  seoTitle:
    'Analyze your business,plan the strategy,works on developing idea and releases your product',
  seoDescription:
    'Zeiq – Full-Stack Mobile (iOS, Android) and Web App Design and Development Company',
};

function WorkPage({ projects }) {
  return (
    <Layout>
      <NextSeo
        title={content.seoTitle}
        description={content.seoDescription}
        openGraph={{
          title: content.seoTitle,
          description: content.seoDescription,
          images: [
            {
              url: '/images/logo.png',
              width: 500,
              height: 500,
              alt: 'Zeiq Work and Case studies',
              type: 'image/jpeg',
            },
          ],
        }}
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
