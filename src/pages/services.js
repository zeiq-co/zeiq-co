import React from 'react';

import ServicesTitle from '../components/ServicesTitle';
import ServicesNavigation from '../components/ServicesNavigation';
import ServiceItem from '../components/ServiceItem';
import WhatYouNeedIsNotListed from '../components/WhatYouNeedIsNotListed';
import Seo from '../components/Seo';
import config from '../config';

export default class Services extends React.Component {
  componentDidMount() {
    $('.tab-links a').on('click', function(e) {
      var $this = $(this),
        $parent = $this.parent();
      e.preventDefault();
      if ($this.hasClass('active')) {
        return;
      }
      $parent.siblings('li').each(function() {
        var $link = $('a', this);
        $link.removeClass('active');
        $($link.attr('href')).removeClass('active');
      });
      $this.addClass('active');
      $($this.attr('href')).addClass('active');
    });
  }

  render() {
    const { data } = this.props;
    const { edges: services } = data.allContentfulService;

    return (
      <div>
        <Seo
          title="Services"
          description="Zeiq offers a wide array of services related to developing a website. Right from creating a template for your website to hosting and making it to SEO friendly, we take all the responsibilities.What you achieve with us is more than just the names of our services. If something you expect us to do is not listed here,do get in touch!"
          url={config.siteUrl}
          image="/img/favicon.png"
        />
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
    allContentfulService(sort: { fields: [createdAt] }) {
      edges {
        node {
          id
          title
          image {
            file {
              url
            }
          }
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
