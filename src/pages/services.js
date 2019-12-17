import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ServicesTitle from '../components/ServicesTitle';
import ServicesNavigation from '../components/ServicesNavigation';
import ServiceItem from '../components/ServiceItem';
import WhatYouNeedIsNotListed from '../components/WhatYouNeedIsNotListed';

const Services = ({ data }) => {
  const { edges: services } = data.allMdx;
  console.log('services', services);

  return (
    <Layout>
      <Seo title="Services" />
      <main id="content" className="white-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ServicesTitle />
              <div className="row">
                <ServicesNavigation services={services} />
                <ServiceItem services={services} />
              </div>
              <WhatYouNeedIsNotListed />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Services;

export const pageQuery = graphql`
  query servicesIndex {
    allMdx(
      sort: { fields: frontmatter___order, order: ASC }
      filter: { frontmatter: { type: { eq: "service" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 10000)
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
