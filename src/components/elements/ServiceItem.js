import React from 'react';

const ServiceItem = ({ val }) => (
  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
    <a href="/service-details">
      <div className="service service__style--2">
        <div className="icon">{val.icon}</div>
        <div className="content">
          <h3 className="title">{val.title}</h3>
          <p>{val.description}</p>
        </div>
      </div>
    </a>
  </div>
);

export default ServiceItem;
