import React from 'react';
import { Link } from 'gatsby';
import BlogItem from '../elements/BlogItem';

const Blog = ({ posts }) => {
  return (
    <div className="container">
      <div className="row align-items-end">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="section-title text-left">
            <h2>Latest News</h2>
            <p>A home for inspiring stories on business and technology.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
            <Link className="btn-transparent rn-btn-dark" to="/blog">
              <span className="text">View All News</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="row mt--60 mt_sm--40">
        {posts.map(({ node: post }) => (
          <BlogItem key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
