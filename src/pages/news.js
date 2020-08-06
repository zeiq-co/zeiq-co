import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Breadcrumb from '../components/elements/Breadcrumb';
import BlogItem from '../components/elements/BlogItem';
import BlogContent from '../components/elements/BlogContent';

const NewsUpdates = ({ data }) => {
  const { edges: posts } = data.allMdx;
  const PostList = BlogContent.slice(0, 3);

  return (
    <Layout>
      <Seo title="News & Updates" />
      <Breadcrumb title="News & Updates" />
      <div className="rn-blog-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row mt--60 mt_sm--40">
            {PostList.map((value, i) => (
              <BlogItem key={i} value={value} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsUpdates;

export const pageQuery = graphql`
  query newsIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
