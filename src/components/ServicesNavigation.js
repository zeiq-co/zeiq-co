import React from 'react';

const ServicesNavigation = ({ services }) => (
  <div className="col-md-4">
    <ul className="tab-links" role="tablist">
      {services.map(({ node }, index) => (
        <li key={node.id}>
          <a
            href={`#${node.slug}`}
            className={index === 0 ? 'active' : ''}
            data-toggle="tab"
            role="tab"
            aria-controls={node.slug}
            aria-selected="true"
          >
            {node.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ServicesNavigation;
