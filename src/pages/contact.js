import React from 'react';
import Link from 'gatsby-link';

import ContactDetails from '../components/ContactDetails';
import WriteToUs from '../components/WriteToUs';
import ConnectWithUs from '../components/ConnectWithUs';
import Subscribe from '../components/Subscribe';
import Tweet from '../components/Tweet';

export default class Contact extends React.Component {
  componentDidMount() {
    jQuery('#address-selector .bottom-button').on('click', function(e) {
      e.preventDefault();
      jQuery('#address-selector').toggleClass('show-map');
    });
  }
  render() {
    const { data } = this.props;
    const contact = data.contentfulContact;
    const social = data.contentfulContact;
    console.log(contact);
    return (
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
