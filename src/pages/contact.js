import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { filter } from 'lodash';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ContactDetails from '../components/ContactDetails';
import WriteToUs from '../components/WriteToUs';
import ConnectWithUs from '../components/ConnectWithUs';
import Subscribe from '../components/Subscribe';
import Tweet from '../components/Tweet';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      allMdx(filter: { frontmatter: { type: { in: ["social", "contact"] } } }) {
        edges {
          node {
            frontmatter {
              type
              facebookId
              twitterId
              linkedInId
              instagramId
              mediumId
              githubId
              address
              telephone
              email
            }
          }
        }
      }
    }
  `);
  const result = data.allMdx.edges;

  const contact = filter(result, o => o.node.frontmatter.type === 'contact');
  const social = filter(result, o => o.node.frontmatter.type === 'social');

  return (
    <Layout>
      <Seo title="Contact Us" />
      <main id="content" className="white-background">
        <div className="container">
          <div className="row eq-height-container">
            <ContactDetails contact={contact[0].node.frontmatter} />
            <WriteToUs />
          </div>
          <div className="row eq-height-container">
            <ConnectWithUs social={social[0].node.frontmatter} />
            <Subscribe />
            <Tweet />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
