/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { FiClock, FiUser, FiMessageCircle, FiHeart } from 'react-icons/fi';

import Seo from './Seo';
import PageLayout from './PageLayout';

export default function PageTemplate({ data: { mdx } }) {
  return (
    <PageLayout>
      <Seo title={mdx.frontmatter.title} />
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
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
                    May 18, 2020
                  </li>
                  <li>
                    <FiUser />
                    NipaBali
                  </li>
                  <li>
                    <FiMessageCircle />
                    15 Comments
                  </li>
                  <li>
                    <FiHeart />
                    Like
                    <FiHeart />
                    Like
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      }
    }
  }
`;
