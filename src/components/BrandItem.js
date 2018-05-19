import React from 'react';
import Link from 'gatsby-link';

const BrandItem = ({ data }) => (
  <div className="col-6 col-md-4 col-lg-3">
    <a className="brand-item eq-height" style={{ height: 197.875 }}>
      <img src={data.image.file.url} alt={data.name} />
    </a>
  </div>
);

export default BrandItem;
