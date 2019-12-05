import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ContactDetails from '../components/ContactDetails';
import WriteToUs from '../components/WriteToUs';
import ConnectWithUs from '../components/ConnectWithUs';
import Subscribe from '../components/Subscribe';
import Tweet from '../components/Tweet';

const Contact = () => {
  const contact = {};
  const social = {};

  return (
    <Layout>
      <Seo title="Contact Us" />
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
    </Layout>
  );
};

export default Contact;
