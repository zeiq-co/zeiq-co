import React from 'react';
import { FiHeadphones, FiMail, FiMapPin } from 'react-icons/fi';
import ContactForm from '../components/elements/ContactForm';

import Seo from '../components/Seo';
import Layout from '../components/Layout';

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <div
      className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
      data-black-overlay="6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rn-page-title text-center pt--100">
              <h2 className="title theme-gradient">Cntact With Us</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
              text.
            </div>
          </div>
        </div>
      </div>
    </div>
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
                <h4 className="title">Contact With Phone Number</h4>
                <p>
                  <a href="tel:+057 254 365 456">+057 254 365 456</a>
                </p>
                <p>
                  <a href="tel:+856 325 652 984">+856 325 652 984</a>
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
                  <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                </p>
                <p>
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
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
                <p>
                  5678 Bangla Main Road, cities 580 <br /> GBnagla, example
                  54786
                </p>
              </div>
            </div>
          </div>
          {/* End Single Address  */}
        </div>
      </div>
    </div>
    <div className="rn-contact-page ptb--120 bg_color--1">
      <ContactForm />
    </div>
  </Layout>
);

export default Contact;
