import React from 'react';

import WhatYouNeedIsNotListed from '../components/WhatYouNeedIsNotListed';
import Seo from '../components/Seo';
import ServicesTitle from '../components/ServicesTitle';
import config from '../config';
import ServicesNavigation from '../components/ServicesNavigation';

export default class Jobs extends React.Component{
    render(){
        return(
    <div>
        <Seo
            title="Services"
            description="Zeiq offers a wide array of services related to developing a website.If something you expect us to do is not listed here,do get in touch!"
            url={config.siteUrl}
            image="/img/favicon.png"
        />
        <main id="content" className="white-background">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <ServicesTitle />
                <WhatYouNeedIsNotListed />
                </div>
            </div>
            </div>
        </main>
    </div>
        )
    }
}