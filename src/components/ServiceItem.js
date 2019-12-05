import React from 'react';
import styled from 'styled-components';

const Subtitle = styled.p`
  font-size: 1.3rem;
  @media only screen and (max-width: 768px) {
  font-size: 1.1rem;
  text-align: justify;
}`;

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
        <Subtitle className="extra-margin-bottom ">{node.shortDescription}</Subtitle>
        <p className="extra-margin-bottom">
          <img src={node.image.file.url} alt="" style={{ width: '75%' }} />
        </p>
        {/* <p className="extra-margin-bottom">{node.description.description}</p> */}
      </div>
    ))}
  </div>
);

export default ServiceItem;
