import React from 'react';
import BlogContent from '../elements/BlogContent';
import BlogItem from '../elements/BlogItem';

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
          <BlogItem key={i} value={value} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
