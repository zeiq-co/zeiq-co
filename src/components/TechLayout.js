/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Seo from './Seo';
import PageLayout from './PageLayout';

const FeaturedImage = styled.div`
  padding: 0 22rem;
`;

export default function TechLayout({ data: { mdx } }) {
  return (
    <PageLayout>
      <Seo title={mdx.frontmatter.title} />
      <div className="page-content">
        <FeaturedImage className="post-featured-image">
          <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
        </FeaturedImage>
        <div className="page-title-container">
          <h1>{mdx.frontmatter.title}</h1>
        </div>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query TechPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
