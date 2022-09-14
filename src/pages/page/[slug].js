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
import howWeWorkData from '../../../content/general/howWeWork.yaml';

import Layout from '../../components/Layout';
import PostHero from '../../components/landing/Hero';
import WhatWeDo from '../../components/landing/WhatWeDo';
import HowWeWork from '../../components/landing/HowWeWork';
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
      <HomeServices
        data={whatWeDoData}
        title="How We Work on it?"
        subtitle="eCommerce Development Process"
        category={page.category || 'home'}
      />
      <RecentProjects
        projects={projects}
        title="Glimpse of Our eCommerce Projects"
        subtitle="Check out our latest case studies and learn about how we helped worldwide companies
        to reach an efficient outcome for their eCommerce business."
      />
      <HowWeWork
        data={howWeWorkData}
        // content={{
        //   title: 'How We Work',
        //   subtitle:
        //     'We understand how to deliver engaging and successful eCommerce experiences',
        // }}
      />
      <Testimonials category={page.category || 'home'} />
      <ContactInfo
        contactData={contactData}
        isFaq
        content={{
          title: 'Contact Us',
          subtitle:
            'Want to increase your eCommerce sales? \n Get started today',
        }}
      />
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
