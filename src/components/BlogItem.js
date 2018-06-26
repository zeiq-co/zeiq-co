import React from 'react';
import Link from 'gatsby-link';
import Truncate from 'react-truncate';

import config from '../config';

const BlogItem = ({ data }) => {
  const url = `${config.mediumPublicationUrl}/${data.uniqueSlug}`;
  return (
    <article className="grid-item post has-thumbnail">
      <a href={url} className="feature-image-link">
        <img
          src={
            `https://cdn-images-1.medium.com/max/800/${
              data.virtuals.previewImage.imageId
            }` || 'tmp/sample-post.png'
          }
          alt=""
        />
      </a>
      <div className="post-details">
        <h4>
          <a>{data.title}</a>
        </h4>
        <p>
          <Truncate lines={3} ellipsis="">
            {data.virtuals.subtitle}
          </Truncate>&hellip;
        </p>
        <p className="meta clearfix">
          <a className="author-link">{data.author.name}</a>
          <a href={url} className="read-more">
            Details <i className="saulticon-arrow-forward" />
          </a>
        </p>
      </div>
    </article>
  );
};

export default BlogItem;
