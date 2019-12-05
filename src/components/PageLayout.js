/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';

import Layout from './Layout';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  h1 {
    text-align: center;
  }
  h2 {
    color: #8b99a3;
    text-align: center;
  }
  h3 {
    text-align: center;
  }
  p {
    margin-bottom: 1rem;
    font-size: 18px;
  }
  .page-content {
    img {
      display: flex;
      margin: 3rem auto 4rem auto;
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export default function PageTemplate({ children }) {
  return (
    <Layout>
      <Container>
        <MDXProvider
          components={{
            h1: props => <h1 className="" {...props} />,
            h2: props => <h2 className="" {...props} />,
            h3: props => <h3 className="" {...props} />,
            p: props => <p className="" {...props} />,
          }}>
          {children}
        </MDXProvider>
      </Container>
    </Layout>
  );
}
