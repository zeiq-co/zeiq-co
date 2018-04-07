import React from 'react';
import Link from 'gatsby-link';

const WorkItem = () => (
  <div className="grid-item project-thumb">
    <a href="project.html">
      <img src="tmp/sample-square.png" width="900" height="900" alt="" />
      <span className="project-thumb-details">
        <span className="title">BON</span>
        <span className="description">
          Create intrigue around aesthetically pleasing products
        </span>
      </span>
      <i className="saulticon-arrow-forward" />
    </a>
  </div>
);

export default WorkItem;
