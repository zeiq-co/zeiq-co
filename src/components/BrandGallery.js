import React from 'react';
import Link from 'gatsby-link';
import BrandItem from './BrandItem';

const BrandGallery = ({ brand }) => (
  <div className="brand-gallery">
    <div className="row eq-height-container">
      {brand.map(brandItem => (
        <BrandItem key={brandItem.node.id} data={brandItem.node} />
      ))}
    </div>
  </div>
);

export default BrandGallery;
