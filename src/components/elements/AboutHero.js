import React from 'react';
import { Link } from 'gatsby';

const AboutHero = () => (
  <div className="rn-finding-us-area rn-finding-us bg_color--1">
    <div className="inner">
      <div className="content-wrapper">
        <div className="content">
          <h4 className="theme-gradient">Find Your Work Now</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that.
          </p>
          <Link className="rn-btn btn-white" to="/contact">
            Get Started
          </Link>
        </div>
      </div>
      <div className="thumbnail">
        <div className="image">
          <img
            src="/assets/images/about/finding-us-01.png"
            alt="Finding Images"
          />
        </div>
      </div>
    </div>
  </div>
);

export default AboutHero;
