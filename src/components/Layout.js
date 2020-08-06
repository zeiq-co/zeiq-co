import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import CallAction from './elements/CallAction';
import Header from './Header';
import Footer from './Footer';

import '../index.scss';

const Container = styled.div`
  min-height: 70vh;
`;

const IndexLayout = ({ children, hideHeader }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>{config.siteName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description={config.description} />
      </Helmet>
      <GlobalStyle />
      {!hideHeader && (
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
      )}
      <Container>{children}</Container>
      <CallAction />
      <Footer />
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </>
  </ThemeProvider>
);

export default IndexLayout;
