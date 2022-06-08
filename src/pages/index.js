import { NextSeo } from 'next-seo';
import { orderBy, filter } from 'lodash';

import { getMdxFromDir } from '../utils/helpers';
import config from '../utils/config';
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

function Index({ projects, posts }) {
  // console.log('posts', posts);

  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="Website and Mobile App Development Agency"
      />
      <HomeHero data={homeData} />
      <HomeAbout data={homeData} />
      <HomeServices data={homeData} />
      <RecentProjects projects={projects} />
      <WorkProcess />
      <Testimonials />
      <Technologies />
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

  let posts = getMdxFromDir('content/posts');
  posts = orderBy(posts, ['date'], ['desc']);
  posts = posts.slice(0, 4);

  return {
    props: {
      projects,
      posts,
    },
  };
}
