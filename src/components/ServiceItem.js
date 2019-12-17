import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Subtitle = styled.p`
  font-size: 1.3rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
    text-align: justify;
  }
`;

const ServiceItem = ({ services }) => (
  <div className="col-md-8">
    {services.map(({ node }, index) => (
      <div
        key={node.id}
        id={node.fields.slug}
        className={`tab-content ${index === 0 ? 'active' : ''}`}
        role="tabpanel">
        <h2>{node.frontmatter.title}</h2>
        <Subtitle className="extra-margin-bottom ">
          {node.frontmatter.info}
        </Subtitle>
        <p className="extra-margin-bottom">
          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        </p>
        <p className="extra-margin-bottom">{node.excerpt}</p>
      </div>
    ))}
  </div>
);

export default ServiceItem;
