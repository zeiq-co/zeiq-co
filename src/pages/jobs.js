import React from 'react';

import Seo from '../components/Seo';
import JobsTitle from '../components/JobsTitle';
import config from '../config';
export default class Jobs extends React.Component {
  render() {
    return (
      <div>
        <Seo
          title="Jobs"
          description="Zeiq offers a wide array of services related to developing a website.If something you expect us to do is not listed here,do get in touch!"
          url={config.siteUrl}
          image="/img/favicon.png"
        />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <JobsTitle />
                <div className="call-to-action">
                  <a
                    href="https://www.zeiq.academy/joinUs"
                    className="button has-arrow"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
