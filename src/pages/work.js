import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import WorkList from '../components/WorkList';

export default class WorkPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: work } = data.allMdx;
    // console.log('work', work);

    return (
      <Layout>
        <Seo title="Work" description="Some of our recent works" />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <WorkList
                introVisible={false}
                workList={work}
                buttonVisible={false}
              />
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query workQuery {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
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
