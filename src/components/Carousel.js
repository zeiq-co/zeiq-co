import React from 'react';
import Link from 'gatsby-link';

const Carousel = () => (
  <div className="owl-carousel owl-thumbs-3">
    <div className="thumb text-box">
      <h4>Digital Marketing</h4>
      <p>
        In this industry of “Business as usual”, we tend to give you less of the
        same in anything that we do.
      </p>
      <a href="#" className="read-more">
        See How <i className="saulticon-arrow-forward" />
      </a>
    </div>
    <div className="thumb text-box">
      <h4>Big Data</h4>
      <p>
        To reach the maximum potential of digital marketing, firms use social
        media to create a channel of information.
      </p>
      <a href="#" className="read-more">
        See How <i className="saulticon-arrow-forward" />
      </a>
    </div>
    <div className="thumb text-box">
      <h4>Risk Analysis</h4>
      <p>
        A key objective is engaging digital marketing customers and allowing
        them to interact with the brand.
      </p>
      <a href="#" className="read-more">
        See How <i className="saulticon-arrow-forward" />
      </a>
    </div>
    <div className="thumb text-box">
      <h4>Brand Identity</h4>
      <p>
        Yet brands must be careful not to be excessive on the use of this type
        of marketing as well as solely relying on it.
      </p>
      <a href="#" className="read-more">
        See How <i className="saulticon-arrow-forward" />
      </a>
    </div>
  </div>
);

export default Carousel;
