import React from 'react';
import Link from 'gatsby-link';

import WorkList from '../components/WorkList';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <main id="content" className="white-background">
        <div className="container">
          <div className="row">
            <WorkList introVisible={true} />
          </div>
        </div>
      </main>
    );
  }
}

export const query = graphql`
  query HomeQuery {
    allContentfulHome {
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
  }
`;
