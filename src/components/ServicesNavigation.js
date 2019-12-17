import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
`;

const ServicesNavigation = ({ services }) => (
  <div className="col-md-4">
    <List className="tab-links" role="tablist">
      {services.map(({ node }, index) => (
        <li key={node.id}>
          <a
            href={`#${node.fields.slug}`}
            className={index === 0 ? 'active' : ''}
            data-toggle="tab"
            role="tab"
            aria-controls={node.fields.slug}
            aria-selected="true">
            {node.frontmatter.title}
          </a>
        </li>
      ))}
    </List>
  </div>
);

export default ServicesNavigation;
