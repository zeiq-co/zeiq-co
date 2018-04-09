import React from 'react';
import Link from 'gatsby-link';

const BlogItem = ({ data }) => (
  <article className="grid-item post has-thumbnail">
    <Link to="/post" className="feature-image-link">
      <img src={data.image.file.url} alt="" />
    </Link>
    <div className="post-details">
      <h4>
        <a href="post.html">{data.title}</a>
      </h4>
      <p>{data.description.description}&hellip;</p>
      <p className="meta clearfix">
        <a href="#" className="author-link">
          Mike Spencer
        </a>{' '}
        <a href="post.html" className="read-more">
          Details <i className="saulticon-arrow-forward" />
        </a>
      </p>
    </div>
  </article>
);

export default BlogItem;
