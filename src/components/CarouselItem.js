import React from 'react';

const CarouselItem = ({ data }) => (
  <div className="thumb text-box">
    <h4>{data.title}</h4>
    <p>{data.description.description}</p>
    <a href="#" className="read-more">
      See How <i className="saulticon-arrow-forward" />
    </a>
  </div>
);

export default CarouselItem;
