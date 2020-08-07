/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { FiClock, FiUser } from 'react-icons/fi';
import dayjs from 'dayjs';
import styled from 'styled-components';

import Seo from './Seo';
import PageLayout from './PageLayout';

const Container = styled.div`
  background-image: ${(props) => `url(${props.bgImage}) !important`};
`;

export default function PageTemplate({ data: { mdx } }) {
  return (
    <PageLayout>
      <Seo title={mdx.frontmatter.title} />
      <Container
        bgImage={
          mdx.frontmatter.featuredImage !== null
            ? mdx.frontmatter.featuredImage.childImageSharp.fluid.src
            : undefined
        }
        className="rn-page-title-area pt--120 pb--190 bg_image"
        data-black-overlay="7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  {mdx.frontmatter.title}
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    {dayjs(mdx.frontmatter.date).format('D MMM YYYY')}
                  </li>
                  <li>
                    <FiUser />
                    Zeiq
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  <MDXRenderer>{mdx.body}</MDXRenderer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query NewsPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
