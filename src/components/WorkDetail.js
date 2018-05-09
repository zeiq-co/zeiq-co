import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';

const WorkDetail = ({ work }) => (
  <div>
    <div className="post-featured-image">
      <img src={work.image.file.url} alt="featured" />
    </div>
    <div className="page-title-container">
      <h2>{work.title}</h2>
      <p className="subtitle">{work.description.description}</p>
    </div>
    <div className="col">
      <h4>About</h4>
      <p>
        {' '}
        <ReactMarkdown source={work.content.content} />
      </p>
    </div>
  </div>
);

export default WorkDetail;
