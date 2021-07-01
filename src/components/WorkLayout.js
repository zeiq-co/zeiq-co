import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { FaAndroid, FaApple, FaChrome } from 'react-icons/fa';

import Seo from './Seo';
import PageLayout from './PageLayout';

const FeaturedImage = styled.div`
  background-image: ${(props) => `url(${props.bgImage}) !important`};
`;

export default function WorkTemplate({ data: { mdx } }) {
  const featuredImage =
    mdx.frontmatter.featuredImage !== null
      ? mdx.frontmatter.featuredImage.childImageSharp.fluid.src
      : undefined;

  const projectLinks = [];
  if (mdx.frontmatter.websiteUrl) {
    projectLinks.push({
      Social: <FaChrome />,
      link: mdx.frontmatter.websiteUrl,
    });
  }

  if (mdx.frontmatter.iosAppUrl) {
    projectLinks.push({
      Social: <FaApple />,
      link: mdx.frontmatter.iosAppUrl,
    });
  }
  if (mdx.frontmatter.androidAppUrl) {
    projectLinks.push({
      Social: <FaAndroid />,
      link: mdx.frontmatter.androidAppUrl,
    });
  }

  // { Social: <FaChrome />, link: mdx.frontmatter.websiteUrl },
  //   { Social: <FaApple />, link: mdx.frontmatter.iosAppUrl },
  //   { Social: <FaAndroid />, link: mdx.frontmatter.androidAppUrl },

  return (
    <PageLayout>
      <Seo title={mdx.frontmatter.title} />
      <FeaturedImage
        bgImage={featuredImage}
        className="rn-page-title-area pt--120 pb--190 bg_image"
        data-black-overlay="7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  {mdx.frontmatter.title}
                </h2>
                <p>{mdx.frontmatter.tags}</p>
              </div>
            </div>
          </div>
        </div>
      </FeaturedImage>
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>About</h2>
                  <p className="subtitle">{mdx.frontmatter.info}</p>
                  <p>{mdx.frontmatter.details}</p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>Category</span>
                      <h4>{mdx.frontmatter.category}</h4>
                    </div>

                    <div className="port-view">
                      <span>Project Type</span>
                      <h4>{mdx.frontmatter.projectType}</h4>
                    </div>

                    <div className="port-view">
                      <span>Tech Stack</span>
                      <h4>{mdx.frontmatter.techStack}</h4>
                    </div>
                  </div>

                  <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                      {projectLinks.map((val, i) => {
                        if (!val.Social) {
                          return null;
                        }
                        return (
                          <li key={i}>
                            <a href={`${val.link}`}>{val.Social}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="portfolio-thumb-inner">
                  <div className="inner">
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query WorkPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        info
        tags
        details
        category
        projectType
        techStack
        websiteUrl
        iosAppUrl
        androidAppUrl
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
