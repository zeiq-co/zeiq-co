import React from 'react';
import Link from 'gatsby-link';
import GetInTouchButton from './GetInTouchButton';

const SingleWorkButton = () => (
  <p className="text-center">
    <GetInTouchButton />
    <Link to="/services/">
      <a className="button white has-arrow">visit site</a>
    </Link>
  </p>
);

export default SingleWorkButton;
