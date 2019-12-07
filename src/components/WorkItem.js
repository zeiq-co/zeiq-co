import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
      'grid-item-wide'} project-thumb`}>
    <Link to={`/work/${item.fields.slug}/`}>
      <Img fluid={item.frontmatter.featuredImage.childImageSharp.fluid} />
      <span className="project-thumb-details">
        <span className="title">{item.frontmatter.title}</span>
        <span className="description">{item.frontmatter.info}</span>
      </span>
      <i className="saulticon-arrow-forward" />
    </Link>
  </Container>
);

export default WorkItem;
