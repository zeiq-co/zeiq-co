import React from 'react';
import Link from 'gatsby-link';

const BlogFeaturedImage = ({blog}) => (
  <div className="col-12">
    <article className="post featured has-thumbnail">
      <a href="post.html" className="feature-image-link">
        <img src={blog.featuredImage.file.url} alt="blog" />
      </a>
      <div className="post-details">
        <h3>
          <a href="post.html">{blog.title}</a>
        </h3>
        <hr />
        <p>{blog.description.description}</p>
        <Link to="/post" className="read-more">
          Continue reading <i className="saulticon-arrow-forward" />
        </Link>
      </div>
    </article>
  </div>
);

export default BlogFeaturedImage;
