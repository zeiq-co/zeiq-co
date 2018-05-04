import React from 'react';
import Link from 'gatsby-link';

import GetInTouchButton from './GetInTouchButton';

const WorkPageButton = ({url}) => (
  <p className="text-center">
    <GetInTouchButton />

    <a href={url} className="button white has-arrow">visit site</a>

  </p>
);

export default WorkPageButton;
