import React from 'react';
import BlogContent from '../elements/BlogContent';

const Blog = () => {
  const PostList = BlogContent.slice(0, 3);

  return (
    <div className="container">
      <div className="row align-items-end">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="section-title text-left">
            <h2>Latest News</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
            <a className="btn-transparent rn-btn-dark" href="/blog">
              <span className="text">View All News</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row mt--60 mt_sm--40">
        {PostList.map((value, i) => (
          <div className="col-lg-4 col-md-6 col-12" key={i}>
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
        ))}
      </div>
    </div>
  );
};

export default Blog;
