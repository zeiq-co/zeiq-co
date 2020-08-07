import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeSlider from '../components/HomeSlider';
import About from '../components/HomeLayout/About';
import Portfolio from '../components/HomeLayout/Portfolio';
import Blog from '../components/HomeLayout/Blog';
import ServiceTwo from '../components/elements/ServiceTwo';
import Testimonial from '../components/elements/Testimonial';
import BrandsList from '../components/elements/BrandsList';

const IndexPage = ({ data }) => {
  console.log('data', data);

  return (
    <Layout>
      <Seo title="Home" description="Welcome to GatsbyJs v1" />
      <div className="slider-wrapper">
        <HomeSlider data={data.homeYaml} />
      </div>
      <div className="about-area about-position-top pb--120">
        <About />
      </div>
      <div className="service-area ptb--80  bg_image bg_image--3">
        <div className="container">
          <ServiceTwo />
        </div>
      </div>
      <div className="portfolio-area ptb--120">
        <Portfolio projects={[]} showMore />
      </div>
      <div className="rn-testimonial-area bg_color--5 ptb--120">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
        <Blog />
      </div>
      <div className="rn-brand-area brand-separation bg_color--5 pb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BrandsList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query homeQuery {
    homeYaml {
      id
      slogan
      features {
        details
        title
        icon
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { isFeatured: { eq: true } } }
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
