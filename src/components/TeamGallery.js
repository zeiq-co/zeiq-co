import React from 'react';
import Link from 'gatsby-link';

const TeamGallery = () => (
  <div className="team-gallery">
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <h1 className="no-bottom">We guys</h1>
        <h3>are always game</h3>
        <p>
          A small closely knit team of cool folks. We’re professionals, although
          we dont wear ties.
        </p>
        <p className="extra-margin-bottom">
          CHA-CHING!<br /> <a href="#">We’re Hiring!!!</a>
        </p>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="team-member">
          <img src="tmp/sample-team.png" alt="" />
          <div className="team-member-details">
            <h4>Ed Holmes</h4>
            <p>Founder, CEO</p>
            <p className="social-links">
              <a href="#" className="social-link saulticon">
                facebook
              </a>
              <a href="#" className="social-link saulticon">
                twitter
              </a>
              <a href="#" className="social-link saulticon">
                linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="team-member">
          <img src="tmp/sample-team.png" alt="" />
          <div className="team-member-details">
            <h4>Tom Friedman</h4>
            <p>Co-Founder, Director</p>
            <p className="social-links">
              <a href="#" className="social-link saulticon">
                facebook
              </a>
              <a href="#" className="social-link saulticon">
                twitter
              </a>
              <a href="#" className="social-link saulticon">
                linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="team-member">
          <img src="tmp/sample-team.png" alt="" />
          <div className="team-member-details">
            <h4>Anita Gibbs</h4>
            <p>CTO, Tech Head</p>
            <p className="social-links">
              <a href="#" className="social-link saulticon">
                instagram
              </a>
              <a href="#" className="social-link saulticon">
                github
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="team-member">
          <img src="tmp/sample-team.png" alt="" />
          <div className="team-member-details">
            <h4>Mike Spencer</h4>
            <p>Design Director</p>
            <p className="social-links">
              <a href="#" className="social-link saulticon">
                facebook
              </a>
              <a href="#" className="social-link saulticon">
                twitter
              </a>
              <a href="#" className="social-link saulticon">
                instagram
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="team-member">
          <img src="tmp/sample-team.png" alt="" />
          <div className="team-member-details">
            <h4>Sasha Taylor</h4>
            <p>Marketing Head</p>
            <p className="social-links">
              <a href="#" className="social-link saulticon">
                twitter
              </a>
              <a href="#" className="social-link saulticon">
                googleplus
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamGallery;
