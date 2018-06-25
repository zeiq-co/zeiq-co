import React from 'react';
import Link from 'gatsby-link';
import TechItem from './TechItem';

const Tech = ({ brand }) => (
  <div className="brand-gallery">
    <div className="row eq-height-container">
      {brand.map(brandItem => (
        <TechItem key={brandItem.node.id} data={brandItem.node} />
      ))}
    </div>
  </div>
);

export default Tech;
