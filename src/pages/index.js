import React from 'react';
import { graphql } from 'gatsby';
import { filter } from 'lodash';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeSlider from '../components/HomeLayout/HomeSlider';
import HomeVideoSlider from '../components/HomeLayout/HomeVideoSlider';
import About from '../components/HomeLayout/About';
import Portfolio from '../components/HomeLayout/Portfolio';
import Blog from '../components/HomeLayout/Blog';
import Services from '../components/HomeLayout/Services';
import Testimonial from '../components/elements/Testimonial';
import BrandsList from '../components/elements/BrandsList';

const IndexPage = ({ data }) => {
  // console.log('data', data);
  const mdxData = data.allMdx.edges;
  const services = filter(mdxData, (o) => {
    return o.node.frontmatter.type === 'service';
  });
  const projects = filter(mdxData, (o) => {
    return o.node.frontmatter.type === 'work';
  });
  const posts = filter(mdxData, (o) => {
    return o.node.frontmatter.type === 'post';
  });

  return (
    <Layout>
      <Seo
        title="Website and Mobile App Development Agency"
        description="React, React Native, GatsbyJs and Apollo GraphQL Development"
      />
      <div className="slider-wrapper">
        {/* <HomeSlider data={data.homeYaml} /> */}
        <HomeVideoSlider data={data.homeYaml} />
      </div>
      {/* for without video use: about-position-top !pt--120 */}
      <div className="about-area pt--120 pb--120">
        <About />
      </div>
      <div className="service-area ptb--80  bg_image bg_image--3">
        <div className="container">
          <Services services={services} />
        </div>
      </div>
      <div className="portfolio-area ptb--120">
        <Portfolio projects={projects} showMore showHero />
      </div>
      <div className="rn-testimonial-area bg_color--5 ptb--120">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
        <Blog posts={posts} />
      </div>
      <div className="rn-brand-area brand-separation bg_color--5 pb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BrandsList data={data.allBrandsYaml.edges} />
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
    allBrandsYaml {
      edges {
        node {
          id
          image
          title
        }
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
            info
            type
            author
            icon
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
