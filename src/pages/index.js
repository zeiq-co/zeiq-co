import React from 'react';
import Link from 'gatsby-link';

import WorkList from '../components/WorkList';

export default class IndexPage extends React.Component {
  render() {
    return (
      <main id="content" className="white-background">
        <div className="container">
          <div className="row">
            <WorkList introVisible={true} />
          </div>
        </div>
      </main>
    );
  }
}
