import React from 'react';
import Link from 'gatsby-link';

import ContactDetails from '../components/ContactDetails';
import WriteToUs from '../components/WriteToUs';
import ConnectWithUs from '../components/ConnectWithUs';
import Subscribe from '../components/Subscribe';
import Tweet from '../components/Tweet';

export default class Contact extends React.Component {
<<<<<<< HEAD
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
=======
  componentDidMount () {
    jQuery ('#address-selector .bottom-button').on ('click', function (e) {
      e.preventDefault ();
      jQuery ('#address-selector').toggleClass ('show-map');
    });
  }

  render () {
    const {data} = this.props;
    const contact = data.contentfulContact;
    // console.log (contact);
>>>>>>> eb7913540cd9fe2e0ec7b4ecd34f855c442a7736
    return (
      <main id="content" className="white-background">
        <div className="container">
          <div className="row eq-height-container">
            <ContactDetails contact={contact} />
            <WriteToUs />
          </div>
          <div className="row eq-height-container">
<<<<<<< HEAD
            <ConnectWithUs social={social} />
=======
            <ConnectWithUs social={contact} />
>>>>>>> eb7913540cd9fe2e0ec7b4ecd34f855c442a7736
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
