import React from 'react';
import Link from 'gatsby-link';

const ServicesNavigation = () => (
  <div className="col-md-4">
    <ul className="tab-links" role="tablist">
      <li>
        <a
          href="#risk-retention-analysis"
          className="active"
          data-toggle="tab"
          role="tab"
          aria-controls="risk-retention-analysis"
          aria-selected="true"
        >
          Risk &amp; Retention Analysis
        </a>
      </li>
      <li>
        <a
          href="#digital-marketing"
          data-toggle="tab"
          role="tab"
          aria-controls="digital-marketing"
          aria-selected="false"
        >
          Digital Marketing
        </a>
      </li>
      <li>
        <a
          href="#big-data"
          role="tab"
          aria-controls="big-data"
          aria-selected="false"
        >
          Big Data
        </a>
      </li>
      <li>
        <a
          href="#performance-computing"
          role="tab"
          aria-controls="performance-computing"
          aria-selected="false"
        >
          Performance Computing
        </a>
      </li>
      <li>
        <a
          href="#branding-identity"
          role="tab"
          aria-controls="branding-identity"
          aria-selected="false"
        >
          Branding Identity
        </a>
      </li>
    </ul>
  </div>
);

export default ServicesNavigation;
