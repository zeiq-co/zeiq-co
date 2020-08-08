import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Breadcrumb from '../components/elements/Breadcrumb';
import Portfolio from '../components/HomeLayout/Portfolio';
// import PortfolioTabbed from '../components/PortfolioTabbed';

const Work = ({ data }) => {
  // console.log('projects', data);

  return (
    <Layout>
      <Seo title="News & Updates" />
      <Breadcrumb title="Our Work" />
      <div className="portfolio-area ptb--120">
        <Portfolio projects={data.allMdx.edges} />
      </div>
      {/* <div className="designer-portfolio-area ptb--120 bg_color--1">
        <div className="wrapper plr--70 plr_sm--30 plr_md--30">
          <PortfolioTabbed
            column="col-lg-4 col-md-6 col-sm-6 col-12"
            projects={data.allMdx.edges}
          />
        </div>
      </div> */}
    </Layout>
  );
};

export default Work;

export const pageQuery = graphql`
  query workQuery {
    allMdx(
      sort: { fields: frontmatter___listingOrder, order: ASC }
      filter: { frontmatter: { type: { eq: "work" } } }
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
                fluid(maxWidth: 300) {
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
