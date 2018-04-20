import React from 'react';
import Link from 'gatsby-link';
import GetInTouchButton from './GetInTouchButton';

const Buttons = () => (
  <p className="text-center">
    <GetInTouchButton />
    <Link to="/services">
      <a className="button white has-arrow">All our services</a>
    </Link>
  </p>
);

export default Buttons;
