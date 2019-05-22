import React from 'react';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';
import styled from 'styled-components';

const FeaturedImage = styled.div`
  padding: 0 22rem;
`;

const WorkDetail = ({ work }) => (
  <div>
    <FeaturedImage className="post-featured-image">
      <Img
        sizes={work.image.sizes}
        alt={work.image.title}
        title={work.image.title}
        backgroundColor="#f1f1f1"
        style={{ height: '50%' }}
      />
    </FeaturedImage>
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
