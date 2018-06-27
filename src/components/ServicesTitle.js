import React from 'react';
import Link from 'gatsby-link';

const ServicesTitle = () => (
  <div className="page-title-container">
    <h1>The scope</h1>
    <h3>of our services</h3>
    <p>
      What you achieve with us is more than just the names of our services. If
      something you expect us to do is not listed here, do {''}
      <Link to="/contact/">get in touch!</Link>
    </p>
  </div>
);

export default ServicesTitle;
