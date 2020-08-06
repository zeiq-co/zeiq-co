import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import SliderOne from '../components/SliderOne';
import About from '../components/HomeLayout/About';
import Portfolio from '../components/HomeLayout/Portfolio';
import Blog from '../components/HomeLayout/Blog';
import ServiceTwo from '../components/elements/ServiceTwo';
import Testimonial from '../components/elements/Testimonial';
import BrandTwo from '../components/elements/BrandTwo';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <div className="slider-wrapper">
          <SliderOne />
        </div>
        <div className="about-area about-position-top pb--120">
          <About />
        </div>
        <div className="service-area ptb--80  bg_image bg_image--3">
          <div className="container">
            <ServiceTwo />
          </div>
        </div>
        <div className="portfolio-area ptb--120">
          <Portfolio />
        </div>
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <Blog />
        </div>
        <div className="rn-brand-area brand-separation bg_color--5 pb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
