import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import config from '../config';
import AppSellingContent from '../components/AppSellingContent';

const Wrapper = styled.div`
  background: #f6f5fd;
`;

export default class AppForSale extends React.Component {
  render() {

    return (
      <div>
        <Seo
          title="AppForSale"
          description="We selling our Delivery App"
          url={config.siteUrl}
          image="/img/favicon.png"
        />
        <main id="content" className="white-background">
          <Wrapper className="container">
            <div className="row">
              <AppSellingContent />
            </div>
          </Wrapper>
        </main>
      </div>
    );
  }
}