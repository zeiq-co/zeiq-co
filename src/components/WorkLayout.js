/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Seo from './Seo';
import PageLayout from './PageLayout';
import WorkPageButton from './WorkPageButton';
import BlockQuote from './BlockQuote';
import CallToAction from './CallToAction';

const FeaturedImage = styled.div`
  padding: 0 22rem;
`;

export default function WorkLayout({ data: { mdx } }) {
  return (
    <PageLayout>
      <Seo title={mdx.frontmatter.title} />
      <div className="page-content">
        <FeaturedImage className="post-featured-image">
          <Img fluid={mdx.frontmatter.heroImage.childImageSharp.fluid} />
        </FeaturedImage>
        <div className="page-title-container">
          <h1>{mdx.frontmatter.title}</h1>
          <p className="subtitle" data-reactid="44">
            {mdx.frontmatter.info}
          </p>
        </div>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <WorkPageButton url={mdx.frontmatter.url} />
        <BlockQuote />
        <CallToAction />
      </div>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query WorkPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        url
        info
        heroImage {
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
