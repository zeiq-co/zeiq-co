import React from 'react';
import Link from 'gatsby-link';

const WorkItem = ({ item, size }) => (
  <div
    className={`grid-item ${size === 'large' &&
      'grid-item-wide'} project-thumb`}
  >
    <a href={`/work/${item.slug}/`} target="_self">
      <img src={item.image.file.url} width="900" height="900" alt="" />
      <span className="project-thumb-details">
        <span className="title">{item.title}</span>
        <span className="description">{item.description.description}</span>
      </span>
      <i className="saulticon-arrow-forward" />
    </a>
  </div>
);

export default WorkItem;
