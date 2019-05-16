import React from 'react';
// import Link from 'gatsby-link';
// import Helmet from 'react-helmet';

import WorkList from '../components/WorkList';
import Seo from '../components/Seo';
import config from '../config';

export default class Work extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: work } = data.allContentfulWork;

    return (
      <div>
        <Seo
          title="Work"
          description="Some of our recent works"
          url={config.siteUrl}
          image="/img/favicon.png"
        />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <WorkList
                introVisible={false}
                workList={work}
                buttonVisible={false}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export const query = graphql`
  query WorkQuery {
    allContentfulWork(sort: { fields: [order] }) {
      edges {
        node {
          id
          title
          slug
          image {
            title
            sizes(maxWidth: 600) {
              ...GatsbyContentfulSizes
            }
          }
          description {
            description
          }
          url
        }
      }
    }
  }
`;
