import React from 'react';
import { Link } from 'gatsby';

const CallToAction = () => (
  <div className="call-to-action text-left">
    <h4 className="text-color">Challenge the Stable!</h4>
    <div className="vertical-middle">
      <h1 style={{ fontSize: 35 }}>Let us see how we can help you.</h1>
      <Link to="/contact/" className="button big has-arrow">
        Let's chat up
      </Link>
    </div>
  </div>
);

export default CallToAction;
