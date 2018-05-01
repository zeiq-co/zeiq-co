import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../config/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const IndexLayout = ({ children, data }) => {
  const social = data.contentfulContact;
  return (
    <div>
      <Helmet
        title={config.siteName}
        meta={[
          // Search Engine
          { name: 'image', content: config.image },
          { name: 'description', content: config.description },
          { itemprop: 'description', content: config.description },
          { itemprop: 'image', content: config.image },

          // Twitter
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: config.twitterSite },
          { name: 'twitter:description', content: config.description },
          { name: 'twitter:title', content: config.siteName },
          { name: 'twitter:creator', content: config.twitterCreator },
          { name: 'twitter:image:src', content: config.image },

          // Open Graph general (Facebook, Linkdin & Google+)
          { name: 'og:title', content: config.siteName },
          { name: 'og:image', content: config.image },
          { name: 'og:site_name', content: config.siteName },
          { name: 'og:description', content: config.description },
          { name: 'og:locale', content: config.locale },
          { name: 'fb:admins', content: config.fbUserId },
          { name: 'fb:app_id', content: config.fbAppId },
          { name: 'og:type', content: config.type },
          { name: 'og:url', content: config.siteUrl },
        ]}
      />

      <Header />
      {children()}
      <Footer social={social} />
    </div>
  );
};
IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default IndexLayout;

export const query = graphql`
  query LayoutQuery {
    contentfulContact {
      facebookId
      twitterId
      instagramId
      linkedInId
    }
  }
`;
