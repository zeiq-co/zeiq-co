import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import ServicesTitle from '../components/ServicesTitle';
import ServicesNavigation from '../components/ServicesNavigation';
import ServiceItem from '../components/ServiceItem';
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
    const { data } = this.props;
    const { edges: services } = data.allContentfulService;

    return (
      <div>
        <Helmet title="Services | Zeiq" />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ServicesTitle />
                <div className="row">
                  <ServicesNavigation services={services} />
                  <ServiceItem services={services} />
                </div>
                <WhatYouNeedIsNotListed />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export const query = graphql`
  query ServicesQuery {
    allContentfulService {
      edges {
        node {
          id
          title
          slug
          shortDescription
          description {
            description
          }
        }
      }
    }
  }
`;
