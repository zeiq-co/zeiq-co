import React from 'react';
import Link from 'gatsby-link';

const CallToAction = () => (
  <div className="call-to-action text-left">
    <h4 className="text-color">Challange the Stable!</h4>
    <div className="vertical-middle">
      <h1>Let's see how we can help you!!</h1>
      <Link to="/contact/">
        <a className="button big has-arrow">Let's chat up</a>
      </Link>
    </div>
  </div>
);

export default CallToAction;
