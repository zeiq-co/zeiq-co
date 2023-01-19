import { NextSeo } from 'next-seo';
import { orderBy, filter } from 'lodash';

import {
  getPathsFromDir,
  getSingleMdx,
  getMdxFromDir,
} from '../../utils/helpers';
import config from '../../utils/config';
import Layout from '../../components/Layout';
import PrimaryService from '../../components/services/PrimaryService';
import SecondaryService from '../../components/services/SecondaryService';

const Service = ({ data, childServices, projects }) => (
  <Layout>
    <NextSeo
      title={data?.seoTitle || data?.title}
      description={data?.featuredOneDetails}
      openGraph={{
        url: `${config.siteUrl}/services/${data.slug}`,
        title: data.seoTitle || data.title,
        description: data?.featuredOneDetails
          ? data?.featuredOneDetails
          : data.title,
        images: [
          {
            url: `${config.siteUrl}${
              data?.featuredImage ? data?.featuredImage : '/images/logo.png'
            }`,
            width: 960,
            height: 640,
            alt: data.title,
            type: 'image/jpeg',
          },
        ],
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: data?.keywords,
        },
      ]}
    />
    {data?.advertisementType && (
      <SecondaryService data={data} projects={projects} />
    )}
    {!data?.advertisementType && (
      <PrimaryService data={data} childServices={childServices} />
    )}
  </Layout>
);

export default Service;

const filesDir = 'content/services';

export async function getStaticPaths() {
  // Retrieve all our slugs
  const paths = getPathsFromDir(filesDir);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { data: frontmatter, content } = getSingleMdx(
    `${filesDir}/${slug}.mdx`,
  );
  let childResult = getMdxFromDir(filesDir);
  childResult = filter(childResult, (o) => o.parent === slug);
  childResult = await orderBy(childResult, ['listingOrder'], ['asc']);
  let projects = getMdxFromDir('content/work');
  projects = filter(
    projects,
    (item) => item.category === frontmatter.advertisementType,
  );
  projects = orderBy(projects, ['listingOrder'], ['asc']);
  projects = await projects.slice(0, 10);

  return {
    props: {
      data: { content, slug, ...frontmatter },
      childServices: childResult,
      projects,
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
