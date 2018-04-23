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
        meta={[{ name: 'description', content: config.description }]}
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
