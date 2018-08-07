import React from 'react';
import Link from 'gatsby-link';

const AuthorInfo = () => (
  <div className="author-info col-12 extra-margin-bottom">
    <h5>About the author</h5>
    <div className="author-avatar">
      <img src="/img/sample-avatar.png" alt="" />
    </div>
    <h4>
      <a href="#">Rory Thompson</a>
    </h4>
    <p className="social-links">
      <a href="#" className="social-link saulticon">
        facebook
      </a>
      <a href="#" className="social-link saulticon">
        twitter
      </a>
      <a href="#" className="social-link saulticon">
        dribbble
      </a>
    </p>
    <div className="author-description">
      Rory slid back into his former position. Getting up early all the time",
      he thought, it makes you stupid. You've got to get enough sleep in order
      to reach to <a href="#">sault.io</a>.
    </div>
  </div>
);

export default AuthorInfo;
