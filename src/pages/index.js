import { NextSeo } from 'next-seo';
import { orderBy, filter } from 'lodash';

import { getMdxFromDir } from '../utils/helpers';
import Layout from '../components/Layout';
import HomeHero from '../components/home/HomeHero';
import HomeAbout from '../components/home/HomeAbout';
import HomeServices from '../components/home/HomeServices';
import RecentProjects from '../components/home/RecentProjects';
import WorkProcess from '../components/home/WorkProcess';
import Testimonials from '../components/home/Testimonials';
import Technologies from '../components/home/Technologies';
import LatestPosts from '../components/home/LatestPosts';
import homeData from '../../content/general/home.yaml';

function Index({ projects, posts, technologies }) {
  return (
    <Layout>
      <NextSeo title="Website and Mobile App Development Agency - Zeiq.co " />
      <HomeHero data={homeData} />
      <HomeAbout data={homeData} />
      <HomeServices data={homeData} />
      <RecentProjects projects={projects} />
      <WorkProcess />
      <Testimonials />
      <Technologies brandsData={technologies} />
      <LatestPosts posts={posts} />
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

  return {
    props: {
      projects,
      posts,
      technologies: fetchTechnologies,
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
