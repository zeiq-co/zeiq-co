import React from 'react';

import AboutHero from '../components/AboutHero';
import Buttons from '../components/Buttons';
import TeamGallery from '../components/TeamGallery';
import BlockQuote from '../components/BlockQuote';
import CallToAction from '../components/CallToAction';
import Tech from '../components/Tech';
import Seo from '../components/Seo';
import config from '../config';

export default class About extends React.Component {
  render() {
    const { data } = this.props;
    const { contentfulAbout: about } = data;
    const { edges: team } = data.allContentfulTeamMember;
    const { edges: brand } = data.allContentfulTech;
    // console.log(brand);

    return (
      <div>
        <Seo
          title="About"
          description="We are web development company"
          url={config.siteUrl}
          image="/img/favicon.png"
        />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <AboutHero about={about} />
                <Tech brand={brand} />
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
        title
        sizes(maxWidth: 1000) {
          ...GatsbyContentfulSizes
        }
      }
      title
      description {
        description
      }
    }
    allContentfulTeamMember(sort: { fields: [order] }) {
      edges {
        node {
          id
          image {
            title
            sizes(maxWidth: 550) {
              ...GatsbyContentfulSizes
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
