import React from 'react';

const BrandsList = ({ data }) => (
  <>
    <ul className="brand-style-2">
      {data.map(({ node: item }) => (
        <li key={item.title}>
          <img src={item.image} alt={item.title} />
        </li>
      ))}
    </ul>
  </>
);

export default BrandsList;
