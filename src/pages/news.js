import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Breadcrumb from '../components/elements/Breadcrumb';
import BlogItem from '../components/elements/BlogItem';

const NewsUpdates = ({ data }) => {
  const { edges: posts } = data.allMdx;
  // console.log('posts', posts);

  return (
    <Layout>
      <Seo title="News & Updates" />
      <Breadcrumb title="News & Updates" />
      <div className="rn-blog-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row mt--60 mt_sm--40">
            {posts.map(({ node: post }) => (
              <BlogItem key={post.id} data={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsUpdates;

export const pageQuery = graphql`
  query newsQuery {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
