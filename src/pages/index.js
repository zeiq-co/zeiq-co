import React from 'react';
import Link from 'gatsby-link';

import WorkList from '../components/WorkList';

export default class IndexPage extends React.Component {
  render() {
    // const Title = (
    //   <div>
    //     <h1>
    //       Hi! We're <span className="text-color">SAULT</span>. A full service
    //       digital agency who helps brands stand out. Checkout our work.
    //     </h1>
    //     <a href="about.html" className="button big">
    //       All that we do&hellip;
    //     </a>
    //   </div>
    // );

    return <WorkList />;
  }
}
