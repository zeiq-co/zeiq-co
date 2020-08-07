import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const BlogItem = ({ data }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <div className="blog blog-style--1">
      {data.frontmatter.featuredImage !== null && (
        <div className="thumbnail">
          <Link to={data.fields.slug}>
            <Img
              className="w-100"
              alt={data.frontmatter.title}
              fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </Link>
        </div>
      )}
      <div className="content">
        <p className="blogtype">{data.frontmatter.category}</p>
        <h4 className="title">
          <Link to={data.fields.slug}>{data.frontmatter.title}</Link>
        </h4>

        <div className="blog-btn">
          <Link className="rn-btn text-white" to={data.fields.slug}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default BlogItem;
