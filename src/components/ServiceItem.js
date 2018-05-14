import React from 'react';
import Link from 'gatsby-link';

const ServiceItem = ({ services }) => (
  <div className="col-md-8">
    {services.map(({ node }, index) => (
      <div
        key={node.id}
        id={node.slug}
        className={`tab-content ${index === 0 ? 'active' : ''}`}
        role="tabpanel"
      >
        <h2>{node.title}</h2>
        <p className="extra-margin-bottom">{node.shortDescription}</p>
        <p className="extra-margin-bottom">
          <img
            src={node.image.file.url}
            style={{ width: 1180, height: 680 }}
            alt=""
          />
        </p>
        <p className="extra-margin-bottom">{node.description.description}</p>
      </div>
    ))}
  </div>
);

export default ServiceItem;
