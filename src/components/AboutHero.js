import React from 'react';
import Link from 'gatsby-link';
import AboutTitle from './AboutTitle';

const AboutHero = ({about}) => (
  <div>
    <div className="post-featured-image">
      <img
        src={about.featuredImage.file.url}
        style={{width: 1180, height: 680}}
        alt="featured"
      />
    </div>
    <div className="page-title-container">
      <h2>{about.title}</h2>
      <p className="subtitle">{about.description.description}</p>
    </div>
  </div>
);

export default AboutHero;
