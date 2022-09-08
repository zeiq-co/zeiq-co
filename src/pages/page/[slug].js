import { NextSeo } from 'next-seo';
import { orderBy, filter } from 'lodash';

import {
  getPathsFromDir,
  getSingleMdx,
  getMdxFromDir,
} from '../../utils/helpers';
import config from '../../utils/config';
import homeData from '../../../content/general/home.yaml';
import contactData from '../../../content/general/contact.yaml';

import Layout from '../../components/Layout';
import PostHero from '../../components/landing/Hero';
import WhatWeDo from '../../components/landing/WhatWeDo';
import HomeServices from '../../components/home/HomeServices';
import RecentProjects from '../../components/home/RecentProjects';
import Testimonials from '../../components/home/Testimonials';
import ContactInfo from '../../components/contact/ContactInfo';

const BlogPost = ({ page, projects }) => {
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
      <RecentProjects projects={projects} />
      <Testimonials />
      <ContactInfo contactData={contactData} isFaq />
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
  let projects = getMdxFromDir('content/work');
  projects = filter(projects, (item) => item.isFeatured === true);
  projects = orderBy(projects, ['listingOrder'], ['asc']);
  projects = projects.slice(0, 8);
  return {
    props: {
      page: { content, slug, ...frontmatter },
      projects,
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
