import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import WorkList from '../components/WorkList';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: work } = data.allMdx;
    // console.log('work', work);

    return (
      <Layout>
        <Seo
          title="Top Web and Mobile Apps Development Company"
          description="E-commerce projects , india nic, indianic ,unity 3d game developer, hire mobile apps developers,hire android developers india, shopify ecommerce development"
        />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <WorkList introVisible workList={work} buttonVisible />
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query homeIndex {
    allMdx(
      sort: { fields: frontmatter___order, order: ASC }
      filter: {
        frontmatter: { type: { eq: "work" }, isFeatured: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            category
            info
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
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
