import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Breadcrumb from '../components/elements/Breadcrumb';
import Portfolio from '../components/HomeLayout/Portfolio';

const Work = ({ data }) => {
  console.log('projects', data);

  return (
    <Layout>
      <Seo title="News & Updates" />
      <Breadcrumb title="Our Work" />
      <div className="portfolio-area ptb--120">
        <Portfolio projects={data.allMdx.edges} />
      </div>
    </Layout>
  );
};

export default Work;

export const pageQuery = graphql`
  query workQuery {
    allMdx(
      sort: { fields: frontmatter___listingOrder, order: ASC }
      filter: {
        frontmatter: { type: { eq: "work" }, isFeatured: { eq: true } }
      }
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
