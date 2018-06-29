import React from 'react';
import Link from 'gatsby-link';

import PostContent from '../components/PostContent';
import PostFeaturedImage from '../components/PostFeaturedImage';
import Seo from '../components/Seo';
import config from '../config';

class TechTemplate extends React.Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <div>
        <Seo
          title={data.contentfulTech.name}
          description="Tech we use"
          url={config.siteUrl}
          image="http://www.zeiq.co/img/favicon.png"
        />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <PostFeaturedImage image={data.contentfulTech.image} />
              </div>
              <div className="page-title-container">
                <h1>{data.contentfulTech.name}</h1>
                <p className="subtitle">Description</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default TechTemplate;

export const techQuery = graphql`
  query TechPage($id: String!) {
    # Select the post which equals this id.
    contentfulTech(id: { eq: $id }) {
      id
      slug
      name
      image {
        file {
          url
        }
      }
    }
  }
`;
