import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import ContactDetails from '../components/ContactDetails';
import WriteToUs from '../components/WriteToUs';
import ConnectWithUs from '../components/ConnectWithUs';
import Subscribe from '../components/Subscribe';
import Tweet from '../components/Tweet';
import Seo from '../components/Seo';
import config from '../config';

export default class Contact extends React.Component {
  render() {
    const { data } = this.props;
    const contact = data.contentfulContact;
    const social = data.contentfulContact;

    return (
      <div>
        <Seo
          title="Contact"
          description="Let's discuss how we can help you!"
          url={config.siteUrl}
          image="/img/favicon.png"
        />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row eq-height-container">
              <ContactDetails contact={contact} />
              <WriteToUs />
            </div>
            <div className="row eq-height-container">
              <ConnectWithUs social={social} />
              <Subscribe />
              <Tweet />
            </div>
          </div>
        </main>
      </div>
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
      mediumId
      githubId
    }
  }
`;
