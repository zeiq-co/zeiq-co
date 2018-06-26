import React from 'react';
import Link from 'gatsby-link';
import Truncate from 'react-truncate';

import config from '../config';

const BlogFeaturedImage = ({ blog }) => {
  const url = `${config.mediumPublicationUrl}/${blog.uniqueSlug}`;
  return (
    <div className="col-12">
      <article className="post featured has-thumbnail">
        <a className="feature-image-link">
          <img
            src={
              `https://cdn-images-1.medium.com/max/800/${
                blog.virtuals.previewImage.imageId
              }` || 'tmp/sample-big.png'
            }
            alt="blog"
          />
        </a>
        <div className="post-details">
          <h3>
            <a>{blog.title}</a>
          </h3>
          <hr />
          <p>
            <Truncate lines={3} ellipsis="">
              {blog.virtuals.subtitle}
            </Truncate>
          </p>
          <a href={url} className="read-more">
            Continue reading <i className="saulticon-arrow-forward" />
          </a>
        </div>
      </article>
    </div>
  );
};

export default BlogFeaturedImage;
