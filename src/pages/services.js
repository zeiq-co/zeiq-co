import React from 'react';
import Link from 'gatsby-link';
import ServicesTitle from '../components/ServicesTitle';
import ServicesNavigation from '../components/ServicesNavigation';
import AllServices from '../components/AllServices';
import WhatYouNeedIsNotListed from '../components/WhatYouNeedIsNotListed';

export default class Services extends React.Component {
  render() {
    return (
      <main id="content" className="white-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ServicesTitle />
              <div className="row">
                <ServicesNavigation />
                <AllServices />
              </div>
              <WhatYouNeedIsNotListed />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
