import React from 'react';
import Link from 'gatsby-link';

const ConnectWithUs = ({ social }) => (
  <div className="col-md-6">
    <div
      className="grey-box text-center"
      style={{ backgroundColor: '#eff3f6' }}
    >
      <div className="overlay eq-height">
        <h3>Connect with us</h3>
        <p>
          We’re as accessible as your good neighbour. So much so that you can
          hand us over your keys too.
        </p>
        <p className="no-bottom">
          <a href={social.facebookId} className="social-link saulticon">
            facebook
          </a>{' '}
          <a href={social.twitterId} className="social-link saulticon">
            twitter
          </a>{' '}
          <i className="fab fa-linkedin-in" />
          <a href={social.linkedInId} className="social-link saulticon">
            linkedin
          </a>
          <a href={social.instagramId} className="social-link saulticon">
            instagram
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default ConnectWithUs;
