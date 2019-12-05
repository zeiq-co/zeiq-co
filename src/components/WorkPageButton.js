import React from 'react';
import GetInTouchButton from './GetInTouchButton';

const WorkPageButton = ({ url }) => (
  <p className="text-center">
    <GetInTouchButton />
    <a href={url} className="button white has-arrow" target="_blank">
      visit site
    </a>
  </p>
);

export default WorkPageButton;
