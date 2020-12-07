/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';

import Layout from './Layout';

const Container = styled.div`
  h1 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
  h3 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 1rem;
    font-size: 18px;
  }
  .mdx-content {
    margin: 4rem 10rem;
  }
  @media only screen and (max-width: 767px) {
    .mdx-content {
      margin: 2rem;
    }
  }
  .about-area {
    margin-top: 8rem;
  }
  .rn-finding-us-area {
    margin-bottom: 8rem;
  }
  .page-content {
    img {
      display: flex;
      margin: 3rem auto 4rem auto;
      box-shadow: ${(props) => props.theme.boxShadow};
    }
  }
`;

export default function PageTemplate({ children }) {
  return (
    <Layout>
      <Container>
        <MDXProvider
          components={{
            h1: (props) => <h1 {...props} />,
            h2: (props) => <h2 {...props} />,
            h3: (props) => <h3 {...props} />,
            p: (props) => <p {...props} />,
          }}
        >
          {children}
        </MDXProvider>
      </Container>
    </Layout>
  );
}
