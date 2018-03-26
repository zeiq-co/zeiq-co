import React from 'react';
import Link from 'gatsby-link';

const BlogFeaturedImage = () => (
  <div className="col-12">
    <article className="post featured has-thumbnail">
      <a href="post.html" className="feature-image-link">
        <img
          src="tmp/sample-big.png"
          style={{ width: 1180, height: 680 }}
          alt="blog"
        />
      </a>
      <div className="post-details">
        <h3>
          <a href="post.html">Onboarding new designers to your product team</a>
        </h3>
        <hr />
        <p>
          Designing past mobile or desktop interaction boundaries and into the
          physical world…
        </p>
        <a href="post.html" className="read-more">
          Continue reading <i className="saulticon-arrow-forward" />
        </a>
      </div>
    </article>
  </div>
);

export default BlogFeaturedImage;
