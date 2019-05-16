import React from 'react';
import Img from 'gatsby-image';

const WorkItem = ({ item, size }) => (
  <div
    className={`grid-item ${size === 'large' &&
      'grid-item-wide'} project-thumb`}
  >
    <a href={`/work/${item.slug}/`} target="_self">
      <Img
        sizes={item.image.sizes}
        alt={item.image.title}
        title={item.image.title}
        backgroundColor="#f1f1f1"
      />
      <span className="project-thumb-details">
        <span className="title">{item.title}</span>
        <span className="description">{item.description.description}</span>
      </span>
      <i className="saulticon-arrow-forward" />
    </a>
  </div>
);

export default WorkItem;