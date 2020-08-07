import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Breadcrumb from '../components/elements/Breadcrumb';
import ServiceItem from '../components/elements/ServiceItem';

const Services = ({ data }) => {
  const services = data.allMdx.edges;
  // console.log('services', services);

  return (
    <Layout>
      <Seo title="News & Updates" />
      <Breadcrumb title="Services" />
      <div className="service-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h2>Digital Marketing</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, <br /> but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row service-one-wrapper">
            {services.map(({ node: service }) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;

export const pageQuery = graphql`
  query servicesQuery {
    allMdx(
      sort: { fields: frontmatter___listingOrder, order: ASC }
      filter: {
        frontmatter: { type: { eq: "service" }, isFeatured: { eq: true } }
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
            info
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
