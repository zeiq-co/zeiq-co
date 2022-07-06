import { NextSeo } from 'next-seo';
import { orderBy } from 'lodash';
import config from '../utils/config';

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
              url: `${config.siteUrl}/images/logo.png`,
              width: 500,
              height: 500,
              alt: 'Zeiq Work and Case studies',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <PageHero title="Our Work" subTitle="Work we do" />
      <section className="section portfolio-grid-creative bg-white ">
        <div className="row m-auto">
          <div className="col">
            <div className="container">
              <div className="row">
                {projects.map((item, index) => (
                  <WorkItem key={item.slug} data={item} index={index} />
                ))}
              </div>
            </div>
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
    revalidate: 3600, // in seconds (1 hour)
  };
}
