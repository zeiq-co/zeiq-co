import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import AboutHero from '../components/AboutHero';
import Carousel from '../components/Carousel';
import Buttons from '../components/Buttons';
import TeamGallery from '../components/TeamGallery';
import BlockQuote from '../components/BlockQuote';
import CallToAction from '../components/CallToAction';
import Tech from '../components/Tech';

export default class About extends React.Component {
  render() {
    const { data } = this.props;
    const { contentfulAbout: about } = data;
    const { edges: carousel } = data.allContentfulCarouselItem;
    const { edges: team } = data.allContentfulTeamMember;
    const { edges: brand } = data.allContentfulTech;
    // console.log(brand);
    return (
      <div>
        <Helmet title="About | Zeiq" />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <AboutHero about={about} />
                <Tech brand={brand} />
                {/* <Carousel carousel={carousel} /> */}
                <Buttons />
                <TeamGallery team={team} />
                <BlockQuote />
                <CallToAction />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export const query = graphql`
  query AboutQuery {
    contentfulAbout {
      id
      featuredImage {
        file {
          url
        }
      }
      title
      description {
        description
      }
    }
    allContentfulCarouselItem {
      edges {
        node {
          id
          title
          description {
            description
          }
        }
      }
    }
    allContentfulTeamMember(sort: { fields: [order] }) {
      edges {
        node {
          id
          image {
            file {
              url
            }
          }
          name
          position
          facebookId
          instagramId
          twitterId
          linkedInId
        }
      }
    }
    allContentfulTech(sort: { fields: [order] }) {
      edges {
        node {
          id
          slug
          image {
            file {
              url
            }
          }
          name
        }
      }
    }
  }
`;
