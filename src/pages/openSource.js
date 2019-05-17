import React from 'react';

import Seo from '../components/Seo';
import OpenSourceTitle from '../components/OpenSourceTitle';
import config from '../config';
export default class OpenSouce extends React.Component{
    render(){
        return(
            <div>
        <Seo
          title="Open Source"
          description="Zeiq offers a wide array of services related to developing a website.If something you expect us to do is not listed here,do get in touch!"
          url={config.siteUrl}
          image="/img/favicon.png"
        />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <OpenSourceTitle />
              </div>
            </div>
          </div>
        </main>
      </div>
        )
    }
}