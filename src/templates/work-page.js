import React from 'react';
import Link from 'gatsby-link';

import AboutHero from '../components/AboutHero';
import WorkPageButton from '../components/WorkPageButton';
import BlockQuote from '../components/BlockQuote';
import CallToAction from '../components/CallToAction';
import WorkDetail from '../components/WorkDetail';
import Seo from '../components/Seo';
import config from '../config';

class WorkTemplate extends React.Component {
  render() {
    // console.log(brand);
    const { data } = this.props;
    // console.log(data);
    return (
      <div>
        <Seo
          title={data.contentfulWork.title}
          description="Our works"
          url={config.siteUrl}
          image="http://www.zeiq.co/img/favicon.png"
        />
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
      content {
        content
      }
    }
  }
`;
