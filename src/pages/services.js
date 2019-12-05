import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ServicesTitle from '../components/ServicesTitle';
import ServicesNavigation from '../components/ServicesNavigation';
import ServiceItem from '../components/ServiceItem';
import WhatYouNeedIsNotListed from '../components/WhatYouNeedIsNotListed';

const Services = () => {
  const services = [];

  return (
    <Layout>
      <Seo title="Services" />
      <main id="content" className="white-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ServicesTitle />
              <div className="row">
                <ServicesNavigation services={services} />
                <ServiceItem services={services} />
              </div>
              <WhatYouNeedIsNotListed />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Services;
