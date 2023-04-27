import { NextSeo } from 'next-seo';
import { orderBy, filter } from 'lodash';
import styled from 'styled-components';
import config from '../utils/config';

import { getMdxFromDir } from '../utils/helpers';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import WorkItem from '../components/work/WorkItem';
import CallToAction from '../components/about/CallToAction';
import seoData from '../../content/seo/workSeo.yaml';

const Section = styled.div`
   {
    img {
      object-fit: cover;
    }
  }
`;
function WorkPage({ projects }) {
  return (
    <Layout>
      <Section>
        <NextSeo
          title={seoData.seoTitle}
          description={seoData.seoDescription}
          openGraph={{
            title: seoData?.seoTitle,
            description: seoData?.seoDescription,
            images: [
              {
                url:
                  `${config.siteUrl}${seoData?.seoImage}` ||
                  `${config.siteUrl}/images/logo.png`,
                width: 500,
                height: 500,
                alt: seoData.imageAlt,
                type: 'image/jpeg',
                objectFit: 'contain',
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
      </Section>
    </Layout>
  );
}

export default WorkPage;

export async function getStaticProps() {
  let products = getMdxFromDir('content/work');
  products = orderBy(products, ['listingOrder'], ['asc']);
  products = filter(products, (item) => item.isFeatured === true);

  return {
    props: {
      projects: products,
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
