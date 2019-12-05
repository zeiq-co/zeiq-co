import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AboutHero from '../components/AboutHero';
import Buttons from '../components/Buttons';
import TeamGallery from '../components/TeamGallery';
import BlockQuote from '../components/BlockQuote';
import CallToAction from '../components/CallToAction';
import Tech from '../components/Tech';

const About = () => {
  return (
    <Layout>
      <Seo title="About Us" />
      <main id="content" className="white-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <AboutHero />
              <Tech />
              <Buttons />
              <TeamGallery />
              <BlockQuote />
              <CallToAction />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
