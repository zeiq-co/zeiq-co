import React from 'react';
import Img from 'gatsby-image';

const BlogItem = ({ data }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <div className="blog blog-style--1">
      {data.frontmatter.featuredImage !== null && (
        <div className="thumbnail">
          <a href={data.fields.slug}>
            <Img
              className="w-100"
              alt={data.frontmatter.title}
              fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </a>
        </div>
      )}
      <div className="content">
        <p className="blogtype">{data.frontmatter.category}</p>
        <h4 className="title">
          <a href={data.fields.slug}>{data.frontmatter.title}</a>
        </h4>

        <div className="blog-btn">
          <a className="rn-btn text-white" href={data.fields.slug}>
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default BlogItem;
