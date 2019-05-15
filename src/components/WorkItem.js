import React from 'react';
import Img from 'gatsby-image';

import styled from 'styled-components';

const Container = styled.div`
  @media screen and (max-width: 600px) {
    position: relative !important;
    top: 4px !important;
    left: 0%;
    bottom: 19px !important;
  }
  `;

const WorkItem = ({ item, size }) => (
  <Container
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
  </Container>
);

export default WorkItem;
