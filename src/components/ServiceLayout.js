/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { filter } from 'lodash';
import styled from 'styled-components';

import Seo from './Seo';
import PageLayout from './PageLayout';
import ServiceItem from './elements/ServiceItem';

const FeaturedImage = styled.div`
  background-image: ${(props) => `url(${props.bgImage}) !important`};
`;

export default function ServiceTemplate({ data }) {
  const mdx = data && data.mdx ? data.mdx : { frontmatter: {}, fields: {} };
  const childServices = filter(data.allMdx.edges, (o) => {
    return `/${o.node.frontmatter.parent}/` === mdx.fields.slug;
  });
  const featuredImage =
    mdx.frontmatter.featuredImage !== null
      ? mdx.frontmatter.featuredImage.childImageSharp.fluid.src
      : undefined;
  const featuredOneImage =
    mdx.frontmatter.featuredOneImage !== null
      ? mdx.frontmatter.featuredOneImage.childImageSharp.fluid.src
      : undefined;

  return (
    <PageLayout>
      <Seo title={mdx.frontmatter.title} />
      <FeaturedImage
        bgImage={featuredImage}
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
        data-black-overlay="7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  {mdx.frontmatter.title}
                </h2>
                <p>{mdx.frontmatter.info}</p>
              </div>
            </div>
          </div>
        </div>
      </FeaturedImage>
      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <img
                          className="w-100"
                          src={featuredOneImage}
                          alt="Service Images"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="details mt_md--30 mt_sm--30">
                        <h4 className="title">
                          {mdx.frontmatter.featuredOneTitle}
                        </h4>
                        <p>{mdx.frontmatter.featuredOneDetails}</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="row sercice-details-content align-items-center">
                    <div className="col-lg-6 col-12 order-2 order-lg-1">
                      <div className="details mt_md--30 mt_sm--30">
                        <p>
                          but the majority have suffered alteration in some
                          form, by injected humour, or randomised words which
                          don't look even slightly believable. If you are going
                          to use a passage of Lorem Ipsum. You need to be sure
                          there isn't anything embarrassing
                        </p>
                        <p>
                          hidden in the middle of text. All the Lorem Ipsum
                          generators tend toitrrepeat predefined chunks.
                          Necessary, making this the first true generator on the
                          Internet.
                        </p>
                        <h4 className="title">Our Working Process</h4>
                        <ul className="liststyle">
                          <li>Yet this above sewed flirted opened ouch</li>
                          <li>Goldfinch realistic sporadic ingenuous</li>
                          <li>
                            Abominable this abidin far successfully then like
                            piquan
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="w-100"
                          src="/assets/images/service/service-02.png"
                          alt="Service Images"
                        />
                      </div>
                    </div>
                  </div> */}
                  <MDXRenderer>{mdx.body}</MDXRenderer>
                </div>
              </div>
            </div>
          </div>
          <div className="row service-one-wrapper pt--70">
            {childServices.map(({ node: service }) => (
              <ServiceItem key={service.id} service={service} columnSize="4" />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query ServicePageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredOneTitle
        featuredOneDetails
        featuredOneImage {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            parent
            info
            icon
          }
        }
      }
    }
  }
`;
