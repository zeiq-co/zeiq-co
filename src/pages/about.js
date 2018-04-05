import React from 'react';
import Link from 'gatsby-link';
import AboutTitle from '../components/AboutTitle';
import AboutFeaturedImage from '../components/AboutFeaturedImage';
import Carousel from '../components/Carousel';
import AboutButtons from '../components/AboutButtons';
import TeamGallery from '../components/TeamGallery';
import BlockQuote from '../components/BlockQuote';
import BrandGallery from '../components/BrandGallery';
import CallToAction from '../components/CallToAction';

export default class About extends React.Component {
  render() {
    return (
      <main id="content" className="white-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <AboutFeaturedImage />
              <AboutTitle />
              <Carousel />
              <AboutButtons />
              <TeamGallery />
              <BlockQuote />
              <BrandGallery />
              <CallToAction />
            </div>
          </div>
        </div>
      </main>
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
    allContentfulTeamMember {
      edges {
        node {
          id
          image {
            id
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
    allContentfulBrand {
      edges {
        node {
          id
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
