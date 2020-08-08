import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import { useStaticQuery, graphql } from 'gatsby';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import CallAction from './elements/CallAction';
import Header from './Header';
import Footer from './Footer';

import '../index.scss';

const pageQuery = graphql`
  query LayoutPageQuery {
    contactYaml {
      facebook
      github
      instagram
      twitter
    }
    allMdx(
      filter: {
        frontmatter: { type: { eq: "service" }, isFeatured: { eq: true } }
      }
      sort: { fields: frontmatter___listingOrder, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const IndexLayout = ({ children, hideHeader }) => {
  const data = useStaticQuery(pageQuery);
  // console.log('data2', data);

  return (
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
            services={data.allMdx.edges}
          />
        )}
        {children}
        <CallAction />
        <Footer data={data.contactYaml} />
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
      </>
    </ThemeProvider>
  );
};

export default IndexLayout;
