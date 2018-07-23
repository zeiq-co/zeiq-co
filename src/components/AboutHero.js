import React from 'react';
import Img from 'gatsby-image';

import AboutTitle from './AboutTitle';

const AboutHero = ({ about }) => (
  <div>
    <div className="post-featured-image">
      <Img
        sizes={about.featuredImage.sizes}
        alt={about.featuredImage.title}
        title={about.featuredImage.title}
        backgroundColor="#f1f1f1"
      />
    </div>
    <div className="page-title-container">
      <h2>{about.title}</h2>
      <p className="subtitle">{about.description.description}</p>
    </div>
  </div>
);

export default AboutHero;
