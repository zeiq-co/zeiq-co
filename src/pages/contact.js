import React from 'react';
import Link from 'gatsby-link';

import ContactDetails from '../components/ContactDetails';
import WriteToUs from '../components/WriteToUs';
import ConnectWithUs from '../components/ConnectWithUs';
import Subscribe from '../components/Subscribe';
import Tweet from '../components/Tweet';

export default class Contact extends React.Component {
  render() {
    return (
      <main id="content" className="white-background">
        <div className="container">
          <div className="row eq-height-container">
            <ContactDetails />
            <WriteToUs />
          </div>
          <div className="row eq-height-container">
            <ConnectWithUs />
            <Subscribe />
            <Tweet />
          </div>
        </div>
      </main>
    );
  }
}

export const query = graphql`
  query ContactQuery {
    contentfulContact {
      id
      address
      telephone
      email
      facebookId
      twitterId
      instagramId
      linkedInId
    }
  }
`;
