import React from 'react';
import { FiHeadphones, FiMail, FiMapPin } from 'react-icons/fi';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import ContactForm from '../components/elements/ContactForm';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Container = styled.div`
  background-image: ${(props) => `url(${props.bgImage}) !important`};
`;

const Contact = ({ data: { contactYaml: contact } }) => (
  <Layout>
    <Seo title="Contact Us" />
    <Container
      bgImage={contact.coverImage}
      className="rn-page-title-area pt--120 pb--190 bg_image"
      data-black-overlay="6"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rn-page-title text-center pt--100">
              <h2 className="title theme-gradient">Contact With Us</h2>
              <p>
                Want to know more about what we do? Have a general query? We’ll
                always do our best to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <div className="rn-contact-top-area ptb--120 bg_color--5">
      <div className="container">
        <div className="row">
          {/* Start Single Address  */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="rn-address">
              <div className="icon">
                <FiHeadphones />
              </div>
              <div className="inner">
                <h4 className="title">Contact via Phone</h4>
                <p>
                  <a href={`tel:${contact.telephoneUk}`}>
                    {contact.telephoneUk}
                  </a>
                </p>
                <p>
                  <a href={`tel:${contact.telephoneIndia}`}>
                    {contact.telephoneIndia}
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* End Single Address  */}

          {/* Start Single Address  */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
            <div className="rn-address">
              <div className="icon">
                <FiMail />
              </div>
              <div className="inner">
                <h4 className="title">Email Address</h4>
                <p>
                  <a href={`mailto:${contact.emailSales}`}>
                    {contact.emailSales}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${contact.emailSupport}`}>
                    {contact.emailSupport}
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* End Single Address  */}

          {/* Start Single Address  */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
            <div className="rn-address">
              <div className="icon">
                <FiMapPin />
              </div>
              <div className="inner">
                <h4 className="title">Location</h4>
                <p>{contact.locationUk}</p>
                <p>{contact.locationIndia}</p>
              </div>
            </div>
          </div>
          {/* End Single Address  */}
        </div>
      </div>
    </div>
    <div className="rn-contact-page ptb--120 bg_color--1">
      <ContactForm contact={contact} />
    </div>
  </Layout>
);

export default Contact;

export const pageQuery = graphql`
  query contactQuery {
    contactYaml {
      emailSales
      emailSupport
      locationIndia
      locationUk
      telephoneIndia
      telephoneUk
      coverImage
      rightSideImage
    }
  }
`;
