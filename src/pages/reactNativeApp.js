import React from 'react';

import Seo from '../components/Seo';
import config from '../config';
import ReactNativeAppContent from '../components/ReactNativeAppContent';
import AppScreens from '../components/AppScreens';

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
          <div className="container">
            <div className="row">
              <ReactNativeAppContent />
              <AppScreens />
            </div>
          </div>
        </main>
      </div>
    );
  }
}