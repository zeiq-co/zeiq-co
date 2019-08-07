import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Description = styled.p`
  font-size: 1.2rem;
  @media only screen and (max-width: 768px) {
  font-size: 1.1rem; 
  }
  img {
    width: 45%;
    margin-bottom: 2rem;
  }
`;

const Wrapper = styled.div`
  max-width: 85% !important;
  justify-content: left;
  text-align: left;
`;

const ReactNativeAppContent = () => (
  <div className="container">
    <div className="row">
      <div className="col-4">
        One of three columns
      </div>
      <div className="col-8">
        <Wrapper className="page-title-container">
          <h2>React Native Delivery App</h2>
          <h3>Checkout cool stuff made by Zeiq</h3>
          <p>The real starter kit / app script with all the needed UI elements alongwith Redux,
            Graphql, NodeJS, MongoDB NativeBase to build iOS and Android app for delivery services.
          </p>
          <p><strong>Note: This product is a pure React Native application.</strong></p>
          <p>Total Sales: <strong>7</strong></p>
          <p>LAST APP UPDATED: <strong>August 7, 2019</strong></p>
          <Link to="/contact/" className="button big">
            Enquiry Now
          </Link>
        </Wrapper>
      </div>
  </div>
</div>
);

export default ReactNativeAppContent;