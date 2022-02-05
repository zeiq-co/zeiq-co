import React, { useEffect } from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Breadcrumb from '../components/elements/Breadcrumb';

const Support = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      window.location = 'https://zeiq.freshdesk.com';
    }
  }, []);

  return (
    <Layout>
      <Seo title="Support" />
      <Breadcrumb title="Support" />
      <div className="service-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h2>Support </h2>
                <p>Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
