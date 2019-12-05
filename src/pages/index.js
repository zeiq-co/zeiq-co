import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import WorkList from '../components/WorkList';

export default class IndexPage extends React.Component {
  render() {
    const work = [];

    return (
      <Layout>
        <Seo title="Home" description="We are web development company" />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <WorkList introVisible workList={work} buttonVisible />
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}
