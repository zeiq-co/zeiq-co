import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import config from '../config';
import ReactNativeAppContent from '../components/ReactNativeAppContent';

const Wrapper = styled.div`
  background: #f6f5fd;
`;

export default class ReactNativeApp extends React.Component {
  render() {

    return (
      <div>
        <Seo
          title="React-Native-App"
          description="Our Delivery Service App"
          url={config.siteUrl}
          image="/img/favicon.png"
        />
        <main id="content" className="white-background">
          <Wrapper className="container">
            <div className="row">
              <ReactNativeAppContent />
            </div>
          </Wrapper>
        </main>
      </div>
    );
  }
}