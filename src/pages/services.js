import React from 'react';
import Link from 'gatsby-link';
import ServicesTitle from '../components/ServicesTitle';
import ServicesNavigation from '../components/ServicesNavigation';
import AllServices from '../components/AllServices';
import WhatYouNeedIsNotListed from '../components/WhatYouNeedIsNotListed';

export default class Services extends React.Component {
  componentDidMount() {
    jQuery('.tab-links a').on('click', function(e) {
      var $this = jQuery(this),
        $parent = $this.parent();
      e.preventDefault();
      if ($this.hasClass('active')) {
        return;
      }
      $parent.siblings('li').each(function() {
        var $link = jQuery('a', this);
        $link.removeClass('active');
        jQuery($link.attr('href')).removeClass('active');
      });
      $this.addClass('active');
      jQuery($this.attr('href')).addClass('active');
    });
  }
  render() {
    return (
      <main id="content" className="white-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ServicesTitle />
              <div className="row">
                <ServicesNavigation />
                <AllServices />
              </div>
              <WhatYouNeedIsNotListed />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
