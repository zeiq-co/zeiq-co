import React from 'react';

const BlogItem = ({ value }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <div className="blog blog-style--1">
      <div className="thumbnail">
        <a href="/blog-details">
          <img
            className="w-100"
            src={`/assets/images/blog/blog-${value.images}.jpg`}
            alt="Blog Images"
          />
        </a>
      </div>
      <div className="content">
        <p className="blogtype">{value.category}</p>
        <h4 className="title">
          <a href="/blog-details">{value.title}</a>
        </h4>

        <div className="blog-btn">
          <a className="rn-btn text-white" href="/blog-details">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default BlogItem;
