import { NextSeo } from 'next-seo';
import { getPathsFromDir, getSingleMdx } from '../../utils/helpers';
import config from '../../utils/config';
import homeData from '../../../content/general/home.yaml';

import Layout from '../../components/Layout';
import PostHero from '../../components/landing/Hero';
import WhatWeDo from '../../components/landing/WhatWeDo';
import HomeServices from '../../components/home/HomeServices';

const BlogPost = ({ page }) => {
  if (!page) return null;
  return (
    <Layout>
      <NextSeo
        title={`${page.title}`}
        description={page.seoDescription}
        openGraph={{
          title: page.title,
          description: page?.seoDescription
            ? page?.seoDescription
            : page.siteTitle,
          images: [
            {
              url: `${config.siteUrl}/${
                page.featuredImage ? page.featuredImage : ''
              }`,
              width: 800,
              height: 600,
              alt: page.title,
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <PostHero post={page} />
      <WhatWeDo />
      <HomeServices data={homeData} />
    </Layout>
  );
};

export default BlogPost;

const filesDir = 'content/pages';

export async function getStaticPaths() {
  // Retrieve all our slugs
  const paths = getPathsFromDir(filesDir);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  if (!slug) return { notFound: true };

  const { data: frontmatter, content } = getSingleMdx(
    `${filesDir}/${slug}.mdx`,
  );
  return {
    props: {
      page: { content, slug, ...frontmatter },
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
