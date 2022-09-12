import { NextSeo } from 'next-seo';
import { orderBy, filter } from 'lodash';

import {
  getPathsFromDir,
  getSingleMdx,
  getMdxFromDir,
} from '../../utils/helpers';
import config from '../../utils/config';
import contactData from '../../../content/general/contact.yaml';
import whatWeDoData from '../../../content/general/whatWeDo.yaml';

import Layout from '../../components/Layout';
import PostHero from '../../components/landing/Hero';
import WhatWeDo from '../../components/landing/WhatWeDo';
import HomeServices from '../../components/home/HomeServices';
import RecentProjects from '../../components/home/RecentProjects';
import Testimonials from '../../components/home/Testimonials';
import ContactInfo from '../../components/contact/ContactInfo';

const LandingPage = ({ page, projects }) => {
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
      <PostHero page={page} />
      <WhatWeDo />
      <HomeServices data={whatWeDoData} category={page.category || 'home'} />
      <RecentProjects
        projects={projects}
        title="Glimpse of Our Ecommerce Projects"
        subtitle="Check out our latest case studies and learn about how we helped
                worldwide companies
                to reach an efficient outcome for their eCommerce
                business."
      />
      <Testimonials category={page.category || 'home'} />
      <ContactInfo contactData={contactData} isFaq />
    </Layout>
  );
};

export default LandingPage;

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
  projects = filter(projects, (item) => item.category === frontmatter.category);
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
