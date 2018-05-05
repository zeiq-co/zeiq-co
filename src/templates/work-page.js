import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import AboutHero from '../components/AboutHero';
import WorkPageButton from '../components/WorkPageButton';
import BlockQuote from '../components/BlockQuote';
import BrandGallery from '../components/BrandGallery';
import CallToAction from '../components/CallToAction';
import WorkDetail from '../components/WorkDetail';

class WorkTemplate extends React.Component {
  render() {
    // console.log(brand);
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <Helmet title="About | Zeiq" />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <WorkDetail work={data.contentfulWork} />
                <WorkPageButton url={data.contentfulWork.url} />
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

export default WorkTemplate;

export const workQuery = graphql`
  query WorkPage($id: String!) {
    # Select the post which equals this id.
    contentfulWork(id: { eq: $id }) {
      id
      slug
      image {
        file {
          url
        }
      }
      title
      url
      description {
        description
      }
    }
  }
`;
