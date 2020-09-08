import React from 'react';
import ServiceOne from '../elements/ServiceOne';

const HomeSlider = ({ data }) => (
  <div className="slider-activation">
    <div
      className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-10">
            <div className="inner">
              <h1 className="title theme-gradient mt--80">{data.slogan}</h1>
            </div>
          </div>
        </div>
        <div className="service-wrapper service-white mt--40">
          <ServiceOne data={data.features} />
        </div>
      </div>
    </div>
  </div>
);

export default HomeSlider;
