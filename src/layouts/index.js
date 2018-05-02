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
      <Helmet>
        {/* General tags */}
        <meta name="description" content={config.description} />
        <meta name="image" content={config.image} />
        {/* Schema.org tags */}
        {/* <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script> */}
        {/* OpenGraph tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={config.siteName} />
        <meta property="og:description" content={config.description} />
        <meta property="og:image" content={config.image} />
        {/* <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ''} */}
        />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.twitterCreator} />
        <meta name="twitter:title" content={config.siteName} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:image" content={config.image} />
      </Helmet>
      <Header />
      {/* meta={[
            // Search Engine
            { name: 'image', content: image },
            { name: 'description', content: description },
            { itemprop: 'description', content: description },
            { itemprop: 'image', content: image },
            { name: 'author', content: APP_AUTHOR },

            // Twitter
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: twitter },
            { name: 'twitter:description', content: description },
            { name: 'twitter:title', content: APP_NAME },
            { name: 'twitter:creator', content: APP_AUTHOR },
            { name: 'twitter:image:src', content: image },

            // Open Graph general (Facebook, Linkdin & Google+)
            { name: 'og:title', content: APP_NAME },
            { name: 'og:image', content: image },
            { name: 'og:site_name', content: APP_NAME },
            { name: 'og:description', content: description },
            { name: 'og:locale', content: 'en_us' },
            { name: 'fb:admins', content: fbUserId },
            { name: 'fb:app_id', content: fbAppId },
            { name: 'og:type', content: type },
            { name: 'og:url', content: SITE_URL },
          ]} */}
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
