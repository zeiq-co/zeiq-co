import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import config from '../config';

const Seo = ({ title, description, url, image }) => {
  const pageTitle = `${title} | ${config.siteName}`;

  return (
    <Helmet>
      {/* General tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
};

Seo.defaultProps = {
  url: config.siteUrl,
  image: `${config.siteUrl}/${config.logo}`,
};

export default Seo;
