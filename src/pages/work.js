import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Breadcrumb from '../components/elements/Breadcrumb';
import Portfolio from '../components/HomeLayout/Portfolio';

const Work = () => {
  return (
    <Layout>
      <Seo title="News & Updates" />
      <Breadcrumb title="Our Work" />
      <div className="portfolio-area ptb--120">
        <Portfolio />
      </div>
    </Layout>
  );
};

export default Work;
