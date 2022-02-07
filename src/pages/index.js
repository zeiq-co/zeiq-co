import { NextSeo } from 'next-seo';

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

function Index() {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="A short description goes here."
      />
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <RecentProjects />
      <WorkProcess />
      <Testimonials />
      <Technologies />
      <LatestPosts />
    </Layout>
  );
}

export default Index;
