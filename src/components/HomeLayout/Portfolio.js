import React from 'react';
import { Link } from 'gatsby';
import PortfolioList from '../elements/PortfolioList';

const Portfolio = ({ projects, showMore }) => (
  <div className="portfolio-sacousel-inner">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center service-style--3 mb--15">
            <h2 className="title">Our Work</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <PortfolioList
          styevariation="text-center mt--40"
          column="col-lg-4 col-md-6 col-sm-6 col-12"
          projects={projects}
        />
      </div>
      {showMore && (
        <div className="row">
          <div className="col-lg-12">
            <div className="view-more-btn mt--60 text-center">
              <Link className="rn-button-style--2 btn-solid" to="/work">
                <span>View More</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Portfolio;
