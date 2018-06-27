import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';

const WorkDetail = ({ work }) => (
  <div>
    <div className="post-featured-image">
      <img
        src={work.image.file.url}
        alt="featured"
        style={{ width: '60%', height: '60%' }}
      />
    </div>
    <div className="page-title-container">
      <h1>{work.title}</h1>
      <p className="subtitle">{work.description.description}</p>
    </div>
    <div className="col">
      <h2>About</h2>
      <p>
        {' '}
        <ReactMarkdown source={work.content.content} />
      </p>
    </div>
  </div>
);

export default WorkDetail;
