import { NextSeo } from 'next-seo';
import { orderBy, filter } from 'lodash';
import dynamic from 'next/dynamic';

import config from '../utils/config';
import { getMdxFromDir } from '../utils/helpers';
import homeData from '../../content/general/home.yaml';
import seoData from '../../content/seo/homeSeo.yaml';
import whatWeDoData from '../../content/general/whatWeDo.yaml';

import Layout from '../components/Layout';
import HomeHero from '../components/home/HomeHero';
import HomeAbout from '../components/home/HomeAbout';
import HomeServices from '../components/home/HomeServices';

import WorkProcess from '../components/home/WorkProcess';
import Testimonials from '../components/home/Testimonials';
import Technologies from '../components/home/Technologies';
import LatestPosts from '../components/home/LatestPosts';

const RecentProjects = dynamic(import('../components/home/RecentProjects'), {
  loading: () => <p className="text-center">Loading...</p>,
});

function Index({ projects, posts, technologies }) {
  return (
    <Layout>
      <NextSeo
        title={seoData.seoTitle}
        description={seoData.details}
        openGraph={{
          title: seoData.seoTitle,
          description: seoData.details,
          images: [
            {
              url:
                `${config.siteUrl}${seoData?.seoImage}` ||
                `${config.siteUrl}/images/logo.png`,
              width: 1200,
              height: 800,
              alt: seoData?.imageAlt,
              type: 'image/jpeg',
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
      <HomeHero data={homeData} />
      <HomeAbout data={homeData} />
      <HomeServices data={whatWeDoData} category="home" isServices />
      <RecentProjects projects={projects} />
      <WorkProcess />
      <Testimonials category="home" />
      <Technologies brandsData={technologies} />
      <LatestPosts
        posts={posts}
        content={{ title: 'Latest news', subtitle: 'Our Blog Posts' }}
      />
    </Layout>
  );
}

export default Index;

export async function getStaticProps() {
  let projects = getMdxFromDir('content/work');
  projects = filter(projects, (item) => item.isFeatured === true);
  projects = orderBy(projects, ['listingOrder'], ['asc']);
  projects = projects.slice(0, 8);

  let fetchTechnologies = getMdxFromDir('content/technology');
  fetchTechnologies = orderBy(fetchTechnologies, ['order'], ['asc']);

  let posts = getMdxFromDir('content/posts');
  posts = filter(posts, (item) => item.isFeatured === true);
  posts = orderBy(posts, ['date'], ['desc']);

  return {
    props: {
      projects,
      posts,
      technologies: fetchTechnologies,
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
